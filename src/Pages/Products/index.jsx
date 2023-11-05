import { useState } from "react";


const Products = () => {

    const [products, setProducts] = useState();

    fetch('https://backendr.vercel.app/api/products')
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
        })
        .catch((err) => {
            console.error('Error al obtener datos.');
        })

    return (
        <div>
            <p>
                {products.map((product) => {
                    return product.name;
                })}
            </p>
        </div>
    )
}

export default Products;
