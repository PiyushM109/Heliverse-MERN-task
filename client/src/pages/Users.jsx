import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";
import { useSelector } from "react-redux";
import TeamList from "../components/TeamList";
import { useNavigate } from "react-router";
import SearchBar from "../components/SearchBar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searched, setSearched] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(50);
  const teamMembers = useSelector((store) => store.team.users);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users?page=${currentPage}`)
      .then((resp) => {
        // console.log(resp.data);
        setCurrentPage(resp?.data?.currentPage);
        setTotalPages(resp?.data?.totalPages);
        setUsers(resp.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, teamMembers]);
  const handleNext = (curr) => {
    if (curr != totalPages) {
      setCurrentPage(curr + 1);
    }
  };
  const handlePrev = (curr) => {
    if (curr != 1) {
      setCurrentPage(curr - 1);
    }
  };
  console.log(searched);
  console.log(users);

  return (
    <div className="p-4 m-4 bg-[#fafaf9] ">
      <div className="flex justify-center">
        <h3 className="font-semibold text-4xl">U S E R S</h3>
      </div>
      <div className="p-4 flex justify-center font-bold text-xl">
        Select users to create the Team
      </div>
      <div className="m-4">
        <div className="mx-8 bg-white p-4 rounded-xl border-slate-300 shadow-lg">
          <TeamList />
        </div>
        <div className="mt-4 flex justify-center content-center">
          <button
            className="inline-flex items-center px-6 py-4 text-md font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 "
            onClick={() => {
              navigate("/createTeam");
            }}
          >
            Create a team
          </button>
        </div>
      </div>
      <div className="p-4 m-4 flex flex-wrap justify-between">
        <div className="ml-8 w-[400px]">
          <SearchBar
            newArr={searched}
            setSearched={setSearched}
            fullArr={users}
          />
        </div>
        <div></div>
      </div>
      <div className="mx-4 p-4 flex flex-wrap justify-evenly">
      {searched.length != 0 &&
        searched.map((user) => (
          <UserCard key={user.id} data={user} inSelection={false} />
        ))}</div>
      <div className="mx-4 p-4 flex flex-wrap justify-evenly">
        {users.map((user) => (
          <UserCard key={user.id} data={user} inSelection={false} />
        ))}
      </div>
      <div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700 ">
            Showing{" "}
            <span className="font-semibold text-gray-900 ">
              {(currentPage - 1) * 20 + 1}
            </span>{" "}
            to{" "}
            <span className="font-semibold text-gray-900 ">
              {currentPage * 20}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 ">
              {totalPages * 20}
            </span>{" "}
            Entries
          </span>
          {/* <!-- Buttons --> */}
          <div className="inline-flex mt-2 xs:mt-0">
            <button
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900"
              onClick={() => {
                handlePrev(currentPage);
              }}
            >
              Prev
            </button>
            <button
              className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900"
              onClick={() => {
                handleNext(currentPage);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
