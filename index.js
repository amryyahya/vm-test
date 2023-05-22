const Hapi = require('@hapi/hapi');
 
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });
 
  server.route(
    [
      {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
          return "<h1>anda mengakses api</h1>"
        },
      },
    ]
  );
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();