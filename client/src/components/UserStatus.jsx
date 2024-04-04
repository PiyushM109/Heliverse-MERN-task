const UserStatus = ({Availability})=>{
    return(
        <div>
            {Availability && <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
                Available
            </span>}
        {!Availability && <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
            <span className="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
            Unavailable
        </span>}
        </div>
    )
};

export default UserStatus;

