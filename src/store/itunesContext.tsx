import React, { useState } from 'react';


const ItunesContext = React.createContext([{}, () => {}]);

const ItunesProvider = (props:any) => {
  const [result, setResult] = useState({});
  const [searchedText,setSearchedText] = useState("");
  const [cartItems,setCartItems] = useState([])
  return (
    <ItunesContext.Provider value={[result, setResult,searchedText,setSearchedText,cartItems,setCartItems]}>
      {props.children}
    </ItunesContext.Provider>
  );
};

export { ItunesContext, ItunesProvider };