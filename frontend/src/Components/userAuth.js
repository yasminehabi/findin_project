
import {useState, useEffect} from 'react';
import useFetch from '../hooks/useFetch';
import jwt_decode from  "jwt-decode";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function UserAuth() {
  const [user,setUser]=useState({});
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate('/adduser');
  };
 

  function handlCallbackResponse(response){
    console.log("Encoded JWT ID token " +response.credential);
    var userObject =jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden=true;

  }

  function handleSignOut(event){

    setUser({});
    document.getElementById("signInDiv").hidden=false;
  }

  useEffect(() =>{
    /*global google*/
    google.accounts.id.initialize({
      client_id: "179628756605-q2o9k87ku01o303q6jbchm7atcd1fjaa.apps.googleusercontent.com",
      callback: handlCallbackResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme:"outline",size:"large"}
    );
    google.accounts.id.prompt();
  
  },[]);


 return (
    <div className="App">
      
      <div id="signInDiv"></div>{
        Object.keys(user).length !=0 &&
        <button onClick={(e) => handleSignOut(e)}>SignOut</button>

      }
      

      {user && 
      <div>
        <img src={user.picture}></img>
        <h3> {user.name}</h3>
        <button onClick={navigateToContacts}>Contacts</button>

                   
      </div>

      
      }

    </div>
  );
}


