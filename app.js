const express = require('express');
const cors = require('cors');

const bankRoutes = require('./routes/bankRoutes');
const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

app.use(cors());

app.use(express.json({
    limit: '15mb'
}));

app.use(
    express.urlencoded({
      limit: '15mb',
      extended: true
    })
)

app.use('/api/v1', bankRoutes);

app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;