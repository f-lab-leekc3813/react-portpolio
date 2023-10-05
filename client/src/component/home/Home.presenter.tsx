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
            <div className={styles.sectionFeatures}>
                <div className={styles.sectionRow}>
                    <div className={styles.col_1_of_4}>
                        <div className={styles.featureBox}>
                            <i className={styles.featureBoxIcon}></i>
                            <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>Explore the world</h3>
                            <p className={styles.featureBoxText}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ex nostrum voluptatem nesciunt cumque?
                            </p>
                        </div>
                    </div>
                    <div className={styles.col_1_of_4}>
                        <div className={styles.featureBox}>
                            <i className={styles.featureBoxIcon}></i>
                            <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>Explore the world</h3>
                            <p className={styles.featureBoxText}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ex nostrum voluptatem nesciunt cumque?
                            </p>
                        </div>
                    </div>
                    <div className={styles.col_1_of_4}>
                        <div className={styles.featureBox}>
                            <i className={styles.featureBoxIcon}></i>
                            <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>Explore the world</h3>
                            <p className={styles.featureBoxText}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ex nostrum voluptatem nesciunt cumque?
                            </p>
                        </div>
                    </div>
                    <div className={styles.col_1_of_4}>
                        <div className={styles.featureBox}>
                            <i className={styles.featureBoxIcon}></i>
                            <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>Explore the world</h3>
                            <p className={styles.featureBoxText}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam ex nostrum voluptatem nesciunt cumque?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sectionTours}>
                <div className={`${styles.uCenterText} ${styles.uMarginBottomBig}`}>
                    <h2 className={styles.headingSecondary}>
                        Most popular tours
                    </h2>
                </div>
                <div className={styles.toursRow}>
                    <div className={styles.card}>
                        <div className={`${styles.cardSideFront} ${styles.cardSide}`}>
                            <div className={`${styles.cardPicture} ${styles.cardPicture1}`}>
                                        &nbsp;
                            </div>
                            <h4 className={styles.cardHeading}>
                                <span className={`${styles.cardHeadingSpan} ${styles.cardHeadingSpan1}`}>
                                    The Sea Explorer
                                </span>
                            </h4>
                            <div className={styles.cardDetails}>
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.cardSide} ${styles.cardSideBack} ${styles.cardSideBack1}`}>
                            <div className={styles.cardCta}>
                                <div className={styles.cardPriceBox}>
                                    <p className={styles.cardPriceOnly}>Only</p>
                                    <p className={styles.cardPriceValue}>$297</p>
                                </div>
                                <a href="#popup" className={`${styles.btn} ${styles.btnWhite}`}>Book now!</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles.cardSideFront} ${styles.cardSide}`}>
                            <div className={`${styles.cardPicture} ${styles.cardPicture2}`}>
                                        &nbsp;
                            </div>
                            <h4 className={styles.cardHeading}>
                                <span className={`${styles.cardHeadingSpan} ${styles.cardHeadingSpan2}`}>
                                    The Sea Explorer
                                </span>
                            </h4>
                            <div className={styles.cardDetails}>
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.cardSide} ${styles.cardSideBack} ${styles.cardSideBack2}`}>
                            <div className={styles.cardCta}>
                                <div className={styles.cardPriceBox}>
                                    <p className={styles.cardPriceOnly}>Only</p>
                                    <p className={styles.cardPriceValue}>$297</p>
                                </div>
                                <a href="#popup" className={`${styles.btn} ${styles.btnWhite}`}>Book now!</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles.cardSideFront} ${styles.cardSide}`}>
                            <div className={`${styles.cardPicture} ${styles.cardPicture3}`}>
                                        &nbsp;
                            </div>
                            <h4 className={styles.cardHeading}>
                                <span className={`${styles.cardHeadingSpan} ${styles.cardHeadingSpan3}`}>
                                    The Sea Explorer
                                </span>
                            </h4>
                            <div className={styles.cardDetails}>
                                <ul>
                                    <li>3 day tours</li>
                                    <li>Up to 30 people</li>
                                    <li>2 tour guides</li>
                                    <li>Sleep in cozy hotels</li>
                                    <li>Difficulty: easy</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.cardSide} ${styles.cardSideBack} ${styles.cardSideBack3}`}>
                            <div className={styles.cardCta}>
                                <div className={styles.cardPriceBox}>
                                    <p className={styles.cardPriceOnly}>Only</p>
                                    <p className={styles.cardPriceValue}>$297</p>
                                </div>
                                <a href="#popup" className={`${styles.btn} ${styles.btnWhite}`}>Book now!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}