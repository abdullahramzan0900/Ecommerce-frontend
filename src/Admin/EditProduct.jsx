import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

function EditProduct({ api, show, setshow, Id,renderfunc }) {

  console.log(Id);
  const [name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Description, setDescription] = useState("");
  const [Image, setImage] = useState(null);
  const [Date, Setdate] = useState(null);
  const [AllProducts, SetAllProducts] = useState();
  const [imageurl, setImageUrl] = useState(null);
  


  const EditProducts = async (Id) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("Price", Price);
    formData.append("Description", Description);
    formData.append("TestImage", Image);
    formData.append("Date", Date);
    try {
      const response = await fetch(`${api}/${Id}/update`, {
        method: "Put",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to update  the product information!");
      }

      const data = await response.json();
      SetAllProducts(data);
      console.log("Product information update successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleImage = (event) => {
    setImage(event.target.files[0]);
  };
  const handleClose = () => {
    setshow(false);
  };

  return (
    <>
      <Dialog open={show} onClose={handleClose}>
        <DialogContent>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                console.log(name, "namee");
              }}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              value={Price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <br></br>
            <textarea
              value={Description}
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
          <button
            onClick={() => {
              EditProducts(Id);
              setshow(false);
            }}
            type="submit"
          >
            Edit
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditProduct;
