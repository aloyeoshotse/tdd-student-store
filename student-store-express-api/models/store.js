const {NotFoundError} = require('../utils/errors')
const {storage} = require('../data/storage')

class Store {

    static getProducts(products){
        return storage.get(products).value();
    }


    static getSelectedProduct(products, id) {
        let allProducts = this.getProducts(products);
        let index = parseInt(id);
        const foundProduct = allProducts.find(item => item.id == index)
        if (!foundProduct) {
           return new NotFoundError()
        }
        return foundProduct;
    }

    

}

module.exports = Store;