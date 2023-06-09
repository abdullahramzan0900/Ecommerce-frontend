import React, { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

function AddProducts({api} ) {
    console.log(api,"url")
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [Date,Setdate]=useState();
  
  const [imageurl,setimageurl]=useState();


  const handleSubmit = async (api) => {
    const formData = new FormData();
    formData.append("name",name);
    formData.append("Price",price);
    formData.append("Description",description);
    formData.append("TestImage",image);
    formData.append("Date",Date);
    var d = new window.Date();
    console.log( d,"a")
  
   d= JSON.stringify(d);
   d.slice(0,8);
    Setdate(d);

    try {
      const response = await fetch(api,{
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
            setimageurl(data);
        })

      if (!response.ok) {
        throw new Error("Failed to upload the product information!");
      }

      console.log("Product information uploaded successfully!");
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };


  return (

      <>


      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
      </label>
      <br />
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Date:
<label>{Date}</label>
      </label>
      <br />
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImage} />
      </label>
      <br />
      <button onClick={()=>{
        handleSubmit(api)
      }} type="submit">Add Product</button>
      {/* <img src={imageurl?.Image} alt="" /> */}
       
      </>
  );
  }


export default AddProducts;
