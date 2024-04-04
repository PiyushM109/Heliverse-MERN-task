import { useState } from "react";

const SearchBar = ({newArr, setSearched, fullArr}) => {
    const [query, setQuery] = useState("");
    const [res, setRes] = useState(false);

    const handleSubmit = (event)=>{
        event.preventDefault();
        newArr = fullArr.filter((ele)=>(query.toLowerCase()==ele?.first_name?.toLowerCase() || query.toLowerCase()==ele.last_name?.toLowerCase()));
        if(newArr.lenght==0){
            setRes(true);
        }
        setSearched(newArr);
    }

  return (
    <div>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search by names"
            value={query}
            onChange={(e)=>{setQuery(e.target.value)}}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>
      {res && <p>"No match found"</p>}
    </div>
  );
};

export default SearchBar;
