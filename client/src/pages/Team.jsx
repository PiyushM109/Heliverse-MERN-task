import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/UserCard";
import  axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { clearUser } from "../Utils/teamSlice";

const Team = () => {
  const [name, setName] = useState("");
  const teamMembers = useSelector((store) => store.team.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleBtn = (event)=>{
    event.preventDefault();
    axios.post("http://localhost:3000/api/team",{"name":name,"members":teamMembers}).then((resp)=>{
      if(resp.status===201){
        dispatch(clearUser());
        navigate("/allTeams")
      }
      setName("");
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div className="mx-4 p-4">
      <div className="flex justify-center">
        <h3 className="font-semibold text-4xl">Your Team</h3>
      </div>
      <div className="p-4 flex justify-center font-bold text-xl">
        Confirm your team
      </div>
      <form onSubmit={handleBtn}>
        <div>
      <div className="flex justify-center">
            <input type="text" className="w-[600px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5" placeholder="Enter your team name" onChange={(e)=>{setName(e.target.value)}} value={name} required />
        </div>
      </div>
      <div className="p-4 m-4 flex flex-wrap justify-evenly">
        {teamMembers.map((member) => (
          <UserCard key={member?._id} data={member} inSelection={true} />
        ))}
      </div>
      <div className="mt-4 flex justify-center content-center">
        {teamMembers.length==7 && <button type="Submit" className="inline-flex items-center px-6 py-4 text-md font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300" >
          Create a team
        </button>}
        {teamMembers.length !=7 && <button className="inline-flex items-center px-6 py-4 text-md font-medium text-center text-white bg-gray-700 rounded-lg cursor-not-allowed">
          Create a team
        </button>}
      </div>
      </form>
    </div>
  );
};

export default Team;
