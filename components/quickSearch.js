import { Button } from '@material-ui/core';
import SearchStyles from "../styles/quickSearch.module.css";
export default function quickSearch() {
    return (
        <div className={SearchStyles.SearchSection}>
            <div className={SearchStyles.TextBox}>
                <p className={SearchStyles.SubText}>Here's what you need</p>
                <h1 className={SearchStyles.MainText}>Quick Searches</h1>
            </div>
            <div className={SearchStyles.Row}>
                <div className={SearchStyles.Col}>
                    <img src="/images/Grocery.svg" alt="Grocery and Staples"/>
                    <p>Grocery & Staples</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/VegetablesFruits.svg" alt="Vegetables and Fruits"/>
                    <p>Vegetables & Fruits</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/PersonalCare.svg" alt="Personal Care"/>
                    <p>Personal Care</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/HomeKitchen.svg" alt="Home and Kitchen"/>
                    <p>Home & Kitchen</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/Beverages.svg" alt="Beverages"/>
                    <p>Beverages</p>
                </div>
            </div>
            <div className={SearchStyles.ButtonContainer}>
                <Button variant="contained" color="primary" className={SearchStyles.Button}>
                    Explore More
                </Button>
            </div>
        </div>
    )
}
