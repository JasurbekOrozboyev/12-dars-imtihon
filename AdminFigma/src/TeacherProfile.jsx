import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./images/logo.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserGraduate, faBuildingColumns, faGear, faChartSimple, faHeadset, faBell, faGraduationCap, faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";


function TeacherProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");  
  };

  useEffect(() => {
    fetch(`https://api.ashyo.fullstackdev.uz/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("User data:", data);
        if (Array.isArray(data)) {
          setUser(data[0]); 
        } else {
          setUser(data);
        }
      })
      .catch(err => console.error("Xatolik:", err));
  }, [id]);

  if (!user) return <p>Yuklanmoqda...</p>;

  return (
    <>

<div className="container flex m-auto">
            <div className="w-[20%] min-h-screen bg-[#152259]">
                <center>
                <img className="mt-[26px]" src={logo} alt="icon" />
                </center>
                <h4 className="text-center text-white mt-6">Udemy Inter. school</h4>
                <hr className="text-[#BDBDBD] mt-[27px]" />
                <div className="flex flex-col justify-center items-center gap-2 mt-4">
                    <button onClick={() => navigate("/dashboard")}
                    className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                    <p className="text-white text-[14px]"><FontAwesomeIcon icon={faHome} className="mr-2" />Dashboard</p>
                    </button>
                    <button onClick={() => navigate("/teachers")}
                    className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
                        <p className="text-white text-[14px]"><FontAwesomeIcon icon={faHome} className="mr-2" />Teachers</p>
                    </button>
                    <button onClick={() => navigate("/students")}
                    className="w-[90%] h-10 border border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
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
                <menu className="flex justify-between items-center pl-6 pr-10">
                    <div>
                        <h3>Learn  how to launch faster <br />
                        watch our webinar for tips from our experts and get a limited time offer.</h3>
                    </div>
                    <button onClick={handleLogout} className="w-30 h-10 bg-[#152259] border-amber-50 rounded hover:bg-[#509CDB] hover:border-none ">
            <p className="text-white"><FontAwesomeIcon icon={faBell} className="mr-5" />Log Out</p>
          </button>
                </menu>
            <div className="w-[1041px] h-[601px] m-auto flex justify-center items-center min-h-screen gap-10">
                  <div className="w-[50%] ">
                    <center>
                    <img className="rounded-full w-[280px] h-[260px]" src="https://i.pinimg.com/originals/fc/67/03/fc6703e79d41363832817cbdf297beaa.jpg" alt="man" />
                    </center>
                    <h2 className="text-2xl font-bold text-center mt-5">{user.fullname}</h2>
                    <h2 className="text-[#4F4F4F] text-center mt-2">Email: {user.email}</h2>
                    <div className="mt-10">
                      <ul className="flex justify-center items-center gap-10">
                        <li className="bg-[#EFF3FA] rounded-[10px] hover:bg-[#509CDB] "><FontAwesomeIcon icon={faGraduationCap} className="text-[#A7A7A7] p-3 hover:text-[#152259]" size="2x" /></li>
                        <li className="bg-[#EFF3FA] rounded-[10px] hover:bg-[#509CDB]"><FontAwesomeIcon icon={faPhoneVolume} className="text-[#A7A7A7] p-3 hover:text-[#152259]" size="2x" /></li>
                        <li className="bg-[#EFF3FA] rounded-[10px] hover:bg-[#509CDB]"><FontAwesomeIcon icon={faEnvelope} className="text-[#A7A7A7] p-3 hover:text-[#152259]" size="2x" /></li>
                      </ul>
                    </div>
                  </div>
                  <div className="w-[50%]">
                    <p><b>About</b> <br />
                   <p className="text-[#A7A7A7]"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quae obcaecati illum, nesciunt laboriosam deleniti mollitia ipsam? Nostrum ea neque eius velit nam pariatur ad iure, unde accusantium dolores aliquam.
                    Quam sed quia adipisci natus perspiciatis hic et officiis dolorum iste beatae, doloremque consectetur facere quae, voluptatibus consequatur eaque? Itaque eligendi quam tempore aliquid eos modi officiis quod exercitationem quos!
                    Voluptatem omnis possimus laboriosam sapiente laborum quae quidem commodi veniam expedita. Beatae, nisi necessitatibus in, consequuntur aliquam repellat, ad minus maxime illum ab aut veniam quo sapiente ipsam exercitationem hic?</p>
                    </p>
                   <div className="grid grid-cols-2 mt-5">
                   <p className="text-[#A7A7A7]"><b className="text-black">ID:</b> <br /> {user.id}</p>
                   <p className="text-[#A7A7A7] text-[10px]"><b className="text-black text-[16px]">Password:</b> <br /> {user.password}</p>
                   <p className="text-[#A7A7A7]"><b className="text-black">Yaratilgan sana:</b> <br /> {user.createdAt}</p>
                   <p className="text-[#A7A7A7]"><b className="text-black">Yangilangan sana:</b> <br /> {user.updatedAt}</p>
                   </div>
                  </div>
            </div>
                    <div className="flex justify-end mr-5">
                    <button className="w-[181px] h-15 bg-[#152259] rounded-[30px]  border-amber-50 hover:bg-[#509CDB] hover:border-none">
                        <p className="text-white"><FontAwesomeIcon icon={faHeadset} className="mr-2" />Support</p>
                    </button>
                    </div>
            </div>
    </div>

   
    </>
  );
}

export default TeacherProfile;
