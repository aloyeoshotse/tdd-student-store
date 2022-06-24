import * as React from "react"
import "./Sidebar.css"

//sidebar link: https://codepen.io/vyvm/pen/abqgdgK

export function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle}) {
  console.log(isOpen)
  return ( 
    isOpen ?  <section className="sidebar">
                  <div className="open-sidebar">
                    <button id="toggle-button" onClick={() => {handleOnToggle(isOpen)}}>close</button>
                  </div>
                </section> : 
                
                <section className="sidebar">
                  <div className="close-sidebar">
                    <button id="toggle-button" onClick={() => {handleOnToggle(isOpen)}}>open</button>
                  </div>
                </section>
    )
      {/* <div className="open-sidebar">
        <button id="toggle-button">close</button>
      </div>

      <div className="close-sidebar">
        <button id="toggle-button">open</button>
      </div> */}
     

  
  // isOpen === false ? <section className="sidebar" style={{width: "100px"}}>
  //                        <button id="toggle-button" onClick={() => handleOnToggle(isOpen)}>open arrow</button>
  //                         </section>       :
  //                             <section className="sidebar" style={{width: "50px"}}>
  //                               <button id="toggle-button" onClick={() => handleOnToggle(isOpen)}>open arrow</button>
  //                               {/* <ShoppingCart />
  //                               <checkoutForm /> */}
  //                             </section>
  }

   //use tenarary operator with isOpen to toggle sidebar
  // return (
         
    //isOpen === false ? <section className="sidebar" style={{width: "100px"}}>
  //                               <button id="toggle-button" onClick={() => handleOnToggle(isOpen)}>open arrow</button>
  //                             </section> 
  //                             :
  //                             <section className="sidebar" style={{width: "50px"}}>
  //                               <button id="toggle-button" onClick={() => handleOnToggle(isOpen)}>open arrow</button>
  //                               {/* <ShoppingCart />
  //                               <checkoutForm /> */}
  //                             </section>
export default Sidebar