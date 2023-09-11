import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../Styles/footer.css';
function Footer(){
    return (
        <div className="footer">
            <div className="socialmedia"><InstagramIcon/> <TwitterIcon/> <FacebookIcon/> <LinkedInIcon/></div>
            <p className="copy"> @copy: 2023 pedrotechpizza.com</p>
        </div>
    )
}

export default Footer;