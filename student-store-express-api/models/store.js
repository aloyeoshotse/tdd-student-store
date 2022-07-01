const {NotFoundError, BadRequestError} = require('../utils/errors')
const {storage} = require('../data/storage')

class Store {

    static getProducts(){
        //retrieves all products from store api
        return storage.get("products").value();
    }

    static getSelectedProduct(id) {
        //retrieves single product from list of products with id
        let allProducts = this.getProducts();
        let index = parseInt(id);
        const foundProduct = allProducts.find(item => item.id == index)
        if (!foundProduct) {
           return new NotFoundError()
        }
        return foundProduct;
    }


    static containsDuplicates(shoppingCart) {
        //checks if shoppingCart array has duplicate values
        let idArr = [];
        shoppingCart.some((item) => {
            idArr.push(item.itemId)
        })
        let idSet = new Set(idArr);
        return idArr.length != idSet.size;
    }

    static missingField(item) {
        //checks if shoppingCart is missing a field
        let missing = false;
        if (Array.isArray(item)){
            item.some((item) => {
                if (!item.itemId || !item.quantity) {missing = true;}
            })
        }
        else{
            if (!item.name || !item.email) {missing = true;}
        }
        return missing;
    }

    static validShoppingCart(shoppingCart, user) {
        /*
        shoppingCart is an array of objects with itemId and quantity properties
        user is an object with name and email properties --> (should we throw error for empty user field?)
        */
        if (!shoppingCart || !user) {return false} //check for empty params/undefined shoppingCart
        if (shoppingCart.length == 0) {return false} //checks for empty shoppingCart
        if (user.name == "" || user.email == "") {return false}
        if (this.containsDuplicates(shoppingCart)) {return false} //checks for duplicates in shoppingCart
        if (this.missingField(shoppingCart)) {return false} //checks to see if shoppingCart is missing a field
        if (this.missingField(user)) {return false}
        return true;
    }

    static calculateTotal(shoppingCart) {
        //calculate the total price of all of the items in shoppingCart
        let dollarUSFormat = Intl.NumberFormat('en-US',{style: 'currency', currency: 'USD', minimumFractionDigits: 2})
        let total = 0;
        const taxPercentage = 0.0875;
        let idx = 0;
        while (idx < shoppingCart.length) {
            let productQuantity = shoppingCart[idx].quantity;
            let selectedProduct = this.getSelectedProduct(shoppingCart[idx].itemId);
            let productPrice = selectedProduct.price;
            let subtotal = (productPrice * productQuantity);
            total += subtotal
            idx++;
        }
        total = total + (total*taxPercentage)
        return dollarUSFormat.format(total)
    }


    static getCurrentDateAndTime() {
        let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        let today= new Date().toLocaleString('en-US', { timeZone: tz });
        return today;
    }

    static createPurchaseOrder(shoppingCart, user) {
        /*
        1) needs to create an object with 6 fields:
            - purchase id (number of total purchase --> new one should be 1 more than 
                number of current existing purchases)
            - name (of person making order)
            - email (of person making order)
            - order (shoppingCart value sent to POST)
            - total (calculated total cost of order)
            - createdAt (string of date and time of order)
            ** optional: receipt (text describing what might go on receipt)
        2) needs to return a JSON response back to client with format:
                {"purchase": purchase} w/ 201 status code
        */

        let validShoppingCart = this.validShoppingCart(shoppingCart, user)
        if (!validShoppingCart) {return false;}
    
        let getId = (storage.get("purchases").value().length) + 1; //make function to get total number of purchases
        let getName = user.name;
        let getEmail = user.email;
        let getOrder = shoppingCart;
        let getTotal = this.calculateTotal(shoppingCart);
        let getCreatedAt = this.getCurrentDateAndTime(); //make function to retrieve date and  time

        let newPurchaseObject = {
            id: getId,
            name: getName,
            email: getEmail,
            order: getOrder,
            total: getTotal,
            createdAt: getCreatedAt
        }

        // let allPurchases = storage.get("purchases");
        // allPurchases = allPurchases.push(newPurchaseObject);
        // storage.set("purchases", allPurchases);

        return newPurchaseObject;
    }




}

module.exports = Store;