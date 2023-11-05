import { useEffect, useState } from "react";

import Item from "../../Components/Item";


const Products = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://backendr.vercel.app/api/products'); // Reemplaza con la URL de la API que desees
                if (!response.ok) {
                    throw new Error('No se pudo cargar los datos.');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        }

        fetchData();
    }, []);


    return (
        <div>
            {
                data.map((data, index) => {
                    return <Item data={data} key={index} />
                })
            }
        </div>
    )
}

export default Products;
