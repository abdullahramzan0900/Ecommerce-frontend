
import React, { useState } from "react";

function AddMenCloths() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageurl,setimageurl]=useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("Price", price);
    formData.append("Description", description);
    formData.append("TestImage", image);

    try {
      const response = await fetch("http://localhost:5000/ProductDetail", {
        method: "POST",
        // mode: "no-cors",
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
    <form onSubmit={handleSubmit}>
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
      <br />
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImage} />
      </label>
      <br />
      <button type="submit">Add Product</button>
      <img src={imageurl?.Image} alt="" />
    </form>
  );
}

export default AddMenCloths;
