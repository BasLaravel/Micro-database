"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors = require('cors');
var app = express_1.default();
//============================================================================
//     Middleware
//============================================================================
// Cors
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    credentials: true
};
app.use(cors(corsOptions));
// Bodyparser
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//============================================================================
//      get routes
//============================================================================
app.get('/users', function (req, res) {
    var users = {
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
    };
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
app.listen(3000, function () {
    console.log('server starting on port 3000');
});
