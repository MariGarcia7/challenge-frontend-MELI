const app = require('./app');

async function main() {
    //Escuchar peticiones
    const PORT = process.env.PORT || 4000
    await app.listen(app.get('port'));
    console.log('Server running on port', app.get('port'));
}

main();

