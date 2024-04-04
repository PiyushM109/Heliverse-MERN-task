import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";
const Team = () => {
  const teamMembers = useSelector((store) => store.team.users);
  return (
    <div className="mx-4 p-4">
      <div className="flex justify-center">
        <h3 className="font-semibold text-4xl">Your Team</h3>
      </div>
      <div className="p-4 flex justify-center font-bold text-xl">
        Confirm your team
      </div>
      <div className="p-4 m-4 flex flex-wrap justify-evenly">
        {teamMembers.map((member) => (
          <UserCard data={member} />
        ))}
      </div>
      <div className="mt-4 flex justify-center content-center">
          <button
            className="inline-flex items-center px-6 py-4 text-md font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 "
            
          >
            Create a team
          </button>
        </div>
    </div>
  );
};

export default Team;
