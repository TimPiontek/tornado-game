-- Migration: Enable ON DELETE CASCADE for user_quiz_links.quiz_id
ALTER TABLE user_quiz_links DROP CONSTRAINT IF EXISTS user_quiz_links_quiz_id_fkey;
ALTER TABLE user_quiz_links ADD CONSTRAINT user_quiz_links_quiz_id_fkey FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE; 