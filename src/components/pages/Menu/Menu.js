import React, { useState } from "react";
import style from "./menu.module.css";
import axios from "axios";
import { useEffect } from "react";
import Shimmer from "../../Shimmer/Shimmer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CDN_URL } from "../../../utils/constants";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../../utils/constants";
const Menu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {restaurantId}=useParams();
  console.log(restaurantId)
  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + restaurantId
    );

    const json = await data.json();
    // console.log(data.data.data?.cards[0]?.card?.card?.info);
    // console.log(json.data);
    setResInfo(json.data);

    console.log(
      resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards[1]?.card?.info
    );
  };
  // console.log("its")
  // console.log(resInfo)
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, areaName } = resInfo?.cards[0]?.card?.card?.info;
  const { lastMileTravelString, deliveryTime, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info?.sla;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // const {itemCards}=resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className={style["restaurant-menu"]}>
      <div>
        <div>{name}</div>
        <div>{cuisines}</div>
        <div>
          <span> {areaName}</span>
          <span>{lastMileTravelString}</span>
        </div>

        <div>
          <span> {deliveryTime}</span>
          <span> {costForTwoMessage}</span>
        </div>
      </div>

      <div>Menu</div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{itemCards[0]?.card?.info?.category}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
          
              <div>
                <div>{item.card.info.name}</div>
              </div>
              <div>
              RS{item.card.info.defaultPrice / 100}
              </div>
               <div><img src={CDN_URL + item.card.info.imageId} alt="image" width={100}/></div>
            </li>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Menu;
