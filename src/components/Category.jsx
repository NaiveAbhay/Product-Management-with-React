// firstly i was thinking to add a category page to shoew all the filtered data this is correct but let's try something try
// now we will show filtered item on that very same page

import React, { useContext } from 'react'
import { ProductContext } from '../utils/context'
import { Link, useParams } from 'react-router-dom';
import Navs from './navs';

function Category() {

    const products=useContext(ProductContext);
    const {data}=products;

    const {type}=useParams();

    const categorydata=data.filter((elem)=>elem.category==type)

 

  return (
    <>

        <Navs/>

        <div className='w-[85%] p-10 h-full flex flex-wrap overflow-x-hidden overflow-y-auto '>

          {
            categorydata.map((elem)=>{
              return <Link key={elem.id} to={`/Detail/${elem.id}`} className='  mr-3 mb-3 w-[18%] h-[38vh] flex items-center flex-col border shadow'>
                <div className=' w-[96%] h-[25vh] m-1 '>
                <img className='hover:scale-110 w-full h-full object-contain' src={`${elem.image}`}></img>
                </div>
                <h1 className='text-center mt-1.5 font-semibold text-sm'>{elem.title}</h1>
              </Link>
            })
          }
            


        </div>
    </>
  )
}

export default Category
