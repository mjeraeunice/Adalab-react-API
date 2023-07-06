import React ,{useState,useEffect}from "react";
import './prod.css'
import userEvent from "@testing-library/user-event";
import { Link } from 'react-router-dom';
const Products=()=>{
    const [products,setProducts]=useState([])
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        (async()=>{
            await getProducts()
        })()
    },[])
    console.log(products);
    const getProducts=async ()=>{
        try{
            setLoading(true);
            const response=await fetch('https://dummyjson.com/products')
            const result=await response.json()
            setProducts(result.products)
            setLoading(false)
        }
        catch(error){
            console.log(error.message);
        }
    }
    if(loading){
        return <h2>Loading</h2>
    }
return(
    <div>
         <h1>All products</h1>
    <div className="allproducts">
   
    {products.map(item=>(
        <div key={item.id} className="singlep">
        <h2>{item.title}</h2>
        <img src={item.thumbnail} alt={item.title} className="image"></img>
        <p className="productprice">price &nbsp;ksh{item.price}</p>
        <p className="productdiscount">discount&nbsp;{item.discountPercentage}%</p>
        <Link to={`/ProductDetails/${item.id}` }className="buton">
            <button type="submit" className="button">View details</button >
          </Link>

        </div>
    ))}
    </div>
    </div>
)
}
export default Products