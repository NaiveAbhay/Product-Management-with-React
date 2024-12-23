import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../utils/context';
import Navs from './navs';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function Create() {

    const product = useContext(ProductContext);
    const navigate=useNavigate()
    const {data,setdata}=product;



    const [Title,setTitle]=useState('')
    const [Image,setImage]=useState('')
    const [Description,setDescription]=useState('')
    const [Price,setPrice]=useState('')
    const [Id,setId]=useState('')
    const [Category,setCategory]=useState('')

    const  SubmitHandler =async (e)=>{
        e.preventDefault();
        const Product={
            title:Title,
            image:Image,
            description:Description,
            price:Price,
            category:Category,
            id:Id
        }
        //console.log(Product)
        try{
            await setdata([...data,Product]);
            navigate("/")
        toast.success('Product Added Successfully')

        }
        catch(err){
            console.log(err);
        }
        
        
        
        
    }    

    useEffect(() => {
        console.log('Updated data:', data);
        // by the below line we are saving the data into local storage
        localStorage.setItem("data",JSON.stringify(data)) // in local storage we can save data in string format only so we are using JSON.stringify

      }, [data]);

  return (

    <div className='w-full h-full flex items-center '>
        <Navs></Navs>
        <div className='h-full w-[45%] flex flex-col ml-[5%]'>
        <h1 className='text-2xl mt-[10%] '>Add New Product</h1>

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
                <button  className={`mt-5 px-3 py-1 text-md border rounded border-blue-300`} >Add New Product</button>

            </form>
        </div>
     
    </div>
  )
}

export default Create
