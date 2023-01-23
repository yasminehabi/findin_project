import React, { useState } from 'react';
import { useParams,Link, useNavigate } from "react-router-dom";
import {useEffect } from "react";
import useFetch from '../hooks/useFetch';
import User from './User';


export default function AddUser() {
    const [name, setName] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [phonenumber, setphone] = useState('');
    const [BD, setBD] = useState('');
    const [address, setadd] = useState('');


    const [show, setShow] = useState(false);

    useEffect(() => {
        request();
    }, []);

    function toggleShow() {
        setShow(!show);
    }
    
    
    const url ='http://127.0.0.1:8000/api/users/';
    const {
        request,
        appendData,
        data: { users } = {},
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
    //    console.log(request, appendData, users, errorStatus);
    //});
  
    function newCustomer(name, lastname,email,BD,address,phone) {
        appendData({ name: name, lastname:lastname,email:email,birthday:BD,useraddress:address,phonenumber:phone });
  
        if (!errorStatus) {
            toggleShow();
        }}


    return (
        <>
     


     <User
                newCustomer={newCustomer}
                show={show}
                toggleShow={toggleShow}
            />





        </>
    );
}