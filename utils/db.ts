import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'bkolsut_calories_calculator',
    namedPlaceholders: true,
    decimalNumbers: true,
});
