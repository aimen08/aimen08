import { useContext, useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { ItunesContext } from "../store/itunesContext";
import exchange from "../utils/currencyConvert";

// interface Result {
//   resultCount: string;
//   results: any[];
// }
export default function SearchResult() {
  let [result, setResult,searchedText,setSearchtext,cartItems,setCartItemes] = useContext(ItunesContext);

  let [pageNumber,setPageNumber] = useState(0); 
  
  let [isModalToggeld,setisModalToggeld] = useState(false);
 
  let [items,setItems ]= useState([]);
  
  let count = result.resultCount;

 useEffect(()=>{},[cartItems])

  useEffect(()=>{
  setItems(result.results.slice(pageNumber*1,pageNumber+6));
  },[])


  function toggle(){
    setisModalToggeld(!isModalToggeld)
  }


  function addItemTocart(item){
   
    setCartItemes(cartItems.push(item))
  }

  function next(){
    setItems (result.result.slice(pageNumber+6,pageNumber+12))
    setPageNumber(pageNumber+6)
  
  }

  return (
    <div>
      <NavBar toggle={toggle} searchedText={searchedText} />
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
               <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {exchange(item.trackPrice)+"DZD"}
              </p>
              <a
                href="#"
                onClick={()=>addItemTocart(item)}
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



        {isModalToggeld ?
        <div id="defaultModal" tabindex="-1" aria-hidden="true" className="overflow-y-auto overflow-x-hidden  fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto  mt-24">
        <div className="relative bg-gray-400 rounded-lg shadow ">
            <div className="flex justify-between items-start p-5 rounded-t border-b ">
                <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                    Cart items
                </h3>
                <button type="button" className="text-pink-600 bg-transparent hover:bg-gray-200  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  hover:text-white" onClick={()=>setisModalToggeld(false)}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <div className="p-1 space-y-6">
                {items.map((item) => (
        <ol key={item.trackId}>
          <div class="max-w-xl flex-row flex mx-auto rounded-lg border border-gray-200 shadow-md ">
            <a href="#" className="my-2">
              <img
                class="rounded-t-lg"
                src={item.artworkUrl100}
                height={60}
                width={60}
                alt=""
              />
            </a>
            <div class="p-2">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-pink">
                  {item.trackName}
                </h5>
              </a>
              <p class="mb-3 font-normal text-white">
                {item.artistName}
              </p>
              
            </div>
          </div>
        </ol>
      ))}
            </div>
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Checkout</button>
                
            </div>
        </div>
    </div>
</div>:
      null
}



    </div>
  );
}
