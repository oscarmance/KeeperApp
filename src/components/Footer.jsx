import React from "react";

function Footer(){

    let date =  new Date();
    let year = date.getFullYear();
    console.log(year);

    return(
    <footer>
        <p>Copyright@ { year}</p>
    </footer>  
    )
}

export default Footer;