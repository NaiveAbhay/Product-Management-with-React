import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/context'
import Navs from './navs';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


function Edit() {
    const {data,setdata}=useContext(ProductContext);
    const {idx}=useParams()
    const navigate=useNavigate()

    const [filteredData,setfilteredData]=useState(data.filter((elem)=>elem.id==idx))
   
    useEffect(()=>{
        setfilteredData(data.filter((elem)=>elem.id==idx))
        
        
    },[])

    const [Title,setTitle]=useState(filteredData[0].title)
        const [Image,setImage]=useState(filteredData[0].image)
        const [Description,setDescription]=useState(filteredData[0].description)
        const [Price,setPrice]=useState(filteredData[0].price)
        const [Id,setId]=useState(filteredData[0].id)
        const [Category,setCategory]=useState(filteredData[0].category)

    
    const  SubmitHandler =async (e)=>{

        setdata(data.filter((elem)=>elem.id!=idx))
      localStorage.setItem("data",JSON.stringify(data.filter((elem)=>elem.id!=idx)))
        console.log(data)
        

        e.preventDefault();
        const Product={
            title:Title,
            image:Image,
            description:Description,
            price:Price,
            category:Category,
            id:Id
        }
        console.log(Product)
        try{
            // let copyData=[...data];
            // copyData[idx]={...filteredData,...Product}
            // await setdata([...copyData]);
            // localStorage.setItem("data",JSON.stringify([...copyData]))
            await setdata([...data,Product])
            localStorage.setItem("data",JSON.stringify([...data,Product]))
                              

        }
        catch(err){
            console.log(err);
        }
        
        console.log(data)
        toast.success('Product Updated Successfully')
        
        
        navigate("/")
        
    }  
    


  return filteredData && (
    <div className='w-full h-full flex items-center '>
        <Navs></Navs>
        <div className='h-full w-[45%] flex flex-col ml-[5%]'>
        <h1 className='text-2xl mt-[10%] '>Edit Product</h1>

            <form onSubmit={SubmitHandler} >
                {/* this form is handeled by two way i.e. when we change input state changes and when we change state input changes */}
                <input type="text" className='py-2 mt-3 mb-5 px-3 rounded  text-md w-[100%] bg-zinc-100' placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}} value={Title}/>
                <div className='flex justify-between' >
                    <input type="text" className='py-2 mb-5 rounded px-3  text-md w-[87%] bg-zinc-100' placeholder='Image' onChange={(e)=>{setImage(e.target.value)}} value={Image}/>
                    <input type="number" className='py-2 mb-5 rounded px-3  text-md w-[10%] bg-zinc-100' placeholder='Id' onChange={(e)=>{setId(e.target.value)}} value={Id}/>
                </div>
                
                <div className='flex justify-between' >
                    <input type="text" className='py-2 mb-5 rounded px-3 text-md w-[47%] bg-zinc-100' placeholder='Category' onChange={(e)=>{setCategory(e.target.value)}} value={Category}/>
                    <input type="number" className='py-2 mb-5 rounded px-3  text-md w-[47%] bg-zinc-100' placeholder='Price' onChange={(e)=>{setPrice(e.target.value)}} value={Price}/>
                </div>
                <textarea type="text" className='w-[100%] rounded px-3 py-3 bg-zinc-100' rows={5} placeholder='Type Product Description here' onChange={(e)=>{setDescription(e.target.value)}} value={Description}></textarea>
                <button onClick={()=>SubmitHandler()} className={`mt-5 px-3 py-1 text-md border rounded text-blue-400 border-blue-300`} >Update</button>
                {/* <button  className={`mt-5 ml-5 px-3 py-1 text-md border rounded text-red-400 border-red-300`} >Cancel</button> */}
            </form>
        </div>
     
    </div>
  )
}

export default Edit
