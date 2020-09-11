import ChooseStyles from "../styles/WhyChooseUs.module.css";

export default function WhyChooseUs() {
    return (
        <div className={ChooseStyles.SearchSection}>
            <div className={ChooseStyles.TextBox}>
                <p className={ChooseStyles.SubText}>Why Choose Fresh Grocery</p>
                <h1 className={ChooseStyles.MainText}>Because we are in it together</h1>
            </div>
            <div className={ChooseStyles.Row}>
                <div className={ChooseStyles.Col}>
                    <img src="/images/nominorder.svg" alt="No Minimum Order"/>
                    <h1>No Minimum Order</h1>
                    <p>No order value restrictions, Order for yourself or your group</p>
                </div>
                <div className={ChooseStyles.Col}>
                    <img src="/images/livetrack.svg" alt="Live Order Tracking"/>
                    <h1>Live Order Tracking</h1>
                    <p>Track your order anytime from the store to your doorstep</p>
                </div>
                <div className={ChooseStyles.Col}>
                    <img src="/images/delivery.svg" alt="24 x 7 delivery"/>
                    <h1>24 x 7 delivery</h1>
                    <p>Order anytime, anywhere. Wewill get you delivered</p>
                </div>
            </div>
        </div>
    )
}
