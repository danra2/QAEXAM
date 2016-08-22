var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    bp       = require('body-parser'),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8000,
    app      = express(),
    session  = require('express-session');

app.use(bp.json())
app.use(bp.urlencoded({extended: true}))
app.use( express.static( path.join( root, 'client' )));

app.use(session({
 secret:'somesecrettokenhere',
 resave: false,
 saveUninitialized: true,
 maxAge: 5000000
}));

app.use(express.static(path.join(__dirname, './client')))
app.use(express.static(path.join(__dirname, './bower_components')));

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
