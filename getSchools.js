import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'schoolDB'
  });

  const [rows] = await connection.execute('SELECT name, address, city, image FROM schools');
  await connection.end();

  res.status(200).json(rows);
}