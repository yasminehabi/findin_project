import { useState, useEffect } from "react";
import { useParams,Link, useNavigate,useLocation  } from "react-router-dom";



export default function EditCustomer(){
    const [customer, setCustomer] = useState();
    const [tempCustomer, setTempCustomer] = useState();
    const navigate = useNavigate();
    const { id } = useParams();
    const [changed, setChanged] = useState(false);
    
    const [error, setError] = useState();
   
    useEffect(() =>{
        console.log('customer',customer)
        console.log('tempcustomer',tempCustomer)
    })
    
    useEffect(() =>{
        console.log('Fetching...');
        fetch('http://127.0.0.1:8000/api/customers/'+id)
        .then((response) =>response.json())
        .then((data) =>{
            console.log(data);
            setCustomer(data.customer);
            setTempCustomer(data.customer);
        });
    } ,[]);
   
    function updateCustomer(e) {
        e.preventDefault();
        const url = 'http://127.0.0.1:8000/api/customers/' + id;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('access'),
            },
            body: JSON.stringify(tempCustomer),
        })
            .then((response) => {
     
                if (!response.ok) throw new Error('something went wrong');
                return response.json();
            })
            .then((data) => {
                setCustomer(data.customer);
                setChanged(false);
                setError(undefined);
            })
            .catch((e) => {
                setError(e.message);
            });
    }




   return (
    <>
      <h1>Here are our customers</h1>
     {customer
      ? (<div>
        <p>{customer.name}</p>
      
        <form
                        className="w-full max-w-sm"
                        id="customer"
                        onSubmit={updateCustomer}
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/4">
                                <label for="name">Name</label>
                            </div>

                            <div className="md:w-3/4">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    type="text"
                                    value={tempCustomer.name}
                                    onChange={(e) => {
                                        setChanged(true);
                                        setTempCustomer({
                                            ...tempCustomer,
                                            name: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                        </div>

                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/4">
                                <label for="industry">Industry</label>
                            </div>

                            <div className="md:w-3/4">
                                <input
                                    id="industry"
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    type="text"
                                    value={tempCustomer.industry}
                                    onChange={(e) => {
                                        setChanged(true);
                                        setTempCustomer({
                                            ...tempCustomer,
                                            industry: e.target.value,
                                        });
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                    {changed ? (
                        <div className="mb-2">
                            <button
                                className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 mr-2 rounded"
                                onClick={(e) => {
                                    setTempCustomer({ ...customer });
                                    setChanged(false);
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                form="customer"
                                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Save
                            </button>
                        </div>
                    ) : null}
                   

      
            
      </div>):null}
      <button 
        onClick={(e) => {
            const url='http://127.0.0.1:8000/api/customers/'+customer.id;
            fetch(url,{method: 'DELETE'})
              .then((response) =>{
                if(!response.ok){
                    throw new Error ('Something went wrong');
                }
               
                //assume things went well
              })
              .then((data) =>{
                console.log(data);
         
            })
                .catch((e) =>{
                    console.log(e)

                });     


      }}>
        DELETE
      </button>
</>
   );
    
}