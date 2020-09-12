import { Button,Typography } from '@material-ui/core';
import Link from 'next/link'
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PartnerStyles from "../styles/PartnerStyles.module.css";

export default function BecomePartner({button}) {
    return (
        <div className={PartnerStyles.PartnerContainer}>
            <div className={PartnerStyles.PartnerBox}>
                <div className={PartnerStyles.TextBox}>
                    <h1>Become a partner and start earning</h1>
                    <p>You can login and logout whenever you want ! <span className={PartnerStyles.span}>No mandatory timings!</span></p>
                   <div className={PartnerStyles.ButtonBox}>
                       {
                           button?(
                            <Link href="/become-a-partner">
                                <a>
                                <Button variant="contained" color="primary" className={PartnerStyles.Button}>
                                    Become a Partner
                                </Button>
                                </a>
                            </Link>
                           ):(
                               <>
                                    <h2>Contact us</h2>
                                    <Typography variant="body1"><PhoneIcon />&nbsp;+91 1234567899</Typography>
                                    <Typography variant="body1"><WhatsAppIcon />&nbsp;+91 1234567899</Typography>
                               </>
                           )
                       }
                   
                   </div>
                </div>
                <div className={PartnerStyles.imageArea}>
                    <img src="/images/partner-1.png" alt="Partner 1" className={PartnerStyles.partner1}/>
                    <img  src="/images/partner-2.png" alt="Partner 2" className={PartnerStyles.mainPartnerImg}/>
                    <img src="/images/partner-3.png" alt="Partner 3" className={PartnerStyles.partner3}/>
                    <img src="/images/partner-4.png" alt="Partner 4" className={PartnerStyles.partner4}/>
                </div>
            </div>
        </div>
    )
}

