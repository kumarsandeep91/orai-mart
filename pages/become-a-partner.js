import { useStyletron } from "styletron-react";
import {  Typography } from "@material-ui/core";
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
            <div className={css({ minHeight:'90vh',display:'flex',alignItems:'center',marginTop:'50px'})}>
                <BecomePartner  button={false}/>
            </div>
            <Footer />
        </>
    )
}
