import React, { useState } from 'react';
import { useParams,Link, useNavigate } from "react-router-dom";
import {useEffect } from "react";
import useFetch from '../hooks/useFetch';




export default function User(props) {
    const [name, setName] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphone] = useState('');
    const [BD, setBD] = useState('');
    const [address, setadd] = useState('');
    function newCustomer(name,lastname,email,BD,address,phone){
        const data={name: name, lastname:lastname,email:email,birthday:BD,useraddress:address,phonenumber:phone};
        const url='http://127.0.0.1:8000/api/users/';
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
                            setlastname('');
                            setemail('');
                            props.newCustomer(name, lastname,email,BD,address,phonenumber);
                        }}
                        id="editmodal"
                       
                    >
                        <div >

                            <div className="md:w-2/3">
                                <input
                                    
                                    placeholder="name"
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
                        
                                    id="lastname"
                                    placeholder="lastname"
                                    type="text"
                                    value={lastname}
                                    onChange={(e) => {
                                        setlastname(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                        <div className="md:w-2/3">
                                 <input

                                     id="BDT"
                                         placeholder="BDT"
                                         type="text"
                                         value={BD}
                                         onChange={(e) => {
                                        setBD(e.target.value);
                                        }}
                                />
                        </div>
                        </div>
                        <div>
                        <div className="md:w-2/3">
                                 <input

                                     id="address"
                                         placeholder="address"
                                         type="text"
                                         value={address}
                                         onChange={(e) => {
                                        setadd(e.target.value);
                                        }}
                                />
                        </div>
                        </div>
                        <div>
                        <div className="md:w-2/3">
                                 <input

                                     id="phone"
                                         placeholder="phone"
                                         type="text"
                                         value={phonenumber}
                                         onChange={(e) => {
                                        setphone(e.target.value);
                                        }}
                                />
                        </div>
                        </div>

                        <div >

                        <div className="md:w-2/3">
                                 <input

                                     id="email"
                                         placeholder="email"
                                         type="text"
                                         value={email}
                                         onChange={(e) => {
                                        setemail(e.target.value);
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