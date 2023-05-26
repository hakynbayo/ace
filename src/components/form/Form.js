import React from 'react';
import styles from './form.module.css'; 
import mc_symbol from "../../assets/mc_symbol.svg"
import dots from "../../assets/dots.svg"
import card from "../../assets/card.png"
import pen from "../../assets/pen.png"
import verifiedbadge from "../../assets/verified-badge.svg"

function Form() {
  return (
    <div className={`${styles.colSpan12} ${styles.mdColSpan8}`}>
      <div className={styles.form}>
        <header className={styles.formHeader}>
          <div className={styles.logo}>
            <span className={styles.logoCircle}></span>
            <img src={card} alt="card" />
            <h1>AceCoin<span className={styles.lean}>Pay</span></h1>
          </div>
          <div className={styles.timer}>
            <span className={styles.timerBox}>0</span>
            <span className={styles.timerBox}>1</span>
            <span className={styles.timerDivider}>:</span>
            <span className={styles.timerBox}>1</span>
            <span className={styles.timerBox}>9</span>
          </div>
        </header>
        <section className={styles.formBody}>
          <form action="">
            <div className={styles.inputGroup}>
              <div className={styles.header}>
                <div className={styles.description}>
                  <h2 className={styles.title}>card number</h2>
                  <p className={styles.desc}>Enter the 15-digit card number on the card</p>
                </div>
                <button className={styles.edit}>
                  <img src={pen} alt="pen" />
                  <span className={styles.btnDesc}>Edit</span>
                </button>
              </div>
              <div className={styles.main}>
                <img src={mc_symbol} alt="" className={styles.leadingIcon} />
                <input type="number" placeholder="2412   -   7512   -   3412   -   3456" />
                <img src={verifiedbadge} alt="" className={styles.trailingIcon} />
              </div>
            </div>
            <div className={`${styles.inputGroup} ${styles.col}`}>
              <div className={styles.header}>
                <div className={styles.description}>
                  <h2 className={styles.title}>CVV number</h2>
                  <p className={styles.desc}>Enter the 3 or 4 digit number on the card</p>
                </div>
              </div>
              <div className={styles.main}>
                <input type="number" placeholder="327" />
                <img src={dots} alt="" className={styles.trailingIcon} />
              </div>
            </div>
            <div className={`${styles.inputGroup} ${styles.col}`}>
              <div className={styles.header}>
                <div className={styles.description}>
                  <h2 className={styles.title}>expiry date</h2>
                  <p className={styles.desc}>Enter the expiration date of the card</p>
                </div>
              </div>
              <div className={styles.grp}>
                <div className={`${styles.main} ${styles.date}`}>
                  <input type="number" placeholder="09" />
                </div>
                <span className={styles.divider}>/</span>
                <div className={`${styles.main} ${styles.date}`}>
                  <input type="number" placeholder="22" />
                </div>
              </div>
            </div>
            <div className={`${styles.inputGroup} ${styles.col}`}>
              <div className={styles.header}>
                <div className={styles.description}>
                  <h2 className={styles.title}>password</h2>
                  <p className={styles.desc}>Enter your Dynamic password</p>
                </div>
              </div>
              <div className={styles.main}>
                <input type="password" placeholder="******" />
                <img src={dots} alt="" className={styles.trailingIcon} />
              </div>
            </div>
            <button type="submit" className={styles.btnSubmit}>pay now</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Form;
