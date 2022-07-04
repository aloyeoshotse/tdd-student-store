import * as React from "react"
import "./OrdersCard.css"

export function OrdersCard({order, products}) {
    return(
        <div className="order-card">
            <div className="order-info">
                <div className="order-buyer">{order.name}</div>
                <div className="order-email">{order.email}</div>
                <div className="order-id">{order.id}</div>
                <div className="order-date">{order.createdAt}</div>
                <div className="order-total">{order.total}</div>
                {order.order.map((item) => {
                    return(
                        <div className="order-details">
                            <span className="order-name">{products[item.itemId-1].name} -</span>
                            <span className="order-description"> {products[item.itemId-1].description}</span>
                            <span className="order-quantity">quantity: {item.quantity}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default OrdersCard