import * as React from "react"
import "./Subnav.css"
import { useState } from "react"
import {ProductGrid} from "../ProductGrid/ProductGrid";
import {ProductCard} from "../ProductCard/ProductCard"
import {ProductDetail} from "../ProductDetail/ProductDetail"


// function getFormElemValue(formElem) {
//     return [...new FormData(formElem).entries()].reduce((obj, [k, v]) => {
//       obj[k] = v;
//       return obj;
//     }, {});
//   }

export function Subnav({products}) {
    // const handleFormSubmit = (event) => {
    //     event.preventDefault();
    //     var submit = getFormElemValue(event.target);
    //     // the following line stringifies the data object and replaces the contents of the jumbotron
    //     document.getElementById('jumbotron').innerHTML = JSON.stringify(submit);
    //   };
    const [formInput, setFormInput] = useState("");
    const [newProducts, setNewProducts] = useState([])

    function handleSearchInput (event, products) {
       // event.preventDefault();
        var userInput = event.target.value.toLowerCase();
        products.forEach(items => {
            //console.log("bool=",items.name.toLowerCase().startsWith(userInput.toLowerCase()))
           // console.log("item=",items.name.toLowerCase())
            if (items.name.toLowerCase().startsWith(userInput)) {
                setNewProducts([items])
            }
        })
        console.log("input=",userInput)
        console.log("prod=",newProducts)
        return (              
            <ProductGrid products={newProducts}/>
        )
    }

    return (
        <div className="sub-nav">
            <form id="form">
                <input className="search-bar" type="text" placeholder="Search" onChange={(event) => handleSearchInput(event,products)}/>
                <button className="search-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path></svg>
                </button>
            </form>
        </div>
    )
    }

export default Subnav