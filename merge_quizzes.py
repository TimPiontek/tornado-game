import json

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

# Combine all quizzes
combined_quizzes = existing_quizzes + new_categories + additional_categories + more_categories

# Write back to the quiz library
with open('quiz_library.json', 'w', encoding='utf-8') as f:
    json.dump(combined_quizzes, f, indent=2, ensure_ascii=False)

print("Successfully merged all new categories into quiz library!") 