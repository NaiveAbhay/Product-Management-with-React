import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../utils/context'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navs from './navs';
import { toast } from 'react-toastify';

function Detail() {

    const navigate=useNavigate();
    const {idx}=useParams();
    
    const product=useContext(ProductContext);
    const {data,setdata}=product;
    

    const item=data.filter((elem)=>idx==elem.id)

    const handleDelete=(e)=>{
      setdata(data.filter((elem)=>elem.id!==e))
      localStorage.setItem("data",JSON.stringify(data.filter((elem)=>elem.id!==e)))
      toast.success('Product Deleted Successfully')
      
      navigate("/");
    }

    useEffect(()=>{


    },[data])
    


  return (

    <>
    <Navs/>
    <div className='w-[60%] h-full  m-auto py-[10%] px-[10%]'>

      <div className='py-[5%] h-full w-full flex  items-center justify-between'>
       
        <img className='mr-5 w-full h-full object-contain' src={`${item[0].image}`}></img>
        
        <div>
            <h1 className='text-2xl mb-4'>{item[0].title}</h1>
            <h3 className='mb-1 text-blue-500'>{item[0].category}</h3>
            <h3 className='mb-1 text-green-400 '> ₹{item[0].price}</h3>
            <p className='text-sm mb-4'>{item[0].description}</p>
            <Link to={`/Edit/${idx}`} className='px-2 py-0.5 mr-5 text-md border rounded border-blue-300 text-blue-300'>Edit</Link>
            <button onClick={()=>{handleDelete(item[0].id)}} className='px-2 py-0.5 text-md border rounded border-red-300 text-red-300'>Delete</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default Detail
