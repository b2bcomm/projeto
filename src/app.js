const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const cors = require('cors');
// ROTA DO SITE
const homeRouter = require('./home/routes');
// LOGIN ( API )
const cadastroAnunciantesRouter = require('./cadastro_anunciantes/routes')
// PRODUTO ( API )
const apiProdutoRouter = require('./api/routes')
// CADASTRO DAS EMPRESAS ( PAINEL ADIMINSTRATIVO )
const painel_admRouter = require('./painel_adm/routes')
// MIDDLEWARES SERSSION
const { configureSession } = require('./middlewares/session')

const app = express();
// view engine setup
app.use(cors())
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(session({ secret : 'elton', resave: true, saveUninitialized: true }));

app.use('/', homeRouter);
app.use('/api/todo', cadastroAnunciantesRouter)
app.use('/painel', painel_admRouter)
app.use('/api', apiProdutoRouter)

configureSession(app)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
