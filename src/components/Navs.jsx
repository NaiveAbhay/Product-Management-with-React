import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/context'

function Navs() {

  const {data}=useContext(ProductContext);

    let distinctCategory;
    if(data){
      distinctCategory= data.reduce((acc,curr)=>[...acc,curr.category],[])
      //console.log(distinctCategory); by this we have fetched out only categories of all items
    }
    distinctCategory=[...new Set(distinctCategory)];
    //console.log(distinctCategory);// here we have fetched all diff category using set 

    const color=()=>{

      return `rgba(${(Math.random()*256).toFixed()},${(Math.random()*256).toFixed()},${(Math.random()*256).toFixed()},0.5)`;

    }
    const {search}=useLocation();
    const {pathname}=useLocation();
    
    
    let type=search.split("=");
    type=decodeURIComponent(type[1]);
    
    if(type==="undefined" && pathname==="/"){
      type="hidden";
    }
    else{
      type="block";
    }


    
    useEffect(()=>{

    },[search])



  return (
    <>
      
      <nav className='p-5 flex flex-col items-center h-full w-[15%] bg-zinc-100'>

        <Link to={"/"} className={`mt-5 px-3 py-1 font-bold border-2 ${ type } border-red-300 text-red-300 rounded`}>Home</Link>

        <hr className='mt-3 w-[80%] text-bold '/>
        <h1 className='mt-3 text-lg w-[80%]'>Category filter</h1>
        <div className='w-[80%] '>
          {
            distinctCategory.map((item,idx)=>{
              return <Link key={idx}  to={`/?Category=${item}`} /*to={`/Category/${item}`}*/ className='mt-3 flex items-center'>
                        <span style={{backgroundColor:color()}} className='mr-3 h-[15px] w-[15px] rounded-full bg-blue-300'></span>{" "}{`${item}`}
                      </Link>
            })
          }
          
        </div>
        <Link className='mt-5 px-3 py-1 text-md border rounded border-blue-300' to={'/Create?=new'}>Add New Product</Link>


      </nav>
    </>
    
  )
}

export default Navs
