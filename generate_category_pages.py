import json
import os
import re
import random

TEMPLATE_FILE = 'category_template.html'
QUIZ_FILE = 'quiz_library.json'
OUTPUT_DIR = '.'

# Helper to slugify category names for filenames and URL params
slugify = lambda s: re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

# Short, fun descriptions for some common categories
category_descriptions = {
    'Music': 'Test your knowledge of music legends, albums, and songs!',
    'History': 'Challenge yourself with questions from the past!',
    'Science': 'Explore the wonders of science and discovery!',
    'Art': 'From classic to modern, see how much you know about art!',
    'Sports': 'For fans of all things athletic and competitive!',
    'Geography': 'Travel the world with these geography questions!',
    'Technology': 'Tech, computers, and the digital world await!',
    'Languages': 'Brush up on your language skills!',
    'Professional Exams': 'Practice for real-world tests and certifications!',
    'Social Sciences': 'Psychology, sociology, and more!',
    'Philosophy': 'Think deep with philosophy questions!',
    'Religion': 'Test your knowledge of world religions!',
    'Arts': 'The world of painting, sculpture, and more!',
}

def main():
    with open(QUIZ_FILE, 'r', encoding='utf-8') as f:
        quizzes = json.load(f)
    with open(TEMPLATE_FILE, 'r', encoding='utf-8') as f:
        template = f.read()
    # Build a list of all quiz titles for related links
    all_titles = [quiz['title'] for quiz in quizzes]
    all_slugs = [slugify(title) for title in all_titles]
    # Group quizzes by title (to avoid duplicates)
    seen = set()
    for idx, quiz in enumerate(quizzes):
        title = quiz['title']
        if title in seen:
            continue
        seen.add(title)
        cat = quiz.get('category', title)
        slug = slugify(title)
        desc = category_descriptions.get(cat, f"Fun and challenging questions about {title}!")
        # Get 3 sample questions
        sample_qs = quiz['questions'][:3]
        sample_html = '\n'.join(f'<li>{q["question"]}</li>' for q in sample_qs)
        # Pick 3 random related quizzes (not the current one)
        related = [(t, s) for t, s in zip(all_titles, all_slugs) if t != title]
        related_sample = random.sample(related, min(3, len(related)))
        related_links = '\n'.join(f'<a href="/category-{s}.html">{t}</a>' for t, s in related_sample)
        html = template.replace('{{CATEGORY_NAME}}', title)
        html = html.replace('{{CATEGORY_DESC}}', desc)
        html = html.replace('{{SAMPLE_QUESTIONS}}', sample_html)
        html = html.replace('{{CATEGORY_SLUG}}', slug)
        html = html.replace('{{RELATED_LINKS}}', related_links)
        out_path = os.path.join(OUTPUT_DIR, f'category-{slug}.html')
        with open(out_path, 'w', encoding='utf-8') as outf:
            outf.write(html)
        print(f'Generated {out_path}')

if __name__ == '__main__':
    main() 