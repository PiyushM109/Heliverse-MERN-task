import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import axios from "axios";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(50);
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
  }, [currentPage]);
  const handleNext = (curr)=>{
    if(curr!= totalPages){
        setCurrentPage(curr+1);
    }
  }
  const handlePrev = (curr)=>{
    if(curr!=1){
        setCurrentPage(curr-1);
    }
  }
  console.log(currentPage);
  return (
    <div className="p-4 m-4 bg-[#fafaf9] ">
      <div className="flex justify-center">
        <h3 className="font-semibold text-4xl">U S E R S</h3>
      </div>
      <div className="p-4 flex justify-center font-bold text-xl">
        Select users to create the Team
      </div>
      <div className="p-4 m-4 flex justify-between">
        <div>Search Bar</div>
        <div>filters</div>
      </div>
      <div className="mx-4 p-4 flex flex-wrap justify-evenly">
        {users.map((user) => (
          <UserCard key={user.id} data={user} />
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
            <button className= "flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900" onClick={()=>{
                handlePrev(currentPage);
            }}>
              Prev
            </button>
            <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900" onClick={()=>{handleNext(currentPage)}}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;