import React, { useState } from 'react';


const ItunesContext = React.createContext([{}, () => {}]);

const ItunesProvider = (props:any) => {
  const [result, setResult] = useState({});
  return (
    <ItunesContext.Provider value={[result, setResult]}>
      {props.children}
    </ItunesContext.Provider>
  );
};

export { ItunesContext, ItunesProvider };