require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(()=> {
        app.emit('pronto');
    })
    .catch (e => console.log(e));


const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const routes = require('./routes')
const path = require('path')
const helmet = require("helmet")
const csrf = require("csurf")
const {middlewareGlobal,checkCsrfError,csrfMiddleware} = require('./src/middleware/middleware');


app.use(helmet());

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'public')))

const sessionOption = session({
    secret:'texto que ninguem vai saber',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000 * 60 * 60 * 24 * 7, //tempo que vai dura o cook (7dias)
        httpOnly:true
    }
});
app.use(sessionOption);
app.use(flash());

app.set('views', path.resolve(__dirname,'src','views')); //caminho absoluto
app.set('view engine', 'ejs');

app.use(csrf());
//Meu próprio middleware
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
// app.use(outromiddleware)

app.use(routes);

app.on('pronto', ( ) =>{
    app.listen(3000, () => {
    console.log('acessar http://localhost:3000')
    console.log('servidor executando na porta 3000')
    });
});
