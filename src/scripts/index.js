//CSS
import "../styles/main.css";
import dicesImg from "../assets/dices.png";
import generateActivity from "./generateActivity";
import heartImg from "../assets/heart.png";
import manageFavorites from "./manageFavorites";

//Generate activity
const dices = document.getElementById("dices");
dices.src = dicesImg;

dices.addEventListener("click", generateActivity);
generateActivity();

//Add activity to favorites
const heart = document.getElementById("heart");
heart.src = heartImg;

heart.addEventListener("click", manageFavorites);
