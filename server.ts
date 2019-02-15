import express from 'express';
let cors = require('cors');

const app = express();




//============================================================================
//     Middleware
//============================================================================
// Cors
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));

// Bodyparser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//============================================================================
//      get routes
//============================================================================


app.get('/users', (req: any, res: any) => {
  const users = {
    "users": [
      {
        "name": "John Doe",
        "id": "1"
      },
      {
        "name": "Jane Doe",
        "id": "2"
      },
      {
        "name": "Litte Doe",
        "id": "3"
      },
    ]
  }
  console.log(users);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(users));
});


//============================================================================
//      Passport strategy
//============================================================================



//============================================================================
//      Server
//============================================================================
app.listen(3000, () => {
  console.log('server starting on port 3000');
});

