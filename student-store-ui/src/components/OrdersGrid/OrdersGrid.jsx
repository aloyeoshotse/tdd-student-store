import * as React from "react"
import OrdersCard from "../OrdersCard/OrdersCard"
import "./OrdersGrid.css"

export function OrdersGrid({orders, setOrders, products}) {
    return(
        <div className="order-grid">
            <h2 className="order-grid-title">Past Orders</h2>
            {orders.length == 0 ? 
            <div>No orders available</div> :
            orders.map((item,idx) => {
                return(
                    <OrdersCard key={idx} products={products} order={item} />
                )
            })}
        </div>
    )
}

export default OrdersGrid