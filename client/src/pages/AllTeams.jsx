import axios from "axios";
import { useEffect, useState } from "react";
import TeamCard from "../components/TeamCard";

const AllTeams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    axios
      .get(`https://heliverse-mern-task-server.vercel.app/api/teams`)
      .then((resp) => {
        setTeams(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(teams);
  return (
    <div className="p-4 m-4 bg-[#fafaf9]">
      <div className="mb-6 flex justify-center">
        <h3 className="font-semibold text-4xl">T E A M S</h3>
      </div>
      <div className="flex justify-evenly">
        {teams.map((team)=>(<TeamCard data={team}/>))}
      </div>
    </div>
  );
};

export default AllTeams;
