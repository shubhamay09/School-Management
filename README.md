# **School Data Management App**

This project is a **full-stack School Data Management Web Application** built using **Next.js (React Framework)**, **MySQL**, and **Node.js APIs**.
It allows users to:

1. Add school details via a responsive form with validations and image upload.
2. Store school data in a MySQL database.
3. Fetch and display all schools dynamically in a product-card style layout.

---

## **Features**

* 🏫 **Add School Details**: Input fields for school name, address, city, state, contact number, email, and image upload.
* 🗄️ **MySQL Database Integration**: Securely stores school data.
* 🖼️ **Image Upload Support**: Stores images in a dedicated folder (`schoolImages`) or cloud storage.
* 📱 **Responsive Design**: Works seamlessly on desktop and mobile.
* ⚡ **Dynamic School Listing**: Displays school data in a grid layout like an e-commerce product page.

---

## **Tech Stack**

| Frontend                | Backend & Database          |
| ----------------------- | --------------------------- |
| Next.js / React         | Node.js (API Routes)        |
| Tailwind CSS (Styling)  | MySQL (Database)            |
| React Hook Form (Forms) | MySQL2 (Database Connector) |
| Axios (HTTP Requests)   | Formidable (Image Handling) |

---

## **Database Schema**

The MySQL table `schools` has the following fields:

| Column Name | Data Type | Description                |
| ----------- | --------- | -------------------------- |
| id          | INT (PK)  | Auto Increment Primary Key |
| name        | TEXT      | School Name                |
| address     | TEXT      | School Address             |
| city        | TEXT      | City Name                  |
| state       | TEXT      | State Name                 |
| contact     | BIGINT    | Contact Number             |
| image       | TEXT      | Image Path or URL          |
| email\_id   | TEXT      | Email ID                   |

**SQL to create the table:**

```sql
CREATE DATABASE schoolDB;
USE schoolDB;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  contact BIGINT,
  image TEXT,
  email_id TEXT
);
```

---

## **Project Structure**

```
school-data-app/
│
├── frontend/               
│   ├── pages/
│   │   ├── addSchool.jsx      # Page to add school data
│   │   ├── showSchools.jsx    # Page to display school data
│   ├── components/            # Reusable UI components
│   ├── styles/                # Tailwind CSS files
│   └── public/schoolImages     # Uploaded school images
│
├── backend/
│   ├── server.js               # Node.js Express server
│   ├── routes/
│   │   ├── addSchool.js         # API to insert school data
│   │   ├── getSchools.js        # API to fetch school data
│   ├── config/db.js             # MySQL database connection
│
└── README.md
```

---

## **Installation & Setup**

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/school-data-app.git
cd school-data-app
```

---

### 2️⃣ Install Dependencies

**Frontend:**

```bash
cd frontend
npm install
```

**Backend:**

```bash
cd backend
npm install
```

---

### 3️⃣ Configure Database

Open `backend/config/db.js` and update credentials:

```js
const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your-password",
  database: "schoolDB"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected!");
});

module.exports = db;
```

---

### 4️⃣ Start the Application

**Backend Server:**

```bash
cd backend
node server.js
```

**Frontend Server:**

```bash
cd frontend
npm run dev
```

Access the app at:

* **Add School Page**: [http://localhost:3000/addSchool](http://localhost:3000/addSchool)
* **Show Schools Page**: [http://localhost:3000/showSchools](http://localhost:3000/showSchools)

---

## **API Endpoints**

| Method | Endpoint           | Description              |
| ------ | ------------------ | ------------------------ |
| POST   | `/api/add-school`  | Add new school data      |
| GET    | `/api/get-schools` | Fetch all school records |

---

## **Screenshots (Optional)**

* Add School Page: Input form with validation and image upload.
* Show Schools Page: Card layout displaying all saved schools.

---

## **Future Improvements**

* 🔒 Authentication for secure access.
* ✏️ Edit & Delete school details.
* ☁️ Cloud Storage for images.
* 🔍 Search & Filter options.

---

## **License**

```
MIT License  

Copyright (c) 2025 [Your Name]  

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

I can also prepare a **sample folder structure with README + boilerplate Next.js & Node.js code** so you can directly run and deploy it.

Do you want me to create that as a ZIP file for you?
