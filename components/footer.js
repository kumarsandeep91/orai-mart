import Link from 'next/link'
import {  Typography } from "@material-ui/core";
import { useStyletron } from "styletron-react";
import {useTheme } from "@material-ui/core/styles";
import FooterStyles from "../styles/Footer.module.css";

export default function Footer() {
    const [css] = useStyletron();
    const theme = useTheme();

    return (
        <div className={FooterStyles.FooterSection}>
            <div className={FooterStyles.Row}>
                <div className={FooterStyles.Col}  className={css({display:'flex',alignItems:'center',justifyContent:'center'})}>
                    <img src="/images/logo.jpeg" alt="Logo"  className={css({maxWidth:'150px',maxHeight:'150px'})}/>
                    <div>
                    <Typography className={css({ color: theme.palette.secondary.main,fontWeight: "bold",})}variant="h5">
                        Orai Mart
                    </Typography>
                    <Typography className={css({ color: theme.palette.grey[800] })} variant="body2" >
                        Stay Home, Stay Safe
                    </Typography>
                    </div>
                </div>
                <div className={FooterStyles.Col}>
                    <h1>About Us</h1>
                    <ul  className={css({padding:0})}>
                        <li><Link className={FooterStyles.FooterLinks} href="#"><a>Categories</a></Link></li>
                        <li><Link className={FooterStyles.FooterLinks} href="#"><a>Become a Partner</a></Link></li>
                        <li><Link className={FooterStyles.FooterLinks} href="#"><a>Blog</a></Link></li>
                        <li><Link className={FooterStyles.FooterLinks} href="#"><a>Careers</a></Link></li>
                    </ul>
                </div>
                <div className={FooterStyles.Col}>
                    
                    <h1>Questions ?</h1>
                    <ul className={css({padding:0})}>
                        <li><Link className={FooterStyles.FooterLinks} href="#"><a>Frequently Asked Questions</a></Link></li>
                        <li><Link className={FooterStyles.FooterLinks} href="#"><a>Contact Us</a></Link></li>
                    </ul>
                </div>
            </div>
            <div className={FooterStyles.graveYardLinks}>
                <p  className={css({margin:0})}>© 2020 Orai Mart</p>
                <div className={FooterStyles.centerLinkBox}>
                    <Link href="#" className={FooterStyles.centerLink}><a className={css({margin:'0 10px'})}>Privacy</a></Link>
                    <Link href="#" className={FooterStyles.centerLink} ><a className={css({margin:'0 10px'})}>Accesbility</a></Link>
                    <Link href="#" className={FooterStyles.centerLink}><a className={css({margin:'0 10px'})}>Terms</a></Link>
                </div>
                <div className={FooterStyles.icons}>
                    <a target="_blank" aria-label="Instagram" rel="noopener" href=""className={FooterStyles.link} >
                        <i className={`${FooterStyles.instagram} fab fa-instagram fa-lg`}></i>
                    </a>
                    <a target="_blank" aria-label="Facebook" rel="noopener" href=""className={FooterStyles.link} >
                        <i  className={`${FooterStyles.facebook} fab fa-facebook-square fa-lg`}></i>
                    </a>
                    <a target="_blank" aria-label="Twitter" rel="noopener" href=""className={FooterStyles.link} >
                        <i className={`fab fa-twitter fa-lg ${FooterStyles.twitter}`}></i>
                    </a>
                    <a target="_blank" aria-label="Youtube" rel="noopener" href=""className={FooterStyles.link} >
                        <i className={`${FooterStyles.youtube} fab fa-youtube fa-lg`}></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

