import { Button,Typography } from '@material-ui/core';
import aboutStyles from "../styles/About.module.css";

export default function about() {
    return (
        <div className={aboutStyles.aboutContainer}>
            <div className={aboutStyles.aboutSection}>
                <div className={aboutStyles.textBox}>
                    <div className={aboutStyles.textContainer}>
                        <p className={aboutStyles.hashtag}>#GroceryDeliveredSafely</p>
                        <h1 className={aboutStyles.MainText}>Hygenically <br/> Packed , <br/> Safely Delivered</h1>
                        <Button variant="contained" color="primary" className={aboutStyles.Button}>
                            Learn More
                        </Button>
                    </div>
                </div>
                <div className={aboutStyles.imageArea}>
                    <img src="/images/About.svg" className={aboutStyles.AboutImage} alt="Delivery Guy"/>
                </div>
            </div>
            <div className={aboutStyles.aboutRow}>
                <div className={aboutStyles.aboutCol}>
                    <img src="/images/Tick.svg" alt=""/>
                    <p>Zero touch delivery options</p>
                </div>
                <div className={aboutStyles.aboutCol}>
                    <img src="/images/Tick.svg" alt=""/>
                    <p>Regular cleaning of warehouses</p>
                </div>
                <div className={aboutStyles.aboutCol}>
                    <img src="/images/Tick.svg" alt=""/>
                    <p>Fever screening of all executives</p>
                </div>
            </div>
        </div>
    )
}
