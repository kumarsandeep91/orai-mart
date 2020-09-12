import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default function comingSoon() {
    return (
        <div style={{minHeight:'100vh'}}>
            <Navbar />
            <div style={{height:'80vh',textAlign:'center',paddingTop:'50px'}}>
                <img src="/images/coming-soon.svg" alt="Coming Soon" style={{maxWidth:'600px'}}/>
            </div>
            <Footer />
        </div>
    )
}
