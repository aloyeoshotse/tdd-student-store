import * as React from "react";
import "./Orders.css"
import { Link } from "react-router-dom";

export function Orders({orders, setOrders}) {
    return(
        <div className="orders">
            <Link to={'/orders'}></Link>
            <OrdersGrid orders={orders} setOrders={setOrders}/>
        </div>
    )
}

export default Orders