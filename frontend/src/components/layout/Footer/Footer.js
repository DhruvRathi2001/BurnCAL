import React from "react";
import playStore from '../../../images/playstore.png';
import appStore from '../../../images/Appstore.png';
import './Footer.css'

function Footer() {
    return (  
    <footer id='footer'>
       <div className="leftFooter">
        <h4>Download our App</h4>
        <p>Download For Android and IOS  mobile phones</p>
        <img src= {playStore} alt='/playStore' />
        <img src= {appStore} alt='/appStore' />
       </div>

       <div className="midFooter">
          <h1 className="">BurnCAL</h1>
          <p>High quality is our first priority</p>
          <p>Copyrights 2021 &copy; Chaliye shuru karte he </p>
       </div>


     

    </footer>
    );
}

export default Footer;