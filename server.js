const app = require('./app')
const port = 3000

app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
});

process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION!!! shutting down...')
    console.log(err)
    process.exit(1)
});

process.on('unhandledRejection', err => {
    console.log('UNHANDLED REJECTION!!!  shutting down ...')
    console.log(err)
    process.exit(1)
});