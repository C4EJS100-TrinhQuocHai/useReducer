import React, { useReducer, useState } from 'react'

export default function App() {
  const [name,setName] =useState("");
  const [price, setPrice] = useState("1");

  let initial =[];
  const reduce =(state,action)=>{
      switch (action.payload) {
        case "addProduct":
          return [...state,
            {
              name:name,
              price:price
            }
          ]
        default:
         return state
      }
  }
  const [state,dispatch1] =useReducer(reduce,initial);
  const addProduct=()=>{
    dispatch1({
      payload:"addProduct",
    })
  }
  console.log("111111111",state);
  return (
    <>
    {/* 
        useReducer nhận 2 đối số 
        1: 1 cái hàm có tên reduce
        2. initial biến khởi tạo
        ==> trả về 1 cái mảng có 2 phần tử[state,dispatch]
        const [state,dispatch] =useReducer(...)
    */}
      <input 
          onChange={(e)=>setName(e.target.value)}
          type="text" 
          placeholder='nhập  tên sản phẩm' />
      <input 
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder='nhập giá sản phẩm' />
      <button onClick={addProduct}>add sản phẩm </button>
    </>
  )
}
