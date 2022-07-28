import genaratejoke from "./genaratejoke";
import "./styles/main.scss";

genaratejoke();

const jokeBtn = document.querySelector("#jokeBtn").addEventListener("click", genaratejoke);