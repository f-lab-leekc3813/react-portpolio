import styles from './Home.module.css';

export default function HomePageUI() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerLogoBox}>
                    <img src="img/home/logo-white.png" alt='Logo' className={styles.headerLogo} />
                </div>

                <div className={styles.headerTextBox} >
                    <h1 className={styles.headingPrimary}>
                        <span className={styles.headingPrimaryMain}>OutDoors</span>
                        <span className={styles.headingPrimarySub}>is where life happens</span>
                    </h1>

                    
                </div>
            </div>
        </div>
    )
}