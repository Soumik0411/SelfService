import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Card() {
    const history=useHistory();
    const viewCurrentDue=()=>{
        history.push("/current")
    }
    const viewPreviousDue=()=>{
        history.push("/previous")
    }
    const viewUpcomingDue=()=>{
        history.push("/upcoming")
    }
    const viewOnClick=()=>{
        history.push("/Transaction")
    }
    return (
        <>
            <div className="compcard container">
                <div className="m-15 row">
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img1" src="Assets/img/Current due.png" alt="" />
                                CURRENT DUES
                            </h6>
                            <p className="card-text">
                                ₹ 8008 </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn" onClick={viewCurrentDue}>
                                    VIEW DETAILS</a>
                                <a href="checkout.html" className="card-link linkBtn">PAY NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img2" src="Assets/img/Previous session .png" alt="" />
                                PREVIOUS DUES
                            </h6>
                            <p className="card-text">
                                ₹ 8008 </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn" onClick={viewPreviousDue}>
                                    VIEW DETAILS</a>
                                <a href="checkout.html" className="card-link linkBtn">PAY NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-15 row">
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img3" src="Assets/img/Upcoming due.png" alt="" />
                                UPCOMING DUES
                            </h6>
                            <p className="card-text">
                                ₹ 8008 </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn" onClick={viewUpcomingDue}>
                                    VIEW DETAILS</a>
                                <a href="checkout.html" className="card-link linkBtn">PAY NOW</a>
                            </div>
                        </div>
                    </div>
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img4" src="Assets/img/Total payment.png" alt="" />
                                TOTAL PAYMENT
                            </h6>
                            <p className="card-text">
                                ₹ 8008 </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn">
                                    VIEW DETAILS</a>
                            </div>
                            {/* <a href="#" class="card-link">Another link</a> */}
                        </div>
                    </div>
                </div>
                <div className="m-15 d-flex row">
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img5" src="Assets/img/Total commitment.png" alt="" />
                                TOTAL COMMITMENT
                            </h6>
                            <p className="card-text">
                                ₹ 8008 </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn">
                                    VIEW DETAILS</a>
                            </div>
                            {/* <a href="#" class="card-link">Another link</a> */}
                        </div>
                    </div>
                    <div className="card col" style={{ width: 18 + 'rem' }}>
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title" />
                            <h6 className="card-subtitle mb-2 text-muted">
                                <img className="logo img6" src="Assets/img/Transaction history.png" alt="" />
                                TRANSACTION HISTORY
                            </h6>
                            <p className="card-text">
                                <em>Check Your Transactions</em>
                            </p>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-15">
                                <a className="card-link linkBtn" onClick={viewOnClick}>
                                    VIEW DETAILS</a>
                            </div>
                            {/* <a href="#" class="card-link">Another link</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
