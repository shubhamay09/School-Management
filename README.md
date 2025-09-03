# School-Management
Developed a full-stack School Management web app using Next.js, MySQL, and React Hook Form. Implemented a responsive form to add school details with validation and image upload, storing data in MySQL. Created a dynamic page to fetch and display school records in a product-grid layout, optimized for mobile and desktop.


* **Framework**: React or Next.js
* **Backend**: MySQL
* **Pages**:

  1. Input & store school data
  2. Fetch & display stored school data

# School Data Management App

This project is a mini web application built using **React/Next.js** and **MySQL**. It provides a simple interface for adding and storing school details in a database and fetching and displaying the stored data on a separate page.

---

## Features

- **Add School Details**: A form to input school information such as name, address, city, state, contact number, and image.  
- **Store in MySQL Database**: Saves data securely in a MySQL table.  
- **View Schools List**: Displays all stored schools with relevant information in a clean layout.  
- **Responsive Design**: Works on both desktop and mobile devices.

---

## Tech Stack

| Frontend        | Backend & Database |
|------------------|--------------------|
| React / Next.js   | Node.js (for APIs) |
| Tailwind CSS (UI) | MySQL              |

---

## Database Schema

The MySQL table `schools` has the following fields:

| Column Name | Data Type     | Description              |
|-------------|---------------|---------------------------|
| id          | INT (PK)       | Auto Increment Primary Key |
| name        | TEXT           | School Name               |
| address     | TEXT           | School Address            |
| city        | TEXT           | City Name                 |
| state       | TEXT           | State Name                |
| contact     | BIGINT         | Contact Number            |
| image       | TEXT / VARCHAR | URL or base64 image data   |

SQL to create the table:
```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  contact BIGINT,
  image TEXT
);
````

## Project Structure

```
school-data-app/
│
├── frontend/              # React or Next.js Frontend
│   ├── pages/
│   │   ├── add-school.js   # Page to add school data
│   │   ├── view-schools.js # Page to display stored data
│   ├── components/         # Reusable UI components
│   └── styles/             # CSS or Tailwind files
│
├── backend/
│   ├── server.js           # Node.js Express server
│   ├── routes/             # API routes for CRUD operations
│   ├── config/db.js        # MySQL Database connection
│
└── README.md
```

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/school-data-app.git
cd school-data-app
```

### 2. Install Dependencies

#### For Frontend:

```bash
cd frontend
npm install
```

#### For Backend:

```bash
cd backend
npm install
```

---

### 3. Configure Database

* Open `backend/config/db.js`
* Add your MySQL credentials:

```javascript
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your-password",
  database: "school_db"
});
db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected!");
});
module.exports = db;
```

---

### 4. Start the Application

#### Backend Server:

```bash
cd backend
node server.js
```

#### Frontend Server:

```bash
cd frontend
npm run dev
```

---

## API Endpoints

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | `/api/add-school`  | Add new school data      |
| GET    | `/api/get-schools` | Fetch all school records |

---

## Screenshots

* **Add School Page**: Form UI for adding school details
* **View Schools Page**: Displays all saved schools in a card layout

---

## Future Improvements

* Edit & delete school data
* Image upload & storage on cloud
* Authentication for secure access
* Search & filter options

---

## License

This project is licensed under the MIT License.

```

---

If you want, I can also **write the full React + Node.js code** for this project with proper structure so you can directly run it.  

Do you want me to create the full code as well?
```

