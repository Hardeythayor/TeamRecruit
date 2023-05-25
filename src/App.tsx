import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    cvv: '',
    expiryYear: '',
    expiryMonth: '',
    password: ''
  })

  const [showSubmit, setShowSubmit] = useState(false)

  const handleChange = (e:any) => {
    const {name, value} = e.target

    setFormData(prevFormData => (
      {...prevFormData, [name] : value}
    ))
  }

  const handleSubmit =async (e:any) => {
    e.preventDefault()
    await setShowSubmit(true)
  }

  const closeShowSubmit = () => {
    setTimeout(() => {
      setShowSubmit(false)
    }, 5000);
  }

  useEffect(() => {
    closeShowSubmit()
  }, [showSubmit])

  return (
    <div className="card page-wrapper">
      <div className="card-body">
        {showSubmit && <div className="alert alert-info" >
          <h6><b>Form submitted successfully</b></h6>
          <ul className="pl-5" style={{fontSize: '14px'}}>
            <li>Card Number: <b>{formData.cardNumber}</b></li>
            <li>CVV: <b>{formData.cvv}</b></li>
            <li>Expiry Date: <b>{formData.expiryMonth} / {formData.expiryYear}</b></li>
            <li>Password: <b>{formData.password}</b></li>
          </ul>
        </div>}
        <div className="checkout_wrapper px-0 p-md-5">
          <div className="row">
            <div className="col-md-8">
              <div className="checkout_nav">
                <div className="brand_img">
                  <div className="img_wrap">
                    <img src="/assets/images/brandlogo.png" alt="" />
                  </div>
                  <h4 className="text-dark m-0">
                    AceCoin<span className="text-muted">Pay</span>
                  </h4>
                </div>
                <div className="nav_timer">
                  <span>0</span>
                  <span>1</span>
                  <i>:</i>
                  <span>1</span>
                  <span>9</span>
                </div>
              </div>
              <div className="checkout_body mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="checkout_head mb-md-4">
                    <div className="card_number">
                      <h3 className="m-0">Card Number</h3>
                      <p className="m-0 mt-2">
                        Enter the 16-digit card number on the card
                      </p>
                    </div>
                    <div className="edit_wrap">
                      <button className="btn">
                        <span className="mr-2">
                          <i className="bi bi-pen-fill"></i>
                        </span>
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                  <div className="digits_input_wrap mt-2 mt-md-4">
                    <img src="/assets/images/mastercard_logo.png" alt="" />
                    <input
                      type="number"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="2412  -  7512  -  3412  -  3456"
                      maxLength={16}
                      required
                    />
                    <i className="bi bi-patch-check-fill"></i>
                  </div>
                  <div className="cvvNo_wrap row mt-4 mt-md-5">
                    <div className="col-sm-6">
                      <div className="cvv">
                        <h3 className="m-0">CVV Number</h3>
                        <p className="m-0 mt-2 mb-2 mb-md-0">
                          Enter the 3 or 4 digit number on the card
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cvv_input">
                        <input 
                          type="number"
                          name="cvv"
                          value={formData.cvv} 
                          onChange={handleChange}
                          placeholder="327" 
                          required
                        />
                        <i className="bi bi-grid-3x3-gap-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="cvvNo_wrap row mt-4 mt-md-5">
                    <div className="col-sm-6">
                      <div className="cvv">
                        <h3 className="m-0">Expiry Date</h3>
                        <p className="m-0 mt-2 mb-2 mb-md-0">
                          Enter the expiration date of the card
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cvv_input pair">
                        <input 
                          type="number" 
                          name="expiryMonth"
                          value={formData.expiryMonth}
                          onChange={handleChange}
                          placeholder="09" 
                          required
                        />
                        <span>/</span>
                        <input 
                          type="number" 
                          name="expiryYear"
                          value={formData.expiryYear}
                          onChange={handleChange}
                          placeholder="22" 
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="cvvNo_wrap row mt-4 mt-md-5">
                    <div className="col-sm-6">
                      <div className="cvv">
                        <h3 className="m-0">Password</h3>
                        <p className="m-0 mt-2 mb-2 mb-md-0">
                          Enter your dynamic password
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="cvv_input">
                        <input
                          className="text-left pl-4"
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          placeholder="Password"
                          required
                        />
                        <i className="bi bi-grid-3x3-gap-fill"></i>
                      </div>
                    </div>
                  </div>
                  <div className="pay_button mt-4 mt-md-5">
                    <button type="submit">Pay Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-4">
              <div className="receipt_">
                <div className="receipt_container">
                  <div className="receipt_wrap">
                    <div className="receipt_details">
                      <img className="card_img" src="/assets/images/card.png" alt="" />
                      {/* style="justify-content: space-between; align-items: center;" */}
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                          <p className="m-0 mb-3">Company</p>
                        </div>
                        <div className="responses">
                          <p className="m-0 mb-3 d-flex">
                            <span className="apple-logo mr-2"><i className="mdi mdi-apple"></i></span>
                            <span>Apple</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                          <p className="m-0 mb-3">Order Number</p>
                        </div>
                        <div className="responses">
                          <p className="m-0 mb-3">
                            <span>1266201</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                          <p className="m-0 mb-3">Product</p>
                        </div>
                        <div className="responses">
                          <p className="m-0 mb-3">
                            <span>Macbook Air</span>
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="">
                          <p className="m-0 mb-3">VAT(20%)</p>
                        </div>
                        <div className="responses">
                          <p className="m-0 mb-3">
                            <span>$100.00</span>
                          </p>
                        </div>
                      </div>

                      <div className="receipt_footer">
                        <div className="footer_wrap">
                          <div>
                            <p className="m-0 mb-1">You have to Pay</p>
                            <h3 className="m-0">
                              549<small>.99</small>{" "}
                              <small className="font-weight-normal text-muted">
                                USD
                              </small>
                            </h3>
                          </div>
                          <div>
                            <button className="receipt_icon">
                              <i className="mdi mdi-script-text-outline"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
