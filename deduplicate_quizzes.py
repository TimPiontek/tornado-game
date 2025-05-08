import json

def load_json(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(data, filename):
    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

# Load the quiz library
quizzes = load_json('quiz_library.json')

# Create a dictionary to track unique categories by title
unique_quizzes = {}
duplicates_found = []

# Process each quiz
for quiz in quizzes:
    title = quiz['title']
    if title not in unique_quizzes:
        unique_quizzes[title] = quiz
    else:
        duplicates_found.append(title)

# Convert back to list
deduplicated_quizzes = list(unique_quizzes.values())

# Save the deduplicated quizzes
save_json(deduplicated_quizzes, 'quiz_library.json')

# Print report
print(f"Found {len(duplicates_found)} duplicate categories:")
for title in duplicates_found:
    print(f"- {title}")
print(f"\nReduced from {len(quizzes)} to {len(deduplicated_quizzes)} unique categories.") 