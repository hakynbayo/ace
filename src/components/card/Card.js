import React from 'react';
import styles from './Card.module.css';

import chip from "../../assets/chip.png";
import wifi from "../../assets/wifi.png";
import apple from "../../assets/apple-13.svg";
import docket from "../../assets/diploma.png";
import mastercard from "../../assets/mastercard.svg";

function Card() {
  return (
    <div className={`${styles.colSpan12} ${styles.mdColSpan4}`}>
      <div className={styles.checkout}>
        <span className={styles.blu}></span>
        <div className={styles.creditCard}>
          <div className={styles.creditCardHead}>
            <img src={chip} alt="" className={styles.chip} />
            <img src={wifi} alt="" className={styles.wifi} />
          </div>
          <div className={styles.creditCardBody}>
            <span className={styles.holder}>jonathan micheal</span>
            <div className={styles.cardDigits}>
              <div className={styles.hiddenDigits}>
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
              </div>
              <span className={styles.visibleDigits}>3456</span>
            </div>
          </div>
          <div className={styles.creditCardFooter}>
            <span className={styles.expiry}>09/22</span>
            <img src={mastercard} alt="" className={styles.logo} />
          </div>
          <div className={styles.cardDesign}>
            <span className={styles.inner}></span>
          </div>
        </div>
        <div className={styles.checkoutDetails}>
          <div className={styles.purchaseData}>
            <div className={styles.data}>
              <span className={styles.title}>company</span>
              <span className={styles.value}>
                <img src={apple} alt="apple" />
                <span className={styles.innerText}>apple</span>
              </span>
            </div>
            <div className={styles.data}>
              <span className={styles.title}>order number</span>
              <span className={styles.value}>
                <span className={styles.innerText}>1266201</span>
              </span>
            </div>
            <div className={styles.data}>
              <span className={styles.title}>product</span>
              <span className={styles.value}>
                <span className={styles.innerText}>macbook air</span>
              </span>
            </div>
            <div className={styles.data}>
              <span className={styles.title}>VAT (20%)</span>
              <span className={styles.value}>
                <span className={styles.innerText}>$100.00</span>
              </span>
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </div>
          <div className={styles.purchaseTotal}>
            <div className={styles.total}>
              <span className={styles.desc}>You have to Pay</span>
              <div className={styles.tAmount}>
                <h1 className={styles.amount}>549<sub>.99</sub></h1>
                <span className={styles.symbol}>USD</span>
              </div>
            </div>
            <img src={docket} alt="docket" height="26" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
