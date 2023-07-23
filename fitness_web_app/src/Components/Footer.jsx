import React from "react";
import img from "../2.png"



function Footer(){

    return(
        <div id="Footer">

            <div className="Footer-list">
                <div>
                    <p>Joesthetics Club Business</p>
                    <p>Tech on Joesthetics Club</p>
                    <p>Get the app</p>
                    <p>About us</p>
                    <p>Contact us</p>
                </div>

                <div>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>Help and Supports</p>
                    <p>Affiliate</p>
                    <p>Investors</p>
                </div>
                <div>
                    <p>Terms</p>
                    <p>Privacy policy</p>
                    <p>Cookie settings</p>
                    <p>Sitemap</p>
                    <p>Accessibility statement</p>
                </div>
            </div>

            <div className="Footer-logo">
              <img src={img} alt="" />  
              <p>© 2023 Joesthetics Club, Inc.</p>
            </div>
        </div>
    )
}


export default Footer