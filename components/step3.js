import StepStyles from "../styles/Step3.module.css";

export default function Step3() {
    return (
        <div className={StepStyles.StepSection}>
            <div className={StepStyles.imageArea}>
                <img src="/images/step3.svg" className={StepStyles.Step3Img} alt="Step 3"/>
            </div>
            <div className={StepStyles.textBox}>
                <div className={StepStyles.textContainer}>
                    <h1 className={StepStyles.MainText}>
                        <span className={StepStyles.numberBox}>3</span>
                        It's delivered and Rate us
                    </h1>
                    <p className={StepStyles.SubText}>Collect groceries at your doorstep and tell us aboutour service</p>
                </div>
            </div>
            
        </div>
    )
}

