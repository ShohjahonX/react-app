import React, { useEffect, useState } from "react";


const Backend = () => {
const [products,setProducts] = useState([])
  useEffect(() => {
    const times = () => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    }

    times()
  }, [])
  

  return (
    <div>{products && products.map(pro => (
        <h1>{pro?.title}</h1>
    ))}</div>
  )
}


export default Backend;