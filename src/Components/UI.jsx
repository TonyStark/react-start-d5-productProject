
import React, { useState } from 'react';
function UI({product,display,addProduct,changeDisplay}) {
  
  return (
    <main className="container">
      {display=="Entry" ? 
        <div id='productEntry' className="row justify-content-center">
          <div className="col-6 position-absolute top-50 start-50 translate-middle">
            <h3 className='text-center'>Product Entry</h3>
            <input type="text" id='productName' className='form-control my-3' placeholder='Product Name' autoComplete='off'/>
            <input type="text" id='productPrice' className='form-control my-3' placeholder='Product Price (₹)' autoComplete='off'/>
            <textarea name="" id="productDesc" rows="5" placeholder='Product Description' className='form-control'autoComplete='off'></textarea>
            <div className="row my-3">
              <div className="col-6">
                <input type="text" id='productCat' className='form-control' placeholder='Product Category' autoComplete='off'/>
              </div>
              <div className="col-6">
                <input type="text" id='productQty' className='form-control' placeholder='Stock Quantity' autoComplete='off'/>
              </div>
            </div>
            <input type="text" id='productImg' className='form-control my-3' placeholder='Product Image' autoComplete='off'/>
            <div className="d-flex justify-content-between align-items-center">
              <button className='btn btn-primary' onClick={addProduct}>Add Product</button>
              <button className='btn btn-warning' disabled={product.length>0? false:true} onClick={changeDisplay}>Show Product</button>
            </div>
          </div>
        </div>
        :
        <div id='productData' className="row justify-content-center">
          <h3 className='text-center'>Product Data</h3>
          <table className="table table-bordered">
            <thead>
              <tr className='text-center'>
                <th>Sr.No.</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Category</th>
                <th>Product Qty</th>
                <th>Product Price</th>
              </tr>
            </thead>
            <tbody>
              {
                product.map((item,index)=>{
                  return(
                    <tr className='text-center'>
                      <td>{index+1}</td>
                      <td><img src={item.productImg} width='100px' height='100px'/></td>
                      <td>{item.productName}</td>
                      <td>{item.productDesc}</td>
                      <td>{item.productCat}</td>
                      <td>{item.productQty}</td>
                      <td>₹ {item.productPrice}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <div className="col-12">
          <button className='btn btn-primary' onClick={changeDisplay}>Add Product</button>
          </div>
        </div>
        }
      
      <br />
      
    </main>
  );
}

export default UI;
