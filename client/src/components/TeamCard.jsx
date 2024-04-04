const TeamCard = ({ data }) => {
  return (
    <dev>
      <div className="w-[500px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex items-center justify-center mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900">
            {data?.name}
          </h5>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
           { data?.members.map((member)=>(
            <li className="py-3 sm:py-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="w-8 h-8 rounded-full" src={member?.avatar} alt="Neil image" />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900">
                    {member?.first_name} {member?.last_name}
                  </p>
                  <p className="text-sm text-gray-500 ">
                    {member?.email}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  {member?.domain}
                </div>
              </div>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </dev>
  );
};

export default TeamCard;
