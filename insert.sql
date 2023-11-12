INSERT INTO user(name, class, letter, birthday, phone, user_type)VALUES("Петр", 11, "А", "2000-01-01", "+78000000000", "Student");

INSERT INTO Chat(creator_id)VALUES(1);

INSERT INTO message(time_sent, text, sender_id, chat_id) VALUES ("2023-10-26 11:24:00", "Hello!", 1, 1);

INSERT INTO user_chat(chat_id, user_id) VALUES(1, 1);