CREATE TABLE user(    
  id          INT           PRIMARY KEY AUTO_INCREMENT,
  name        VARCHAR(255)  NOT NULL,
  class       INT,
  letter      VARCHAR(3),
  birthday    DATE          NOT NULL,
  phone       VARCHAR(20)   UNIQUE NOT NULL,    
  user_type   VARCHAR(7),   CHECK (user_type = 'Teacher' or user_type = 'Student'),
  
  CHECK (birthday > '1900-01-01'),
  CHECK (phone REGEXP '^[+]?[0-9]{11}$')
);

CREATE TABLE chat(
  id          INT           PRIMARY KEY AUTO_INCREMENT,
  creator_id  INT           NOT NULL,
  
  FOREIGN KEY (creator_id) references user(id)
);

CREATE TABLE message(
  id          INT           PRIMARY KEY AUTO_INCREMENT,
  time_sent   TIMESTAMP     NOT NULL,
  text        TEXT          NOT NULL,
  sender_id   INT           NOT NULL,
  chat_id     INT           NOT NULL,
  
  FOREIGN KEY (sender_id) references user(id),
  FOREIGN KEY (chat_id) references chat(id)
);
    
CREATE TABLE user_chat (    
  id          INT           PRIMARY KEY AUTO_INCREMENT,
  chat_id     INT           NOT NULL,
  user_id     INT           NOT NULL,
  
  FOREIGN KEY (chat_id) references chat(id),
  FOREIGN KEY (user_id) references user(id)
);