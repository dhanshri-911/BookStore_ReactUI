import "../address/AddressForm.css";
import Header from "../header/Header"
import React, { useEffect, uselocality, useState } from 'react';
import { useParams, useNavigate, Link, NavLink } from 'react-router-dom';
import AddressService from "../service/AddressService";



    const AddressForm = (props) => {
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

            <div className="form-content">
                <form className="form"  action="#" onReset={reset} onSubmit={save}>
                    <div className="form-head-content">
                        <div className="form-head">Shopping Cart Address</div>
                        <div className="form-logo-content">
                        </div>
                    </div>
                    <div className="row-content">

                        {/* name */}

                        <label className="label text" htmlFor="name">  Name  </label>
                        <input
                            className="input"
                            type="text"
                            name="name"
                            id="fistName"
                            value={formValue.name} 
                            onChange={changeValue}
                            placeholder="Your name.." 
                            required
                        />
                        <error-output className="name-error" htmlFor="text" />
                    </div>
                    

                   <div className="row-content">
                   {/* Landmark */}

                  <label className="label text" htmlFor="pincode">  Landmark </label>
                   <input
                   className="input"
                   type="text"
                   name="landmark"
                   id="landmark"
                   value={formValue.landmark} 
                   onChange={changeValue}
                   placeholder="Your Landmark" 
                   required
                  />
                 <error-output className="name-error" htmlFor="text" />
                 </div>

                   
                

                    {/* ADDRESS */}

                    <div className="row-content">
                        <label className="label text" htmlFor="address"> Address </label>
                        <textarea
                            className="input"
                            id="address"
                            name="address"
                            value={formValue.address} 
                            onChange={changeValue}
                            style={{ height: "100px" }}
                            />

                    </div>

                    {/* CITY */}

                    <div className="row-content-exp">
                        <div className="oneRow-content">
                            <label className="label text" htmlFor="city"> City  </label>
                            <select
                                className="select-input"
                                id="city"
                                name="city"
                                typeof="text"
                                value={formValue.city}
                                onChange={changeValue}
                                required
                            >
                                <option value selected disabled hidden> Select City </option>
                                <option value="Allahabad">Allahabad</option>
                                <option value="Amritsar">Amritsar</option>
                                <option value="Bhubneswa">Bhubneswar</option>
                                <option value="Cuttack">Cuttack</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Mumbai">Navi Mumbai</option>
                                <option value="Bhopal">Bhopal</option>
                                <option value="Patna">Patna</option>
                                <option value="Ranchi">Ranchi</option>
                                <option value="Kolkata">Kolkata</option>
                                <option value="Vaishali">Vaishali</option>
                                <option value="Ramgarh">Ramgarh</option>
                                <option value="Hajipur">Hajipur</option>
                            </select>
                        </div>

                        {/* locality */}

                        <div className="oneRow-content">
                            <label className="label text" htmlFor="locality"> Locality </label>
                            <select
                                className="select-input"
                                id="locality"
                                name="locality"
                                value={formValue.locality}
                                onChange={changeValue}
                                required
                            >
                                <option value selected disabled hidden> Select locality </option>
                                <option value="Andhra Pradesh">Andhra Pradesh</option>
                                <option value="Andaman and Nicobar Islands"> Andaman and Nicobar Islands </option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option value="Assam">Assam</option>
                                <option value="Bihar">Bihar</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chhattisgarh">Chhattisgarh</option>
                                <option value="Dadar and Nagar Haveli"> Dadar and Nagar Haveli </option>
                                <option value="Daman and Diu">Daman and Diu</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Lakshadweep">Lakshadweep</option>
                                <option value="Puducherry">Puducherry</option>
                                <option value="Goa">Goa</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Haryana">Haryana</option>
                                <option value="Himachal Pradesh">Himachal Pradesh</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Madhya Pradesh">Madhya Pradesh</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Manipur">Manipur</option>
                                <option value="Meghalaya">Meghalaya</option>
                                <option value="Mizoram">Mizoram</option>
                                <option value="Nagaland">Nagaland</option>
                                <option value="Odisha">Odisha</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Sikkim">Sikkim</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Tripura">Tripura</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="West Bengal">West Bengal</option>
                            </select>
                        </div>

                        {/* Pincode*/}

                        <div className="oneRow-content">
                            <label className="label text" htmlFor="landmark"> Pincode </label>
                            <input
                                className="input"
                                type="text"
                                name="pincode"
                                id="pincode"
                                value={formValue.pincode}
                                onChange={changeValue}
                                required
                            />
                        </div>
                    </div>

                    
                    {/* BUTTONS */}

                    <div className="add-reset">
                      
                        <NavLink to = '/cart' ><button type="reset"  className="resetButton button">Back </button> </NavLink>
                        <button  type="submit" className="button addButton" id="submitButton">Submit   </button> 
                  
                    </div>
                    
                </form>
            </div>
        </div>
    );
}
export default AddressForm