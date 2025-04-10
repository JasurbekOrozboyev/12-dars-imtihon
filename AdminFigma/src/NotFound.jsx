import bear from "./images/bear.svg"

function NotFound() {
    return (
     <>
     <div className="flex flex-col justify-center items-center min-h-screen rounded bg-[#FCFAFA] p-5 overflow-auto">
          <img src={bear} alt="bear" />
          <h2 className="text-center text-[28px] text-[#4F4F4F]">No Teachers at this time</h2>
          <h4 className="text-[#4F4F4F]">Teachers will appear here after they enroll in your school.  </h4>
    </div>
     </>
    );
  }

  export default NotFound;
  