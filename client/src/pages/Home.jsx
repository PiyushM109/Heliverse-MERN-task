import { useNavigate } from "react-router";


const Home = () => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/users");
    }
  return (
    <div className="w-screen h-[90%] content-center justify-center">
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2" onClick={handleClick}
        >
          Create a Team
        </button>
      </div>
    </div>
  );
};

export default Home;
