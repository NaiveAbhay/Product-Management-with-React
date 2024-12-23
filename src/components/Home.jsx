import React, { useContext, useEffect, useState } from 'react'
import Navs from './navs'
import { Link, useLocation } from 'react-router-dom'
import { ProductContext } from '../utils/context';
function Home() {

  const product=useContext(ProductContext);
  const {data,setdata}=product;


  const [filteredData,setfilteredData]=useState(data);
  
  // from line 14 to 29 we are filtering the data based on the category for this we are using search query use/location query, useLocation have the full URL address and search query filters the data after question mark from URL we are using split method to split the URL and then decodeURIComponent to decode the URL and further using filter method to filter the data based on the search query

  // important *** useeffect is async fucntion so it do not update the state immediately.
  const {search}=useLocation();

  useEffect(()=>{
      let type=search.split("=");
      type=decodeURIComponent(type[1]);
      

      if(type!=="undefined"){
        // here we are data based on the category and not the filtered data b/c it might not be set by usestate on line 11 so we are using data
        setfilteredData(data.filter((item)=>item.category===type))
        //console.log(filteredData)
      }
      else{
        setfilteredData(data)
    

      }
  },[search,data])

  

  return (
   <>
        <Navs/>
        <div className='w-[85%] p-10 h-full flex flex-wrap overflow-x-hidden overflow-y-auto '>

          {
            filteredData.map((elem)=>{
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

export default Home
