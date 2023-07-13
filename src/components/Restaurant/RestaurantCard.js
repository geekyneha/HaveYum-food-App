import { CDN_URL } from "../../utils/constants"
import style from './restaurant.module.css'
import{AiFillStar} from "react-icons/ai"
const RestaurantCard = (props) => {
    const { resData ,onClick} = props
    const { name, cuisines, avgRating, costForTwo, deliveryTime } = resData.data
    return (
        <div className={style["res-card"]} onClick={onClick} >
            <img
                className={style["res-logo"]}

                alt="restaurant" src={CDN_URL + resData.data.cloudinaryImageId} />

            <h3 className={style["restaurant-name"]}>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <span className={style.avgRating} style={{backgroundColor:avgRating > 4 ? "green":"orange"}}><AiFillStar style={{color:"#fff"}} />{avgRating}</span>
            
            <span>{deliveryTime} MINS</span>
            <span >₹{costForTwo / 100} For Two</span>
            <h4></h4>
        </div>
    )
}
export default RestaurantCard;