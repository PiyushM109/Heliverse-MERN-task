import { useSelector } from "react-redux";

const TeamList = () => {
  const teamMembers = useSelector((store) => store.team.users);
  console.log(teamMembers);
  return (
    <div>
        <span

            className="m-2 p-2 inline-flex items-center bg-blue-100 text-blue-900 text-sm font-medium px-2.5 py-0.5 rounded-full shadow-sm"
          >
            Team Members : 
          </span>
      {teamMembers.map((member) => {
        return (
          <span
            key={member?._id} // Adding a unique key prop for each mapped element
            className="m-2 p-2 inline-flex items-center bg-green-100 text-green-900 text-sm font-medium px-2.5 py-0.5 rounded-full shadow-sm"
          >
            {member?.id} {member?.first_name} {member?.last_name} 
          </span>
        );
      })}
    </div>
  );
};

export default TeamList;
