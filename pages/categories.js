import { Button } from '@material-ui/core';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import SearchStyles from "../styles/quickSearch.module.css";
export default function QuickSearch() {
    return (
        <> 
        <div className={SearchStyles.SearchSection}>
        <Navbar />
            <div className={SearchStyles.TextBox}>
                <h1 className={SearchStyles.MainText}>Categories</h1>
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
            <div className={SearchStyles.Row}>
                <div className={SearchStyles.Col}>
                    <img src="/images/bread.svg" alt="Breads and Buns"/>
                    <p>Breads and Buns</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/milk.svg" alt="Dairy"/>
                    <p>Dairy</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/oil-bottle.svg" alt="Edible Oil"/>
                    <p>Edible Oil</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/flour.svg" alt="Atta, Flour and Sooji"/>
                    <p>Atta, Flour and Sooji</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/rice.svg" alt="Rice and Rice Products"/>
                    <p>Rice and Rice Products</p>
                </div>
            
            </div>
            <div className={SearchStyles.Row}>
               
                <div className={SearchStyles.Col}>
                    <img src="/images/spices.svg" alt="Masala and Spices"/>
                    <p>Masala and Spices</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/sugar.svg" alt="Salt and Sugar"/>
                    <p>Salt and Sugar</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/biscuit.svg" alt="Biscuits and Cookies"/>
                    <p>Biscuits and Cookies</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/pasta.svg" alt="Noodle,Pasta and Vermicelli"/>
                    <p>Noodle,Pasta and Vermicelli</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/cereal.svg" alt="Breakfast Cereals"/>
                    <p>Breakfast Cereals</p>
                </div>
            </div>
            <div className={SearchStyles.Row2}>
                
                <div className={SearchStyles.Col}>
                    <img src="/images/chocolate.svg" alt="Chocolates and Candies"/>
                    <p>Chocolates and Candies</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/snack.svg" alt="Snacks and Namkeen"/>
                    <p>Snacks and Namkeen</p>
                </div>
            </div>
            <h1 className={SearchStyles.MainText} style={{textAlign:'center'}}>Coming Soon</h1>
            <div className={SearchStyles.Row}>
            <div className={SearchStyles.Col}>
                    <img src="/images/seasoning.svg" alt="Seasoning"/>
                    <p>Seasoning</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/herbs.svg" alt="Herbs"/>
                    <p>Fresh Herbs</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/almond.svg" alt="Dry Fruits"/>
                    <p>Dry Fruits</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/juice.svg" alt="Fruit Juices"/>
                    <p>Fruit Juices</p>
                </div>

                <div className={SearchStyles.Col}>
                    <img src="/images/takeaway.svg" alt="Tea and Coffee"/>
                    <p>Tea and Coffee</p>
                </div>
            </div>

            <div className={SearchStyles.Row3}>
            <div className={SearchStyles.Col}>
                    <img src="/images/soda.svg" alt="Energy and Soft Drinks"/>
                    <p>Energy and Soft Drinks</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/shampoo.svg" alt="Personal Care"/>
                    <p>Personal Care</p>
                </div>
                <div className={SearchStyles.Col}>
                    <img src="/images/babycare.svg" alt="Baby Care"/>
                    <p>Baby Care</p>
                </div>
            </div>


        </div>
        <Footer />
        </>
    )
}
