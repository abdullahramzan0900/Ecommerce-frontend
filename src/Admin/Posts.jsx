import { Fragment, useEffect, useState } from "react";
import AddProducts from "./AddProducts";
import EditProduct from "./EditProduct";
import "./Index.css";
import Button from "@mui/material/Button";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import { Badge, Card, Image, Rate, Spin, Typography, Select } from "antd";

const Posts = ({ data, api, setdata }) => {
  const [open, setOpen] = useState(false); // for model
  const [show, setShow] = useState(false); // for edit model
  const [id, setId] = useState("");

  useEffect(() => {
    rerenderProducts();
  }, [open]);

  const rerenderProducts = async () => {
    try {
      const response = await fetch(api, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch product data!");
      }

      const responseData = await response.json();

      console.log("Product data fetched successfully!");
      console.log(responseData, "responseData");

      // Update the data prop with the new data
      setdata(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${api}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the product!");
      }

      console.log("Product deleted successfully!");

      // Update the data prop with the new data
      const updatedData = data.filter((product) => product._id !== id);
      setdata(updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <>
        <div className="add-button">
          <Button className="add-prod-btn" onClick={() => setOpen(!open)}>Add Product</Button>
        </div>
        <div className="main-grid">
          {data?.map((item, index) => {
            return (
              <div id={item._id}>
                <Badge.Ribbon
                  className="itemCardBadge"
                  text={`${
                    item.Price / item.Price + (item.Price * 20) / 100
                  }% Off`}
                  color="pink"
                  id={item._id}
                >
                  <Card
                    className="itemCard"
                    title={item.title}
                    key={index}
                    id={item._id}
                    cover={<Image className="itemCardImage" src={item.Image} />}
                    actions={[<Rate allowHalf disabled value={"4"} />]}
                  >
                    <Card.Meta
                      title={
                        <Typography.Paragraph>
                          Price: ${item.Price}{" "}
                          <Typography.Text delete type="danger">
                            $
                            {parseFloat(
                              item.Price + (item.Price * 20) / 100
                            ).toFixed(2)}
                          </Typography.Text>
                        </Typography.Paragraph>
                      }
                      description={
                        <Typography.Paragraph
                          style={{
                            paddingBottom: "70px",
                          }}
                          ellipsis={{
                            rows: 2,
                            expandable: true,
                            symbol: "more",
                          }}
                        >
                          {item?.Description}
                        </Typography.Paragraph>
                      }
                    ></Card.Meta>
                    <div className="icon-div" style={{
                   
                    }}>

                    <MdDelete
                      style={{
                        fontSize: "30px",
                        cursor:'pointer'
                      }}
                      onClick={() => deleteProduct(item._id)}
                      />

                    <MdModeEditOutline
                      style={{
                        fontSize: "30px",
                        cursor:'pointer'
                      }}
                      onClick={() => {
                        setId(item._id);
                        setShow(true);
                      }}
                      />
                      </div>
                  </Card>
                </Badge.Ribbon>
              </div>
            );
          })}
        </div>
        {show && (
          <EditProduct show={show} setshow={setShow} api={api} id={id} />
        )}
        <div>
          <AddProducts
            open={open}
            api={api}
            setopen={setOpen}
            data={data}
            setdata={setdata}
          />
        </div>
      </>
    </Fragment>
  );
};

export default Posts;
