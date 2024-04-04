import { addUser } from "../Utils/teamSlice";
import UserStatus from "./UserStatus";
import { useDispatch } from "react-redux";

const UserCard = ({ data }) => {
    const dispatch = useDispatch();

    const handleAddBtn = (data)=>{
        if(data.available){
            dispatch(addUser(data));
        }else{
            alert(`${data.first_name} is unavailable`)
        }
        
    }

  return (
    <div>
      <div className="w-[300px] bg-white border border-gray-200 rounded-lg shadow my-4 mx-2">
        <div className="flex justify-between px-4 pt-4">
          <div>
            <span className="font-bold">{data?.id}</span>
          </div>
          <div>
            <UserStatus Availability={data?.available} />
          </div>
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={data?.avatar}
            alt="User Avatar"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            {data?.first_name + " " + data?.last_name}
          </h5>
          <p className="mb-1 text-md font-serif text-gray-600">{data?.email}</p>
          <span className="text-md text-gray-500 font-semibold ">
            {data?.domain}
          </span>
          <span className="text-xs text-gray-500 font-semibold ">
            {data?.gender}
          </span>
          <div className="flex mt-4 md:mt-6">
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              onClick={()=>{handleAddBtn(data)}}
            >
              Add to Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
