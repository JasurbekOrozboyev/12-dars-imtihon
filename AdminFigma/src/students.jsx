import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "./images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserGraduate, faBuildingColumns, faGear, faChartSimple, faBell } from "@fortawesome/free-solid-svg-icons";

function Students() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("erkak");
  const [role, setRole] = useState("student");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const handleSave = async () => {
    const formdata = new FormData();
    formdata.append("fullname", fullName);
    formdata.append("email", email);
    formdata.append("phone_number", `+998${phoneNumber}`);
    formdata.append("password", password);
    formdata.append("gender", gender);
    formdata.append("Role", role.toUpperCase());
    formdata.append("is_verified", "false");

    try {
      const imageResponse = await fetch("https://skrinshoter.ru/sUWzKfusgqB");
      const imageBlob = await imageResponse.blob();
      formdata.append("image", imageBlob, "fixed-image.jpg");

      const response = await fetch("https://api.ashyo.fullstackdev.uz/users/add", {
        method: "POST",
        body: formdata,
      });

      if (response.ok) {
        alert("Talaba muvaffaqiyatli qo'shildi!");
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        setGender("erkak");
        setRole("student");
      } else {
        alert("Error: API qaytarmadi yoki telefon raqamni 998 ni  yozmaslik kerak");
      }
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Xatoli yuz berdi");
    }
  };

  return (
    <div className="container flex m-auto">
      <div className="w-[20%] min-h-screen bg-[#152259]">
        <center>
          <img className="mt-[26px]" src={logo} alt="icon" />
        </center>
        <h4 className="text-center text-white mt-6">Udemy Inter. school</h4>
        <hr className="text-[#BDBDBD] mt-[27px]" />
        <div className="flex flex-col justify-center items-center gap-2 mt-4">
          <button onClick={() => navigate("/dashboard")} className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
            <p className="text-white text-[14px]"><FontAwesomeIcon icon={faHome} className="mr-2" />Dashboard</p>
          </button>
          <button onClick={() => navigate("/teachers")} className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
            <p className="text-white text-[14px]"><FontAwesomeIcon icon={faHome} className="mr-2" />Teachers</p>
          </button>
          <button onClick={() => navigate("/students")} className="w-[90%] h-10 border border-amber-50 rounded bg-[#509CDB]">
            <p className="text-white text-[14px]"><FontAwesomeIcon icon={faUserGraduate} className="mr-2" />Students</p>
          </button>
          <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
            <p className="text-white text-[14px]"><FontAwesomeIcon icon={faBuildingColumns} className="mr-2" />Billing</p>
          </button>
          <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
            <p className="text-white text-[14px]"><FontAwesomeIcon icon={faGear} className="mr-2" />Settings and profile</p>
          </button>
          <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
            <p className="text-white text-[14px]"><FontAwesomeIcon icon={faChartSimple} className="mr-2" />Exams</p>
          </button>
          <button className="w-[90%] h-10 border mt-[150px] border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
            <p className="text-white text-[14px] "><FontAwesomeIcon icon={faBuildingColumns} className="mr-2" />Features new</p>
          </button>
        </div>
      </div>

      <div className="w-full min-h-screen pt-[30px]">
        <div className="container w-[93.5%] m-auto">
          <menu className="flex justify-end items-center gap-10">
            <FontAwesomeIcon icon={faBell} className="mr-5 text-[#152259]" size="2x" />
            <button onClick={handleLogout} className="w-30 h-10 bg-[#152259] border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
              <p className="text-white"><FontAwesomeIcon icon={faBell} className="mr-5" />Log Out</p>
            </button>
          </menu>
          <div className="flex justify-between items-center m-auto mt-4 font-medium">
            <p className="text-[20px] text-[#4F4F4F]">Add Students</p>
            <button onClick={handleSave} className="w-30 h-10 bg-[#152259] border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
              <p className="text-white">Save</p>
            </button>
          </div>
          <form className="grid grid-cols-2 gap-10 mt-15">
            <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="border border-[#A7A7A7] rounded pl-3 w-full h-11" type="text" placeholder="Full name" required />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="border border-[#A7A7A7] rounded pl-3 w-full h-11" type="email" placeholder="Email address" required />
            <input value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="border border-[#A7A7A7] rounded pl-3 w-full h-11" type="text" placeholder="Phone number (901234567)" required />
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="border border-[#A7A7A7] rounded pl-3 w-full h-11" type="password" placeholder="Password" required />
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="border border-[#A7A7A7] rounded pl-3 w-full h-11">
              <option value="erkak">Erkak</option>
              <option value="ayol">Ayol</option>
            </select>
            <select value={role} onChange={(e) => setRole(e.target.value)} className="border border-[#A7A7A7] rounded pl-3 w-full h-11">
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Students;
