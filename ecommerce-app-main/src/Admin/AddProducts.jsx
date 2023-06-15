import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

function AddProducts({ api, open, setopen }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [Date, Setdate] = useState(null);
  const [imageurl, setImageUrl] = useState(null);

  const handleSubmit = async () => {
    // Form data initialization and appending values
    const formData = new FormData();
    formData.append("name", name);
    formData.append("Price", price);
    formData.append("Description", description);
    formData.append("TestImage", image);
    formData.append("Date", Date);


    console.log(formData, "formData =====>");

    try {
      const response = await fetch(api, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload the product information!");
      }

      const data = await response.json();
      setImageUrl(data);

      console.log("Product information uploaded successfully!");
    } catch (error) {
      console.error(error);
    }
    setopen(!open);
  };

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };
  const handleClose = () => {
    setopen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
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
            <br></br>
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <br></br>
          <label>
            Date:
            <label>{Date}</label>
          </label>
          <br />
          <label>
            Image:
            <input type="file" accept="image/*" onChange={handleImage} />
          </label>
        </DialogContent>
        <DialogActions>
          <button onClick={handleSubmit} type="submit">
            Add Product
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddProducts;
