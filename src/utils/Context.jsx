import axios from "./Axios";
import { createContext, useEffect, useState } from "react"


export const ProductContext=createContext();

const Context=(props)=>{

    const [data,setdata]=useState([])

    //const api="https://fakestoreapi.com/products";


    // const getproduct=()=>{
    //     // axios.get is an asynchronous operation returning a promise

    //     //that promise is handled by .then and .catch block

    //     axios.get("/products").then((products)=>{
    //         console.log(products.data)
    //         setdata(products.data)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }
    //second method
    const [loading,setloading] = useState(true);

    const getproduct=async()=>{
        try{
            const {data}=await axios("/products")

            const data2=JSON.parse(localStorage.getItem("data"));
            // setdata(data)
            // localStorage.setItem("data",JSON.stringify(data)) // in local storage we can save data in string format only so we are using JSON.stringify

            console.log(data)
            if(data2===null){
                setdata(data)
            }
            else{
                setdata(data2)
            }
            
        }catch(err){
            console.log(err)
        }
        finally{
            setloading(false)
        }
    }
    


    useEffect(()=>{
        getproduct();
        //console.log(data);
        //console.log("data fetched");
        return ()=>{
            //console.log("data cleared");
        }
    },[loading])
    
    if(loading){
        return <div>Loading...</div>
    }


    return(
        
        <ProductContext.Provider value={{data,setdata}}>
            
            {props.children}
           
        </ProductContext.Provider>
        
    )

}

export default Context;