var express = require('express'),
    http = require('http'),
    path = require('path'),
    employees = require('./routes/employees'),
    sessions = require('./routes/sessions');

var app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.compress());
app.use(express.bodyParser({
    uploadDir: __dirname + '/uploads',
    keepExtensions: true
}));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, '../directory/www')));

app.get('/employees', employees.findAll);
app.get('/employees/:id', employees.findById);

app.get('/sessions', sessions.findAll);
app.get('/sessions/:id', sessions.findById);

// DON'T FORGET TO SECURE THIS ENDPOINT WITH APPROPRIATE AUTHENTICATION/AUTHORIZATION MECHANISM
// app.post('/s3signing', auth.validateToken, s3signing.sign);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});