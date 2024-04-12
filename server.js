const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res)=>{
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/640/480/any',
            'name': '홍길동',
            'birthday':'961222',
            'gender':'남자',
            'job':'대학생'
        },
        
        {
            'id': 2,
            'image': 'https://placeimg.com/640/480/any',
            'name': '지명헌',
            'birthday':'000728',
            'gender':'남자',
            'job':'디자이너'
        },
        
        {
            'id': 3,
            'image': 'https://placeimg.com/640/480/any',
            'name': '추만석',
            'birthday':'981222',
            'gender':'남자',
            'job':'프로그래머'
        }
    ]);
});

app.listen(port, ()=> console.log(`listening on port ${port}`));