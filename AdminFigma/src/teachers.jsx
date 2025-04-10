import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "./images/logo.svg";
import NotFound from "./NotFound";
import { faHome, faUserGraduate, faBuildingColumns, faGear, faChartSimple, faHeadset, faBell,} 
from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Teachers() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.ashyo.fullstackdev.uz/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container flex m-auto">
      <div className="w-[20%] min-h-screen bg-[#152259]">
        <center>
          <img className="mt-[26px]" src={logo} alt="icon" />
        </center>
        <h4 className="text-center text-white mt-6">Udemy Inter. school</h4>
        <hr className="text-[#BDBDBD] mt-[27px]" />
        <div className="flex flex-col justify-center items-center gap-2 mt-4">
          <button
            onClick={() => navigate("/dashboard")} className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB]">
            <p className="text-white text-[14px]"><FontAwesomeIcon icon={faHome} className="mr-2" />
            Dashboard
            </p>
          </button>
          <button onClick={() => navigate("/teachers")} className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB]">
            <p className="text-white text-[14px]"> <FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
            Teachers
            </p>
          </button>
          <button onClick={() => navigate("/students")} className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB]">
            <p className="text-white text-[14px]"><FontAwesomeIcon icon={faUserGraduate} className="mr-2" />
              Students
            </p>
          </button>
          <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB]">
            <p className="text-white text-[14px]"> <FontAwesomeIcon icon={faBuildingColumns} className="mr-2" />
              Billing
            </p>
          </button>
          <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB]">
            <p className="text-white text-[14px]"><FontAwesomeIcon icon={faGear} className="mr-2" />
              Settings
            </p>
          </button>
          <button className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB]">
            <p className="text-white text-[14px]"><FontAwesomeIcon icon={faChartSimple} className="mr-2" />
              Exams
            </p>
          </button>
          <button className="w-[90%] h-10 mt-[150px] border border-amber-50 rounded hover:bg-[#509CDB]">
            <p className="text-white text-[14px]"><FontAwesomeIcon icon={faBuildingColumns} className="mr-2" />
              Features
            </p>
          </button>
        </div>
      </div>
      <div className="w-[85%] min-h-screen pt-[30px]">
        <div className="container w-[93.5%] m-auto">
          <menu className="flex justify-end items-center gap-10">
            <FontAwesomeIcon icon={faBell} className="mr-5 text-[#152259]" size="2x" />
            <button onClick={() => navigate("/signup")} className="w-30 h-10 bg-[#152259] border-amber-50 rounded hover:bg-[#509CDB]">
              <p className="text-white">Log Out</p>
            </button>
          </menu>
          <div className="flex justify-between items-center mt-4 font-medium">
            <p className="text-[20px] text-[#4F4F4F]">Teachers</p>
            <button onClick={() => navigate("/students")} className="w-30 h-10 bg-[#152259] border-amber-50 rounded hover:bg-[#509CDB]">
            <p className="text-white">Add Teachers</p>
            </button>
          </div>
          <div className="flex justify-center items-center">
            <input type="text" className="w-full h-10 rounded mt-4 pl-10 bg-[#FCFAFA]" placeholder="Search for a student by name or email"
            />
          </div>
          <div className=" h-[419px] mt-[30px] rounded bg-[#FCFAFA] p-5 overflow-auto">
            {loading ? (
              <p>Yuklanmoqda...</p>
            ) : users.length === 0 ? (
              <NotFound />
            ) : (
              <table className="w-[400px]">
                <thead>
                  <tr>
                    <th className="py-1 px-2 border">ID</th>
                    <th className="py-1 px-2 border">FellName</th>
                    <th className="py-1 px-2 border">Email</th>
                    <th className="py-1 px-2 border">Password</th>
                    <th className="py-1 px-2 border">Sana</th>
                    <th className="py-1 px-2 border">Profil</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="py-1 px-2 border">{user.id}</td>
                      <td className="py-1 px-2 border">{user.fullname}</td>
                      <td className="py-1 px-2 border">{user.email}</td>
                      <td className="py-1 px-2 border">{user.password}</td>
                      <td className="py-1 px-2 border">{user.createdAt} <br />{user.updatedAt}</td>
                     <td className="py-1 px-2 border">
                     <button onClick={() => navigate(`/teachers/${user.id}`)} className="bg-[#152259] text-white hover:bg-[#509CDB] hover:border-none p-1  border rounded">
                    Profil
                    </button>
                     </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="flex justify-end mr-5">
            <button className="w-[181px] h-15 bg-[#152259] rounded-[30px] border-amber-50 hover:bg-[#509CDB] mt-4">
              <p className="text-white"><FontAwesomeIcon icon={faHeadset} className="mr-2" />
                Support
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;