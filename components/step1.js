import StepStyles from '../styles/Step1.module.css'

export default function step1() {
    return (
        <div className={StepStyles.StepSection}>
            <div className={StepStyles.TextBox}>
                <p className={StepStyles.SubText}>Get delivered in 3 easy steps</p>
                <h1 className={StepStyles.MainText}>Here's how it works</h1>
            </div>
            <div className={StepStyles.ImgContainer}>
                <img src="/images/HowItWorks.png" alt="How it works step 1" />
            </div>
            <div className={StepStyles.TextBox}>
              
                <h1 className={StepStyles.MainImgText}>
                    <span className={StepStyles.numberBox}>1</span>
                    Pick up Phone and Dial
                </h1>
                <p className={StepStyles.SubImgText}>Set your delivery location, Choose your groceries from a wide range of 5000+ products</p>
            </div>
        </div>
    )
}
