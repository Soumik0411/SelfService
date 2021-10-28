import React from 'react'

export default function Card() {
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
                                <a className="card-link linkBtn" data-bs-toggle="modal" data-bs-target="#myModal2">
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
                                <a className="card-link linkBtn" data-bs-toggle="modal" data-bs-target="#myModal3">
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
                                <a className="card-link linkBtn" data-bs-toggle="modal" data-bs-target="#myModal4">
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
                                <a className="card-link linkBtn" data-bs-toggle="modal" data-bs-target="#myModal2">
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
                                <a className="card-link linkBtn" data-bs-toggle="modal" data-bs-target="#myModal2">
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
                                <a className="card-link linkBtn" data-bs-toggle="modal" data-bs-target="#myModal">
                                    VIEW DETAILS</a>
                            </div>
                            {/* <a href="#" class="card-link">Another link</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-content modalBody">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">TRANSACTION HISTORY</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">DATE</th>
                                        <th scope="col">RECEIPT no.</th>
                                        <th scope="col">AMOUNT</th>
                                        <th scope="col">PAYMENT STATUS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">15/10/2020</th>
                                        <td>201254</td>
                                        <td>Rs.5,210</td>
                                        <td>success</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">20/10/2020</th>
                                        <td>201548</td>
                                        <td>Rs.5,245</td>
                                        <td>success</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">17/12/2020</th>
                                        <td>203154</td>
                                        <td>Rs.5,287</td>
                                        <td>success</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">15/10/2020</th>
                                        <td>201254</td>
                                        <td>Rs.5,210</td>
                                        <td>success</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">20/10/2020</th>
                                        <td>201548</td>
                                        <td>Rs.5,245</td>
                                        <td>success</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">17/12/2020</th>
                                        <td>203154</td>
                                        <td>Rs.5,287</td>
                                        <td>success</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">15/10/2020</th>
                                        <td>201254</td>
                                        <td>Rs.5,210</td>
                                        <td>success</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">20/10/2020</th>
                                        <td>201548</td>
                                        <td>Rs.5,245</td>
                                        <td>success</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">17/12/2020</th>
                                        <td>203154</td>
                                        <td>Rs.5,287</td>
                                        <td>success</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btnStyle" data-bs-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal2">
                <div className="modal-dialog">
                    <div className="modal-content modalBody">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">CURRENT DUE</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Particulars</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Tuition Fees</th>
                                        <td>Rs.2,500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Library Fees</th>
                                        <td>Rs.1,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Laboratory Fees</th>
                                        <td>Rs.3,700</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total Amount</th>
                                        <td>Rs.7,900</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btnStyle" data-bs-dismiss="modal">PAY NOW</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal3">
                <div className="modal-dialog">
                    <div className="modal-content modalBody">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">PREVIOUS DUES</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Session</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">2017-2018</th>
                                        <td>Rs.8,500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2018-2019</th>
                                        <td>Rs.9,000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2019-2020</th>
                                        <td>Rs.7,500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2020-2021</th>
                                        <td>Rs.6,900</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total amount payble</th>
                                        <td>Rs.31,900</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btnStyle" data-bs-dismiss="modal">PAY NOW</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade" id="myModal4">
                <div className="modal-dialog">
                    <div className="modal-content modalBody">

                        {/* <!-- Modal Header --> */}
                        <div className="modal-header">
                            <h4 className="modal-title">PREVIOUS DUES</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        {/* <!-- Modal body --> */}
                        <div className="modal-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Session</th>
                                        <th scope="col">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">2021-2022</th>
                                        <td>Rs.8,500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2018-2019</th>
                                        <td>Rs.9,000</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2022-2023</th>
                                        <td>Rs.7,500</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2023-2024</th>
                                        <td>Rs.6,900</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Total amount payble</th>
                                        <td>Rs.31,900</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* <!-- Modal footer --> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btnStyle" data-bs-dismiss="modal">PAY NOW</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
