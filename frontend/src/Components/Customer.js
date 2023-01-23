import { useState, useEffect } from "react";
import { useParams,Link, useNavigate } from "react-router-dom";
import AddCustomer from "./AddCustomer";

export default function Customer(){
    const [customers, setCustomers] = useState();
    const navigate = useNavigate();
    
    
    const navigateToContacts = () => {
        // 👇️ navigate to /contacts
        navigate('/EditUser');
      };
    useEffect(() =>{
        console.log('Fetching...');
        fetch('http://127.0.0.1:8000/api/customers/')
        .then((response) =>response.json())
        .then((data) =>{
            console.log(data);
            setCustomers(data.customers);
        });
    } ,[]);
   return (
    <>
    <h1>Here are our customers:</h1>
    {customers
        ? customers.map((customer) => {
              return (
                  <div className="m-2" key={customer.id}>
                      <Link to={'/EditCustomer/' + customer.id}>
                          <button className="no-underline bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                              {customer.name}
                          </button>
                      </Link>
                  </div>
              );
          })
        : null}


</>
   );
    
}

