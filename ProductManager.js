import crypto from "crypto";

class ProductManager {
    constructor() {
        this.products = [];
    }
    //Valida code unico, campos obligatorios y crea con id automentable
    addProduct(producto) {
        if (producto.title && producto.description &&
            producto.price && producto.thumbnail && producto.code &&
            producto.stock) {
            const code = this.products.findIndex((p) => p.code === producto.code)
            if (code === -1) {
                producto.id = crypto.randomBytes(10).toString("hex");
                this.products.push(producto);
            }else{
                console.log("Este producto ya existe.")
            }
        } else {
            console.log("Complete todos los campos!")

        }
    }
    //Devolver todos los productos creados
    getProducts() {
        return this.products;
    }
    getProductById(id) {
        const prod = this.products.find((p)=> p.id == id);
        //(this.products.id)
        if (prod) {
            return prod
        }else{
            console.log("404: Not Found")
        }
        // return this.products.filter((id) => products.id === id);
    }
};
//Test
const product1 = {
    title: "Product 1",
    description: "Description 1",
    price: 100,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-256.png",
    code: "P1",
    stock: 10,
};
let manager = new ProductManager();
console.log(manager.getProducts());
manager.addProduct(product1);
console.log(manager.getProducts());
manager.addProduct(product1);
console.log(manager.getProducts());
manager.getProductById(product1.id + 1) ;