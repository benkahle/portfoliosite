
/**
 * Module dependencies.
 */

var express = require( 'express' );
var handlebars = require( 'express3-handlebars' );
var routes = require( './routes' );
var http = require( 'http' );
var path = require( 'path' );

var app = express();

// all environments
app.set( 'port', process.env.PORT || 3000 );
app.set( 'views', path.join( __dirname, 'views' ) );
app.engine( 'handlebars', handlebars( { defaultLayout: 'main' } ) );
app.set( 'view engine', 'handlebars' );
app.use( express.favicon() );
app.use( express.logger( 'dev' ) );
app.use( express.bodyParser() );
app.use( express.methodOverride() );
app.use( app.router );
app.use( express.static( path.join( __dirname, '/public' ) ) );

// development only
if ( app.get( 'env' ) === 'development' ) {
  app.use( express.errorHandler() );
}

app.get('/', routes.index);
app.get('/profile', routes.index);
app.get('/contact', routes.index);
app.get('/projects', routes.index);
app.get('/resume', routes.index);

http.createServer( app ).listen( app.get( 'port' ), function () {
  console.log( 'Express server listening on port ' + app.get( 'port' ) );
} );