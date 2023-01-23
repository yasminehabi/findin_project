import { useState, useEffect } from "react";
import { useParams,Link, useNavigate,useLocation } from "react-router-dom";
import AddCustomer from "./AddCustomer";
import useFetch from "../hooks/useFetch";

export default function Customers(){
    const [customer, setCustomer] = useState();
    const {id}=useParams();
    const [notfound,setnotfound]=useState();
    
    
    useEffect(() =>{
        const url='http://127.0.0.1:8000/api/customers/'+id;
        console.log('useEffect...');
        fetch(url)
        .then((response) =>{
            if (response.status ===404){
                setnotfound(true);
            }

        return response.json()
        })
        .then((data) =>{
            console.log(data);
            setCustomer([...customer,data.customer]);
        });
    } ,[]);

    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show);
    }

    const location = useLocation();
    const navigate = useNavigate();

    const url ='http://127.0.0.1:8000/api/customers/';
    const {
        request,
        appendData,
        data: { customers } = {},
        errorStatus,
    } = useFetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('access'),
        },
    });

    useEffect(() => {
        request();
    }, []);

    //useEffect(() => {
    //    console.log(request, appendData, customers, errorStatus);
    //});

    function newCustomer(name, industry) {
        appendData({ name: name, industry: industry });

        if (!errorStatus) {
            toggleShow();
        }
    }
   return (
    <>
      {
        customer ?(
            <div>
                <p>{customer.id}</p>
                <p>{customer.name}</p>
                <p>{customer.industry}</p>
                
            </div>
        ) : null
      }


     
      <AddCustomer
                newCustomer={newCustomer}
                show={show}
                toggleShow={toggleShow}
            />
     
    </>
   )
}