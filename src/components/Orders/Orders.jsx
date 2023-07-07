import { useEffect, useState } from "react";
import "./Order.css";
import ResponsiveAppBar from "../navbar/navbar";


const Order = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await fetch("http://localhost:5000/orders");
                if (!response.ok) {
                    throw new Error("Failed to fetch orders");
                }
                const data = await response.json();
                setOrders(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, []);



    useEffect(() => {
        if (filter === "All") {
            setFilteredOrders(orders);
        } else {
            setFilteredOrders(
                orders.filter(
                    (order) => order.status === filter
                )
            );
        }
    }, [orders, filter]);

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            const response = await fetch(`http://localhost:5000/orders/${orderId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: newStatus }),
            });
            if (!response.ok) {
                throw new Error("Failed to update order status");
            }
            const updatedOrder = await response.json();
            setOrders((prevOrders) =>
                prevOrders.map((order) =>
                    order._id === updatedOrder._id ? updatedOrder : order
                )
            );
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
{/* <ResponsiveAppBar/> */}
        <div className="order-container">
            <h1 style={{
                textAlign:"center"
            }}>Orders</h1>
            <div className="filter-buttons">
                <button onClick={() => setFilter("All")}>All</button>
                <button onClick={() => setFilter("pending")}>Pending</button>
                <button onClick={() => setFilter("Delivered")}>Delivered</button>
                <button onClick={() => setFilter("Cancelled")}>Cancelled</button>
            </div>
            {loading ? (
                <p>Loading...</p>
                ) : (
                    filteredOrders.length === 0 ? (
                    <p>No orders found for this status.</p>
                    ) : (
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map((order) => (
                                <tr key={order._id}>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    <td>{order.date}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        {order.status !== "Delivered" && (
                                            <button
                                            className="cancel-btn"
                                                onClick={() => handleStatusChange(order._id, "Cancelled")}
                                                >
                                                Cancel
                                            </button>
                                        )}
                                        {order.status !== "Cancelled" && (
                                            <button
                                            className="deliver-btn"
                                            onClick={() => handleStatusChange(order._id, "Delivered")}
                                            >
                                                Mark Delivered
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            )}
        </div>
                            </>
    );
};

export default Order;
