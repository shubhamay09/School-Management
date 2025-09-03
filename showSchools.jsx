import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios.get('/api/getSchools').then(res => setSchools(res.data));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {schools.map((school, index) => (
        <div key={index} className="border rounded p-2 shadow">
          <img src={`/schoolImages/${school.image}`} alt={school.name} className="h-40 w-full object-cover" />
          <h3 className="text-lg font-bold">{school.name}</h3>
          <p>{school.address}, {school.city}</p>
        </div>
      ))}
    </div>
  );
}