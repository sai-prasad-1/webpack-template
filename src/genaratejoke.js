import axios from "axios";

function genaratejoke( ) {
    const config = {
        headers:{
            Accept: "application/json"

        } 
    }

    axios.get("https://icanhazdadjoke.com/", config).then(res=>{
        document.querySelector("#joke").innerHTML = res.data.joke;
    })
}


export default genaratejoke;