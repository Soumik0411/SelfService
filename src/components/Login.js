import React, {useState, useFormInput} from "react"


export default function Login() {
    const [styling, setstyling] = useState({display: 'none'});
    const [stylingOt, setstylingOt] = useState({display: 'none'});
    const [stylingBtn, setstylingBtn] = useState({display: 'none'})
  //   const [text, settext] = useState('');
  //   String(text)
  // const textChange=()=>{
  //   if(text.length>0)
  //   {
  //     setstyling({display: 'block'});
  //   }
  //   }
  const handleOnClick=(e)=>{
    setstylingOt({display: 'block'});
    e.preventDefault();
  }
  return (
    <div>
      <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card">
          <div className="row no-gutters">
            <div className="col-md-6 div-img">
              <img src="Assets/img/6162-removebg-preview.png" className="login-card-img2" width="100%"/>
              {/* <img src="Assets/images/login.png" className="login-card-img"/> */}
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <div className="brand-wrapper">
                  <img src="Assets/img/logo.png" className="logo"/>
                </div>
               
                <form action="">
                  <div className="htmlForm-group">
                    <label htmlFor="text" className="sr-only"></label>
                    <input type="text" name="studentid" id="studentid" className="form-control" placeholder="Enter User ID" onChange={event => setstyling({display :'block'})}/>
                  </div>
                  <button className="btn btn-block login-btn mb-4" style={styling} onClick={handleOnClick}>Send OTP</button>
                  <div className="htmlForm-group mb-4">
                    <label htmlFor="Otp" className="sr-only">OTP</label>
                    <input type="text" name="otp" id="otp" className="form-control" placeholder="OTP" style={stylingOt} onChange={event => setstylingBtn({display :'block'})}/>
                  </div>
                  <input name="login" id="login" className="btn btn-block login-btn mb-4" type="button" value="Login" style={stylingBtn}/>
                </form>
                <br/>
                <a href="/" className="login-card-footer-text">Resend OTP</a>
                <nav className="login-card-footer-nav">
                  <a href="/">Terms of use.</a>
                  <a href="/">Privacy policy</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    </div>
  )
}
