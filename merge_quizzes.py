import json
from collections import OrderedDict

# Read the existing quiz library
with open('quiz_library.json', 'r', encoding='utf-8') as f:
    existing_quizzes = json.load(f)

# Read the new categories
with open('new_categories.json', 'r', encoding='utf-8') as f:
    new_categories = json.load(f)

# Read the additional categories
with open('additional_categories.json', 'r', encoding='utf-8') as f:
    additional_categories = json.load(f)

# Read the more categories
with open('more_categories.json', 'r', encoding='utf-8') as f:
    more_categories = json.load(f)

# Read the final categories
with open('final_categories.json', 'r', encoding='utf-8') as f:
    final_categories = json.load(f)

# Read the missing categories
with open('missing_categories.json', 'r', encoding='utf-8') as f:
    missing_categories = json.load(f)

# Combine all quizzes
all_quizzes = existing_quizzes + new_categories + additional_categories + more_categories + final_categories + missing_categories

# Group quizzes by category, preserving category order
category_order = []
category_map = OrderedDict()
for quiz in all_quizzes:
    cat = quiz.get('category', 'Uncategorized')
    if cat not in category_map:
        category_map[cat] = []
        category_order.append(cat)
    category_map[cat].append(quiz)

# Sort quizzes within each category alphabetically by title
for cat in category_order:
    category_map[cat].sort(key=lambda q: q['title'])

# Flatten back to a single list, preserving category order
sorted_quizzes = []
for cat in category_order:
    sorted_quizzes.extend(category_map[cat])

# Write back to the quiz library
with open('quiz_library.json', 'w', encoding='utf-8') as f:
    json.dump(sorted_quizzes, f, indent=2, ensure_ascii=False)

print("Successfully merged and sorted all categories into quiz library!") 