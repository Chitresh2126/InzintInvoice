import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../axios';

export default function ClientDetail() {
    const navigate = useNavigate();

    const [clientRegister,setClientRegister] = useState({
        companyname: "",
        Country: "",
        fname: "",
        lname: "",
        email: "",
        Phone: "",
        Address1: "",
        Address2: "",
        Postalcode: "",
        City: "",
        website: "",
        InvoiceCurrency: "",
        information: ""

    });

    const [records,setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name; 
        const value = e.target.value;
        console.log(name , value);

        setClientRegister({...clientRegister, [name]:value})
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.post('/dev/addclientdata',clientRegister).then(res => console.log(res.data));

        const newRecord = {...clientRegister, id: new Date().getTime().toString()}
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setClientRegister({companyname: "",Country: "", fname: "",lname: "",email: "",Phone: "",Address1: "",Address2: "",Postalcode: "",City: "",website: "",InvoiceCurrency: "",information: ""})
        alert("Client added successfully");
        navigate("/login/home")
    }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
    <div id="form" className="block bg-slate-50 p-6 rounded-xl shodow-md shadow-slate-300 w-4/5">
        <form action="" onSubmit={handleSubmit}>
            <h2 className="text-blue-700 text-3xl font-semibold my-4">Client detail....</h2>
            {/* block first */}
            <div id="companyName" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="companyName" className="w-1/2 mr-2">
                        <label htmlFor="cname" className="text-sm">Company name*</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.companyname} onChange={handleInput} name="companyname" id="cname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm require" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="cNumber" className="w-1/2 ml-2 ">
                        <label  className="text-sm ">Country</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.Country} onChange={handleInput} name="Country" id="cNumber"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>
            
                {/* block second */}
              <div id="fullName" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="firstName" className="w-1/2 mr-2">
                        <label htmlFor="fname" className="text-sm">First Name</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.fname} onChange={handleInput} name="fname" id="fname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="lastName" className="w-1/2 ml-2 ">
                        <label htmlFor="lname" className="text-sm">Last Name</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.lname} onChange={handleInput} name="lname" id="lname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>
              {/* block five */}
              <div id="detail" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="place" className="w-1/2 mr-2">
                        <label htmlFor="Country" className="text-sm">Email address*</label><br />
                        <input type="email" autoComplete='off' value={clientRegister.email} onChange={handleInput} name="email" id="Country"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="numbr" className="w-1/2 ml-2 ">
                        <label htmlFor="Phone" className="text-sm">Phone number</label><br />
                        <input type="number" autoComplete='off' value={clientRegister.Phone} onChange={handleInput} name="Phone" id="Phone"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>

              {/* block third */}
              <div id="address" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="add1" className="w-1/2 mr-2">
                        <label htmlFor="address1" className="text-sm">Address line 1</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.Address1} onChange={handleInput} name="Address1" id="address1"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="add2" className="w-1/2 ml-2 ">
                        <label htmlFor="address2" className="text-sm">Address line 2</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.Address2} onChange={handleInput} name="Address2" id="address2"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>

              {/* block four */}
              <div id="Postalcode" className="flex flex-row ">
                    {/* <!-- first name --> */}
                    <div id="pCode" className="w-1/2 mr-2">
                        <label htmlFor="postal" className="text-sm">Postal Postalcode</label><br />
                        <input type="number" autoComplete='off' value={clientRegister.Postalcode} onChange={handleInput} name="Postalcode" id="postal"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- last name --> */}
                    <div id="City" className="w-1/2 ml-2">
                        <label htmlFor="Cityname" className="text-sm">City</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.City} onChange={handleInput} name="City" id="Cityname"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
              </div>


              {/* block six */}
              <div id="link" className="flex flex-row ">
                    {/* <!-- last name --> */}
                    <div id="site" className="w-1/2 mr-2">
                        <label htmlFor="websitesite" className="text-sm">website</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.website} onChange={handleInput} name="website" id="website"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm" required/>
                    </div>
                    {/* <!-- first name --> */}
                    <div id="mail" className="w-1/2 ml-2">
                        <label htmlFor="mailEmail" className="text-sm">Invoice Currency</label><br />
                        <input type="text" autoComplete='off' value={clientRegister.InvoiceCurrency} onChange={handleInput} name="InvoiceCurrency" id="mailEmail"
                            className="h-8 w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent    
                            outline-blue-600 shadow-sm" required/>
                    </div>
              </div>

              <label htmlFor="name" className="text-sm">Additional info</label><br />
            <input type="text" autoComplete='off' value={clientRegister.information} onChange={handleInput} name="information" id="name"
                className="w-full rounded-md border border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm h-24" />

           
            {/* <!-- Sign up / submit button --> */}
            
            <button type="submit"  id="submit" className="bg-blue-700 w-full h-10 cursor-pointer text-white rounded-md hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-sm mt-5" >Submit</button>
        </form>
        {/* <div>
            {
                records.map((item)=>{
                    const { id,companyname } = item;
                    return(
                        <div key={id}>
                        <p>{companyname}</p>
                        </div>
                    )
                })
            }
        </div> */}
    </div>
</div>
  )
}
