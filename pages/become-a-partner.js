import { useStyletron } from "styletron-react";
import {  Button } from "@material-ui/core";
import Link from 'next/link'
import {useTheme } from "@material-ui/core/styles";
import BecomePartner from '../components/becomePartner'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
export default function becomeAPartner() {
    const [css] = useStyletron();
    const theme = useTheme();
    return (
        <>
            <Navbar />
            <div className={css({ minHeight:'90vh',display:'flex',alignItems:'center',marginTop:'50px',marginBottom:'0px',paddingBottom:'0px'})}>
                <BecomePartner  button={false}/>
              
            </div>
            <div style={{textAlign:'center'}}>
                <Link href="/">
                    <a>
                    <Button variant="contained" color="primary" size="large">
                    Go to Home
                    </Button>
                    </a>
                </Link>
            </div>
           
            <Footer />
        </>
    )
}
