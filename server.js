const mysql = require('mysql');

 let conn = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: 'Xbif2812',
    database: 'messenger'
 }
 );

 function onConnect(err) {
     console.log(err);
     if (err) throw err;
     console.log('Successfully connected to mysql!');
}

 conn.connect(onConnect)

function addUser(user) {
    // '1' + '2' == '12'
    let sql = `
    INSERT user(name, id, class, birthday, letter, phone, user_type)
    VALUES('${user.name}', '${user.id}', '${user.class}', '${user.birthday}', '${user.letter}', '${user.phone}', '${user.user_type}')
    `;
    return sql;
    // conn.query(sql);
}
user = {
    name: "Petya",
    id: '56766',
    class: '10',
    birthday: '20.01.2000',
    letter: 'A',
    phone: '+78000000000',
    user_type: 'Student'
}

function addChat(chat) {
    let k = `
    INSERT chat(id, cteator_id)
    VALUES('${chat.id}', '${chat.ctreator_id}')
    `;
    return k;
}
chat = {
    id: '45765',
    creator_id: user.id
}

function addMessage(message) {
    let p = `
    INSERT message(id, text, sender_id, chat_id)
    VALEUS('${message.id}', '${message.text}', '${message.sender_id}', '${message.chat_id}')
    `;
    return p;
}

message = {
    id: '3456',
    text: 'Hello',
    sender_id: user.id,
    chat_id: chat.id
}

function addUser_chat(user_chat) {
    let m = `
    INSERT user_chat(id, chat_id, user_id)
    VALEUS('${user_chat.id}', '${user_chat.chat_id}', '${user_chat.user_id}')
    `;
    return m;
}

user_chat = {
    id: '565778',
    chat_id: chat.id,
    user_id: user.id
}



 const express = require('express');

 const app = express();

 app.use(express.json()); // Можно получать данные из тела запроса

 


 app.get('/user', (_, res) => {
    conn.query('SELECT * FROM user WHERE id = 56766', (err, db_res) => {
        if (err) {
            res.status(500).send('Something went wrong');
        }
        else {
            console.log(db_res)
            res.status(200).send(JSON.stringify(db_res));
        }
    })
 })


 app.get('/chat', (_, res) => {
    conn.query('SELECT * FROM chat WHERE id = 45765', (err, db_res) => {
        if (err) {
            res.status(500).send('Something went wrong');
        }
        else {
            console.log(db_res)
            res.status(200).send(JSON.stringify(db_res));
        }
    })
 })


 app.get('/message', (_, res) => {
    conn.query('SELECT * FROM messege WHERE id = 3456', (err, db_res) => {
        if (err) {
            res.status(500).send('Something went wrong');
        }
        else {
            console.log(db_res)
            res.status(200).send(JSON.stringify(db_res));
        }
    })
 })


 app.get('/user_chat', (_, res) => {
    conn.query('SELECT * FROM user_chat WHERE id = 565778', (err, db_res) => {
        if (err) {
            res.status(500).send('Something went wrong');
        }
        else {
            console.log(db_res)
            res.status(200).send(JSON.stringify(db_res));
        }
    })
 })

 app.post('/user', (req, res) => {
    const sql = addUser(req.body);

    conn.query(sql, (err, db_res) => {
        if (err) {
            res.status(400).send(JSON.stringify(err));
        }
        else {
            res.status(201).send('OK');
        }
    })

 })

 app.post('/chat', (req, res) => {
    const banan = addChat(req.body);

    conn.query(banan, (err, db_res) => {
        if (err) {
            res.status(400).send(JSON.stringify(err));
        }
        else {
            res.status(201).send('OK');
        }
    })

 })


 app.post('/messege', (req, res) => {
    const gora = addMessage(req.body);
    conn.query(gora, (err, db_res) => {
        if (err) {
            res.status(400).send(JSON.stringify(err));
        }
        else {
            res.status(201).send('OK');
        }
    })
 })
 app.post('/user_chat', (req, res) => {
    const ocel = addUser(req.body);
    conn.query(ocel, (err, db_res) => {
        if (err) {
            res.status(400).send(JSON.stringify(err));
        }
        else {
            res.status(201).send('OK');
        }
    })
 })
 const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Проект работает на порту ${PORT} \n`);
    console.log(`http://localhost:${PORT} \n`);
});
