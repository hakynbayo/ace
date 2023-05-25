import '../form/form.css';
import React from 'react';
import mc_symbol from "../../assets/mc_symbol.svg"
import dots from "../../assets/dots.svg"
import verifiedbadge from "../../assets/verified-badge.svg"
// import Card from '../main/Card';

function Form() {
  return (
    
    <div className="col-span-12 md:col-span-8">
      <div className="form">
        <header className="form-header">
          <div className="logo">
            <span className="logo-circle"></span>
            <h1>AceCoin<span className="lean">Pay</span></h1>
          </div>
          <div className="timer">
            <span className="timer-box">0</span>
            <span className="timer-box">1</span>
            <span className="timer-divider">:</span>
            <span className="timer-box">1</span>
            <span className="timer-box">9</span>
          </div>
        </header>
        <section className="form-body">
          <form action="">
            <div className="input-group">
              <div className="header">
                <div className="description">
                  <h2 className="title">card number</h2>
                  <p className="desc">Enter the 15-digit card number on the card</p>
                </div>
                <button className="edit">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                    <g>
                      <g>
                        <path d="M311.18,78.008L32.23,356.958L0.613,485.716c-1.771,7.209,0.355,14.818,5.604,20.067
                          c5.266,5.266,12.88,7.368,20.067,5.604l128.759-31.617l278.95-278.95L311.18,78.008z M40.877,471.123l10.871-44.271l33.4,33.4
                          L40.877,471.123z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M502.598,86.818L425.182,9.402c-12.536-12.536-32.86-12.536-45.396,0l-30.825,30.825l122.812,122.812l30.825-30.825
                          C515.134,119.679,515.134,99.354,502.598,86.818z" />
                      </g>
                    </g>
                  </svg>
                  <span className="btn-desc">Edit</span>
                </button>
              </div>
              <div className="main">
                <img src={mc_symbol} alt="" className="leading-icon" />
                <input type="number" placeholder="2412   -   7512   -   3412   -   3456" />
                <img src={verifiedbadge} alt="" className="trailing-icon" />
              </div>
            </div>
            <div className="input-group __col">
              <div className="header">
                <div className="description">
                  <h2 className="title">CVV number</h2>
                  <p className="desc">Enter the 3 or 4 digit number on the card</p>
                </div>
              </div>
              <div className="main">
                <input type="number" placeholder="327" />
                <img src={dots} alt="" className="trailing-icon" />
              </div>
            </div>
            <div className="input-group __col">
              <div className="header">
                <div className="description">
                  <h2 className="title">expiry date</h2>
                  <p className="desc">Enter the expiration date of the card</p>
                </div>
              </div>
              <div className="grp">
                <div className="main __date">
                  <input type="number" placeholder="09" />
                </div>
                <span className="divider">/</span>
                <div className="main __date">
                  <input type="number" placeholder="22" />
                </div>
              </div>
            </div>
            <div className="input-group __col">
              <div className="header">
                <div className="description">
                  <h2 className="title">password</h2>
                  <p className="desc">Enter your Dynamic password</p>
                </div>
              </div>
              <div className="main">
                <input type="password" placeholder="******" />
                <img src={dots} alt="" className="trailing-icon" />
              </div>
            </div>
            <button type="submit" className="btn-submit">pay now</button>
          </form>
        </section>

        {/* <Card /> */}
      </div>
    </div>

  );
}

export default Form;
