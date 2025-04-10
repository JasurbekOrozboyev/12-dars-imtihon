import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullname: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async () => {
    const newErrors = {};
    if (!form.fullname) newErrors.fullname = "FullName kiritilmagan!";
    if (!form.email) newErrors.email = "Email kiritilmagan!";
    if (!form.password) newErrors.password = "Iltimos parol kiriting!";
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const response = await axios.post("https://api.ashyo.fullstackdev.uz/auth/register", form);
      const token = response.data.accessToken;
      if (token) {
        localStorage.setItem("accessToken", token);
        navigate("/dashboard");}
    } catch (error) {
      alert("xatolik yuz berdi yoki " + (error.response?.data?.message || error.message));
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[512px] p-5 shadow-lg rounded">
        <h1 className="text-center mb-6 text-[36px]">Welcome, Sign up</h1>
        <h4 className="text-center mb-5 text-[#667085]">It is our great pleasure to have you on board!</h4>
        <div className="flex flex-col gap-4">
          <div>
            <input name="fullname" type="text" value={form.fullname} onChange={handleChange} className="p-2 border border-black rounded w-full" placeholder="FullName"/>
            {errors.fullname && <p className="text-red-500 text-sm mt-1 font-semibold">{errors.fullname}</p>}
          </div>
          <div>
            <input name="email" type="email" value={form.email} onChange={handleChange} className="p-2 border border-black rounded w-full" placeholder="Email"/>
            {errors.email && <p className="text-red-500 text-sm mt-1 font-semibold">{errors.email}</p>}
          </div>
          <div>
            <input name="password" type="password" value={form.password} onChange={handleChange} className="p-2 border border-black rounded w-full" placeholder="Password"/>
            {errors.password && <p className="text-red-500 text-sm mt-1 font-semibold">{errors.password}</p>}
          </div>
          <div className="flex gap-4 justify-center items-center mt-4">
            <button onClick={handleSubmit} className="border px-5 py-2 rounded bg-blue-500 text-white active:bg-white active:text-blue-500">
              Sign Up
            </button>
            <button onClick={() => navigate("/signin")} className="border px-5 py-2 rounded bg-blue-500 text-white active:bg-white active:text-blue-500">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SignUp;