import {createPool} from 'mysql2/promise'

const pull = createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '112020a',
    database: 'Prueba01'
});

export default pull;