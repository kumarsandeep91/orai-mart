import { Button } from '@material-ui/core';
import PartnerStyles from "../styles/PartnerStyles.module.css";

export default function BecomePartner() {
    return (
        <div className={PartnerStyles.PartnerContainer}>
            <div className={PartnerStyles.PartnerBox}>
                <div className={PartnerStyles.TextBox}>
                    <h1>Become a partner and start earning</h1>
                    <p>You can login and logout whenever you want ! <span className={PartnerStyles.span}>No mandatory timings!</span></p>
                   <div className={PartnerStyles.ButtonBox}>
                   <Button variant="contained" color="primary" className={PartnerStyles.Button}>
                        Become a Partner
                    </Button>
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

