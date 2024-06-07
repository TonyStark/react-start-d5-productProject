import { useState } from "react";
import UI from "./UI";
function App() {
  let [product,setProduct]=useState([])
  let [display,setDisplay]=useState("Entry")
  let addProduct=()=>{
    let productName=document.getElementById('productName').value
    let productPrice=document.getElementById('productPrice').value
    let productDesc=document.getElementById('productDesc').value
    let productCat=document.getElementById('productCat').value
    let productQty=document.getElementById('productQty').value
    let productImg=document.getElementById('productImg').value
    if(productName=="" || productPrice=="" || productDesc=="" || productCat=="" || productQty=="" || productImg==""){
      Swal.fire({
        icon: "error",
        title: "Missing",
        text: "You are missing to add input fields",
      });
      return false
    }
    let newProduct={
      productName:productName,
      productPrice:productPrice,
      productDesc:productDesc,
      productCat:productCat,
      productQty:productQty,
      productImg:productImg
    }
    setProduct([...product,newProduct])
    Swal.fire({
      title: "Product Added",
      text: "Your product is added in catalogue",
      icon: "success"
    });
    document.getElementById('productName').value=''
    document.getElementById('productPrice').value=''
    document.getElementById('productDesc').value=''
    document.getElementById('productCat').value=''
    document.getElementById('productQty').value=''
    document.getElementById('productImg').value=''

  }
  console.log(product)
  let changeDisplay=()=>{
    setDisplay((display)=>{
      return display=="Entry" ? "Data" : "Entry"
    })
  }
  return (
    <UI product={product} display={display} changeDisplay={changeDisplay} addProduct={addProduct} />
  );
}

export default App;
