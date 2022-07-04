import * as React from "react";
import "./Orders.css"
import { Link } from "react-router-dom";
import OrdersGrid from "../OrdersGrid/OrdersGrid";

export function Orders({orders, setOrders, products}) {
    return(
        <div className="orders">
            <Link to={'/orders'}></Link>
            <OrdersGrid products={products} orders={orders} setOrders={setOrders}/>
        </div>
    )
}

export default Orders