import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddSchool() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));

    await axios.post('/api/addSchool', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    alert("School added successfully!");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Add School</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <input {...register("name", { required: true })} placeholder="School Name" className="border p-2" />
        {errors.name && <span className="text-red-500">Name is required</span>}

        <input {...register("address", { required: true })} placeholder="Address" className="border p-2" />
        <input {...register("city", { required: true })} placeholder="City" className="border p-2" />
        <input {...register("state", { required: true })} placeholder="State" className="border p-2" />
        <input {...register("contact", { required: true, pattern: /^[0-9]+$/ })} placeholder="Contact" className="border p-2" />
        <input {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" className="border p-2" />
        <input type="file" {...register("image", { required: true })} className="border p-2" />

        <button type="submit" className="bg-blue-500 text-white p-2 mt-2">Add School</button>
      </form>
    </div>
  );
}