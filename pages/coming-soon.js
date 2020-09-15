import Link from 'next/link'
import { Button } from '@material-ui/core';
import styles from '../styles/ComingSoon.module.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default function comingSoon() {
    return (
        <div className={styles.comingSoon}>
            <Navbar />
            <div className={styles.comingSoonBox} >
                <img src="/images/coming-soon.svg" alt="Coming Soon" />
                <div>
                    <Link href="/">
                        <a>
                        <Button variant="contained" color="primary" size="large">
                        Go to Home
                        </Button>
                        </a>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}
