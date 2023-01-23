import React, { useState } from 'react';
import { useParams,Link, useNavigate } from "react-router-dom";
import {useEffect } from "react";



export default function AddCustomer(props) {
    const [name, setName] = useState('');
    const [industry, setIndustry] = useState('');
    const [show, setShow] = useState(props.show);
    const [customer, setCustomer] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    function newCustomer(name,industry){
        const data={name:name, industry:industry};
        const url='http://127.0.0.1:8000/api/customers/';
        fetch(url,{
            mathod:'POST',

            body: JSON.stringify(data)
        })
        .then((response) =>{
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            return response.json();
        })
        .then((data) =>{
            console.log(data)
            

        })
        .catch((e) =>{
            console.log(e);

        });
    }


    return (
        <>


<form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setName('');
                            setIndustry('');
                            props.newCustomer(name, industry);
                        }}
                        id="editmodal"
                       
                    >
                        <div >

                            <div className="md:w-2/3">
                                <input
                                    
                                    placeholder="Google"
                                    type="text"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div >

                            <div className="md:w-2/3">
                                <input
                        
                                    id="industry"
                                    placeholder="Computing"
                                    type="text"
                                    value={industry}
                                    onChange={(e) => {
                                        setIndustry(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </form>

                    <button
                        className="bg-slate-400 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded"
                        
                    >
                        Close
                    </button>
                    <button form='editmodal'
                        
                    >
                        Add
                    </button>



        </>
    );
}