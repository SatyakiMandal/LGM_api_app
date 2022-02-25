import React, { useState } from 'react';
import { apifetch } from "./components/config";
import  Navbar  from "./components/navbar";
import  Users  from "./components/users";
import { Loader } from "./components/loader";
import './styles.css';

function App() {
   const [personData,setpersonData] = useState([]);
   const [loading,setLoading] = useState(false);
   const [page,setPage] = useState({minPage:1, maxPage:6});
   const personDataPresent = personData.length !== 0;

   const getpersonData  = async minPage => {
     if( personData.length !==0 && minPage === 1){
       return;
     }
     setLoading(true);
     const users = await apifetch(minPage);
     setPage({ minPage, maxPage: personData.total_pages});

     setLoading(false);
     setpersonData([...personData,...users.data]);
     
   };
  
 

  return(
    <div className="App">
     <Navbar getpersonData={ getpersonData }/>
     { !loading && !personDataPresent && (
       <div className="container">
       <h1 className="text"> DATA OF USER</h1>
       </div>
     )}

      {loading && (
        <Loader/>
      )}

      { !loading && personData && <Users personData={personData}/>}

    </div>
  );
}

export default App;