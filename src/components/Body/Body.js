import RestaurantCard from "../Restaurant/RestaurantCard";
import { useEffect, useState } from "react";
import * as style from './body.module.css'
import Shimmer from "../Shimmer/Shimmer";
import { useNavigate } from "react-router-dom";
const Body = () => {

   
    
    const [listOfRestaurant,setListOfRestaurant]= useState([]);
    const [FilteredRestaurant,setIsFilteredRestaurant]=useState([]);
    const [inputText,setInputText]=useState("");
    const navigate= useNavigate();


     console.log("rerendered")
    
     
         

    useEffect(()=>{
       fecthData();
    },[])
  

    const handleSearch=()=>{
        const searchedRes=listOfRestaurant.filter(res=>res.data.name.toLowerCase().includes((inputText).toLowerCase()))
        setIsFilteredRestaurant(searchedRes);
        setInputText("");
     
    }


    const fecthData= async()=>{
        const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2704628&lng=72.8709166&page_type=DESKTOP_WEB_LISTING")

    //    https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING

        const json= await data.json();
        console.log(json.data.cards);
        setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards)
       setIsFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    }

    const showMenu=(id)=>{
        console.log("clicked")
          navigate("restaurant/"+id)
     
         }
    
    
    return (listOfRestaurant.length===0 ?
        (
            <Shimmer />
        ):
        (<div className={style.body}>
            
             <div className={style["filter-restaurant"]}>

                <span className={style["total-restaurant"]}>131 Restaurants</span>
                <div><input placeholder="search" value={inputText} onChange={(e)=>setInputText(e.target.value)}/> <button onClick={()=>handleSearch()}>Search</button></div>
                <div>
                    

             <button className={style["filter-btn"]}  onClick={()=>{
               
                TopRated= listOfRestaurant.filter((restaurant)=>restaurant.data.avgRating > 4  )
               setIsFilteredRestaurant(TopRated)}
          
}               >
           Rated 4+</button>  

             <button className={style["filter-btn"]}  onClick={()=>{
                costHighToLow=listOfRestaurant.filter((restaurant)=>restaurant.data.costForTwo < 70000)
                setIsFilteredRestaurant(costHighToLow)}
          
}               >
           Cost:High to Low</button>  

            

             <button className={style["filter-btn"]}  onClick={()=>{
               deliveryTime= listOfRestaurant.filter((restaurant)=>restaurant.data.deliveryTime < 20 )
               setIsFilteredRestaurant(deliveryTime)}
          
}               >
             Delivery Time</button>  

             </div>
             </div>
             
             
          
            <div className={style["res-container"]}>

                {
                   FilteredRestaurant.map((restaurant) => <RestaurantCard key={restaurant.data.id} resData={restaurant} onClick={()=>showMenu(restaurant.data.id)}/>)
                }
        
            </div>


        </div>)
    )
}
export default Body;