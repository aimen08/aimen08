import { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { ItunesContext } from "../store/itunesContext";

// interface Result {
//   resultCount: string;
//   results: any[];
// }
export default function SearchResult() {
  let [result, setResult] = useContext(ItunesContext);

  let [pageNumber,setPageNumber] = useState(0); 
 
  let [items,setItems ]= useState([]);
  
  let count = result.resultCount;

  useEffect(()=>{
  setItems(result.results.slice(pageNumber*1,pageNumber+6));
  },[])


  function next(){
    setItems (result.result.slice(pageNumber+6,pageNumber+12))
    setPageNumber(pageNumber+6)
  
  }

  return (
    <div>
      <NavBar />
      {items.map((item) => (
        <ol key={item.trackId}>
          <div class="max-w-xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md ">
            <a href="#" className="my-2">
              <img
                class="rounded-t-lg"
                src={item.artworkUrl100}
                height={200}
                width={200}
                alt=""
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-pink">
                  {item.trackName}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.artistName}
              </p>
              <a
                href="#"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-pink-400 rounded-lg"
              >
                Add to Cart
                <svg
                  class="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </ol>
      ))}



        {/* pagination */}

  <div className="flex flex-col items-center my-11">

  <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-semibold text-gray-900 ">{pageNumber+6}</span> to <span className="font-semibold text-gray-900 ">{count}</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
  </span>
  
  <div className="inline-flex mt-2 xs:mt-0">
      <button className="py-2 px-4 text-sm font-medium text-white bg-pink-400 rounded-l hover:bg-pink-300 " >
          Prev
      </button>
      <button className="py-2 px-4 text-sm font-medium text-white rounded-r border-0 border-l border-gray-700 bg-pink-400" onClick={()=>next()}>
          Next
      </button>
  </div>
</div> 



    </div>
  );
}
