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
            <div className={styles.sectionAbout}>
                <div className={`${styles.uCenterText} ${styles.uMarginBottomBig}`}>
                    <h2 className={styles.headingSecondary}>
                        Exciting tours for adventurous people
                    </h2>
                </div>
                <div className={styles.row}>
                    <div className={styles.col_1_of_2}>
                        <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>You're going to fall in love with nature</h3>
                        <p className={styles.paragraph}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ex nostrum voluptatem nesciunt cumque? Rerum ullam recusandae officia, laudantium esse enim voluptatibus magni quam numquam voluptate molestiae explicabo quidem doloremque.
                        </p>
                        <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>Live adventures like you never have before</h3>
                        <p className={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>

                        <button  className={styles.btnText}>Learn more &rarr;</button>
                    </div>
                    <div className={styles.col_1_of_2}>
                        <div className={styles.composition}>
                            <img src="img/home/nat-1-large.jpg" alt="Photo1" className={`${styles.compositionPhoto} ${styles.compositionPhotoP1}`} />
                            <img src="img/home/nat-2-large.jpg" alt="Photo2" className={`${styles.compositionPhoto} ${styles.compositionPhotoP2}`} />
                            <img src="img/home/nat-3-large.jpg" alt="Photo3" className={`${styles.compositionPhoto} ${styles.compositionPhotoP3}`} />
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}