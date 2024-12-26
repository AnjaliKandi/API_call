import React,{useState,useEffect} from 'react'
import API_call2 from './API_call2';
import "./App.css"


export default function API_call1() {

    let[products,updateProducts]=useState([]);

    useEffect(()=>{
         data();
    },[]);
    
    console.log(products)
    async function data()
    {
       let val=await fetch('https://fakestoreapi.com/products')
       let productList=await val.json();
       updateProducts(productList);
      
    }
   

   if(products.length==0)
   {
    return <h3>No products yet,fetching products</h3>
   }

  return (
       <div className="products">
          {
            products.map((p)=><API_call2 {...p} key={p.id}></API_call2>) //...p is to pass all the parameters
          }

       </div>
         

  )
}
