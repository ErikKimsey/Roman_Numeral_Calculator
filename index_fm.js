var forever = require('forever-monitor');

var child = new(forever.Monitor)('index.js');

child.on( "exit", function() {
  console.log( 'app.js has exited!' );
} );
child.on( "restart", function() {
  console.log( 'index.js has restarted.' );
} );

child.start();
