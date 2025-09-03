import mysql from 'mysql2/promise';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = formidable({ multiples: false, uploadDir: './public/schoolImages', keepExtensions: true });

    form.parse(req, async (err, fields, files) => {
      if (err) return res.status(500).json({ error: 'File upload error' });

      const { name, address, city, state, contact, email_id } = fields;
      const image = files.image ? files.image.newFilename : '';

      const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'schoolDB'
      });

      await connection.execute(
        'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, address, city, state, contact, image, email_id]
      );
      await connection.end();

      res.status(200).json({ message: 'School added successfully' });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}