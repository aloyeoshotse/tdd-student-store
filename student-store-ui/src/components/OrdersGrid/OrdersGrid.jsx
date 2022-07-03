import * as React from "react"
import "./OrdersGrid.css"

export function OrdersGrid({orders, setOrders}) {
    return(
        <div className="orders-grid">
            <OrdersCard orders={orders} setOrders={setOrders}/>
        </div>
    )
}

export default OrdersGrid