import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AddressService from "../service/AddressService";
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import { Card } from '@mui/material';
import CardContent from '@mui/material';
import {  useNavigate,NavLink } from 'react-router-dom';
import Header from "../header/Header"




const Address = (props) => {
    let initialValue = {
        name: '',
        pincode: '',
        address: '',
        city: '',
        locality: '',
        landmark: '',
        id: '',
        isUpdate: false,
        error: {
            name: '',
            pincode: '',
            address: '',
            locality: '',
            city: '',
            landmark: '',
        }
    }
    
    const [formValue, setForm] = useState(initialValue);
const params = useParams();

//    useEffect(() => {
//     console.log(params.id);
//     if (params.id) {
//         getAddressBookById(params.id);
//     }
//   }, [params.id]);

  // const getAddressBookById = (id) => {
  //   AddressBookService
  //     .getAddressBookById(id)
  //     .then((data) => {
  //       let obj = data.data.data;
  //       setData(obj);
  //     })
  //     .catch((err) => {
  //       alert("error is ", err);
  //     });
  // };

  const setData = (obj) => {
     setForm({
       ...formValue,
       ...obj,
       id: obj.personId,
       name: obj.name,
       pincode: obj.pincode,
       address: obj.address,
       locality: obj.locality,
       city: obj.city,
       landmark: obj.landmark,
     });
   };
   
 const changeValue = (event) => {
     setForm({ ...formValue, [event.target.name]: event.target.value })

 }
let navigate = useNavigate();
const save = async (event) => {
    event.preventDefault();
    
    let object = {

        name: formValue.name,
        pincode: formValue.pincode,
        address: formValue.address,
        city: formValue.city,
        locality: formValue.locality,
        landmark: formValue.landmark,
        userId:1,
      };
      // if (formValue.isUpdate) {
      //   AddressBookService
      //     .editAddressBookData(params.id,object)
      //     .then((data) => {
      //         var answer =  window.confirm("Data once modified cannot be restored!! Do you wish to continue?",data);
      //         if(answer === true){
      //           alert("Data updated successfully!");
      //           //props.history.push("");
      //         }else{
      //             window.location.reload();
      //         }
      //     })
      //   //   .catch((error) => {
        //     alert.error("WARNING!! Error updating the data!",error);
        //   });
       
        AddressService
          .addAddress(object)
          .then((response) => {
            console.log(response);
            alert("Data Added successfully!!",response)
            navigate('/order');
            // props.history.push("");
          })
          .catch(error => {
            console.log(error);
              alert.error("WARNING!! Error while adding the data!");
          })
        
}


const reset = () => {
    setForm({ ...initialValue, id: formValue.id, isUpdate: formValue.isUpdate });
}
  return (
    <div>
            
    <Header />

   <div align="center">
     <Card sx={{ minWidth: 600}}>
       <form action="#" className="form" onSubmit={save} onReset={reset}>
        <div className="wrapper"><h2>AddressForm</h2></div>
        <div className='content'>
     <div className='content-box'>
      </div>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="Name" variant="filled" onChange={changeValue} value={formValue.name} name="name"/>
      </div>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="Landmarl" variant="filled" value={formValue.landmark} onChange={changeValue}  name="landmark"/>
      </div>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="Address" variant="filled" onChange={changeValue} value={formValue.address} name="address"/>
      </div>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="City" variant="filled" onChange={changeValue} value={formValue.city} name="city"/>
      </div>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="Locality" variant="filled" onChange={changeValue} value={formValue.locality} name="locality"/>
      </div>
      
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="Pincode" variant="filled" onChange={changeValue} value={formValue.pincode} name="pincode"/>
      </div>
      <div className="add-reset">
                  
                        <NavLink to = '/cart' ><button type="reset"  className="resetButton button">Back </button> </NavLink>
                        <button  type="submit" className="button addButton" id="submitButton">Submit   </button> 
                      
            </div>
     </div>
   </form>
   </Card>
    </div>  
    </div>  
    
  )
}
export default Address;
