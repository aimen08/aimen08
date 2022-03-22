import { useContext, useRef, useState } from "react";
import Logo from "../assets/logo.svg";
import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { ItunesContext } from "../store/itunesContext";
import axios from "axios";


const API_URL = "https://itunes.apple.com/search?term="

export default function Landing() {


  // //Axios acting wierd check it later
  // const instance = axios.create();

  // const searchInputRef = useRef("");

  let [result,setResult] = useContext(ItunesContext);
   const [searchTerm, setSearchTerm] = useState(''); 
  let navigate = useNavigate();
  
  const search = async() => {
    
    let fullPath = `${API_URL}${searchTerm}`;
 
   
    let response = await fetch(fullPath).then((res)=>res.json()).then((json)=>{
      setResult(json)
      
      navigate(`/result`);
    }).catch(()=>{

      console.log("error fetching !checkSearch function");
    })

    // axios.get(API_URL).then((response)=>{
    //     console.log(response.data.result);
    // }).catch(()=>{
    //   console.log("error fetching !checkSearch function");
      
    // })
    
  };

  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-5/5">
      <img src={Logo} height={70} width={200} />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input value={searchTerm} onInput={(event ) => setSearchTerm(event.target.value)} type="text"
          className="flex-grow  focus:outline-none"/>
      
        <MicrophoneIcon className="h-5" />
      </div>

      {/* Buttons */}
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <a onClick={()=>search()} className="btn">
          {" "}
          Google Search{" "}
        </a>
        <a onClick={()=> search()} className="btn">
          {" "}
          I'm Feeling Lucky{" "}
        </a>
      </div>
    </form>
  );
}
