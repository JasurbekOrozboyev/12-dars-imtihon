import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setLoginError("");
  };

  const handleLogin = async () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Bu joy bo'sh";
    if (!form.password) newErrors.password = "Bu joy bo'sh";
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    try {
      const res = await axios.post("https://api.ashyo.fullstackdev.uz/auth/login", form);
      const token = res.data.accessToken;
      if (token) {
        localStorage.setItem("accessToken", token);
        navigate("/dashboard"); 
      } else {
        setLoginError("Token yoq!");
      }
    } catch (err) {
      setLoginError("Login yoki parol noto'g'ri!");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[512px] p-5 shadow-lg rounded">
        <h1 className="text-center mb-10 text-[30px] font-semibold">Welcome, Log into your account</h1>
        <h4 className="text-center mb-3 text-[#667085]">It is our great pleasure to have you on board! </h4>
        <div className="flex flex-col gap-6">
          <div>
            <input type="text" name="email" value={form.email} onChange={handleChange} className="p-2 border border-black rounded w-full" placeholder="Login"/>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <input type="password" name="password" value={form.password} onChange={handleChange} className="p-2 border border-black rounded w-full" placeholder="Password"/>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          {loginError && <p className="text-red-500 text-center text-sm">{loginError}</p>}
          <div className="flex justify-center items-center gap-10">
            <button onClick={handleLogin} className="flex justify-center items-center mt-3 border px-5 py-1 rounded bg-blue-500 text-white active:bg-white active:text-blue-500">
              <p>Login</p>
            </button>
            <button onClick={() => navigate("/signup")} className="flex justify-center items-center mt-3 border px-5 py-1 rounded bg-blue-500 text-white active:bg-white active:text-blue-500">
              <p>Sign Up</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SignIn;