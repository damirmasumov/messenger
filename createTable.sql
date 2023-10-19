 CREATE TABLE user (
    id INT primary key AUTO_INCREMENT,
    name  VARCHAR(255) NOT NULL,
    class INT,
    letter VARCHAR(3),
    birthday DATE NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    
    CONSTRAINT Messendger_chk_birthday CHECK (birthday > '1900-01-01'),
    CONSTRAINT Messendger_chk_phone CHECK (phone REGEXP '^[+]?[0-9]{11}$'),
    user_type VARCHAR(7),
    CHECK (user_type = 'Teacher' or user_type = 'Student')
    );
    
  CREATE TABLE Chat(
    creator_id  INT NOT NULL,
    FOREIGN KEY (creator_id) references user(id)
 );
     
INSERT INTO user(name, class, letter, birthday, phone, user_type)
VALUES("Петр", 11, "А", "2000-01-01", "+78000000000", "Student");
     
SELECT * FROM user;