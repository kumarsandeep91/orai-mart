import StepStyles from '../styles/Step2.module.css'

export default function Step2() {
    return (
        <div className={StepStyles.StepSection}>
             <div className={StepStyles.textBox}>
                <div className={StepStyles.textContainer}>
                    <h1 className={StepStyles.MainText}>
                        <span className={StepStyles.numberBox}>2</span>
                        Schedule and pay
                    </h1>
                    <p className={StepStyles.SubText}>Schedule the delivery at your convenient timeand pay digitally</p>
                </div>
            </div>
            <div className={StepStyles.imageArea}>
                <img src="/images/step2.svg" className={StepStyles.Step2Img} alt="Step 2"/>
            </div>
        </div>
    )
}


