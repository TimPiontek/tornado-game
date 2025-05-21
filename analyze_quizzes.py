import json
from supabase import create_client, Client

SUPABASE_URL = 'https://dmbbsrcwqpmdxqtzvtqj.supabase.co'
SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtYmJzcmN3cXBtZHhxdHp2dHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3NDg1OTYsImV4cCI6MjA2MjMyNDU5Nn0.E7EYSLCFXMYw5f4Wv7EXXj7-5yAT__BoYXklDB4uE2w'

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Fetch all quizzes (publicly accessible)
res = supabase.table('quizzes').select('*').execute()
quizzes = res.data

# Format for quiz_library.json (title, category, questions)
library = []
for quiz in quizzes:
    # Only include quizzes with questions
    if not quiz.get('questions') or not isinstance(quiz['questions'], list):
        continue
    library.append({
        'title': quiz.get('title', ''),
        'category': quiz.get('category', ''),
        'questions': quiz['questions']
    })

with open('quiz_library.json', 'w') as f:
    json.dump(library, f, indent=2)

print(f"Wrote {len(library)} quizzes to quiz_library.json")

def analyze_quizzes():
    with open('quiz_library.json', 'r', encoding='utf-8') as f:
        quizzes = json.load(f)
    
    short_quizzes = []
    for quiz in quizzes:
        question_count = len(quiz.get('questions', []))
        if question_count < 20:
            short_quizzes.append({
                'title': quiz['title'],
                'category': quiz.get('category', 'Uncategorized'),
                'question_count': question_count,
                'questions_needed': 30 - question_count
            })
    
    print(f"\nFound {len(short_quizzes)} quizzes with fewer than 20 questions:")
    for quiz in sorted(short_quizzes, key=lambda x: x['question_count']):
        print(f"\n{quiz['title']} ({quiz['category']})")
        print(f"Current questions: {quiz['question_count']}")
        print(f"Questions needed: {quiz['questions_needed']}")

if __name__ == '__main__':
    analyze_quizzes() 