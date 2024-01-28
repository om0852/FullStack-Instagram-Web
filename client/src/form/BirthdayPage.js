import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/exit";
import "./form.css";
function BirthdayPage() {
	const {Birthdate,setBirthdate} = useGlobalContext();
    let i=0
  const [year,setyear] = useState("");
  const [day,setday] = useState("");
  const [months,setmonth] = useState("");
  const history = useNavigate();
  const handledata = (e)=>{
	if(year && day&& months){

		setBirthdate(`${day}-${months}-${year}`);
		history("/public-private")
	}else{
alert("select all flieds")
	}
	
  }
  return (
    <>
      <div className="container-signup">
        <div className="birthday-section">
            <div className="signup-border">
          <div className="birthday-img"></div>
          <h3>Add Your Birthday</h3>
          <h4>This won't be part your public profile</h4>
          <h4>why i need to provide my birthday</h4>
          <div className="birthdata">
            <form class="selectdate">
            <select id="form_dob_month" value={months} name="dob_month" onChange={(e)=>{setmonth(e.target.value);}}>
    	<option value="1">January</option>
    	<option value="2">Febuary</option>
    	<option value="3">March</option>
    	<option value="4">April</option>
    	<option value="5">May</option>
    	<option value="6">June</option>
    	<option value="7">July</option>
    	<option value="8">August</option>
    	<option value="9">September</option>
    	<option value="10">October</option>
    	<option value="11">November</option>
    	<option value="12">December</option>
    </select>
     <select id="form_dob_day" name="dob_day" value={day} onChange={(e)=>{setday(e.target.value)}}>
    	<option value="-">-</option>
    	<option value="1">1</option>
    	<option value="2">2</option>
    	<option value="3">3</option>
    	<option value="4">4</option>
    	<option value="5">5</option>
    	<option value="6">6</option>
    	<option value="7">7</option>
    	<option value="8">8</option>
    	<option value="9">9</option>
    	<option value="10">10</option>
    	<option value="11">11</option>
    	<option value="12">12</option>
    	<option value="13">13</option>
    	<option value="14">14</option>
    	<option value="15">15</option>
    	<option value="16">16</option>
    	<option value="17">17</option>
    	<option value="18">18</option>
    	<option value="19">19</option>
    	<option value="20">20</option>
    	<option value="21">21</option>
    	<option value="22">22</option>
    	<option value="23">23</option>
    	<option value="24">24</option>
    	<option value="25">25</option>
    	<option value="26">26</option>
    	<option value="27">27</option>
    	<option value="28">28</option>
    	<option value="29">29</option>
    	<option value="30">30</option>
    	<option value="31">31</option>
    </select>
     <select id="form_dob_year" name="dob_year" value={year} onChange={(e)=>{setyear(e.target.value)}}>
    	<option value="-">-</option>
    	<option value="2011">2011</option>
    	<option value="2010">2010</option>
    	<option value="2009">2009</option>
    	<option value="2008">2008</option>
    	<option value="2007">2007</option>
    	<option value="2006">2006</option>
    	<option value="2005">2005</option>
    	<option value="2004">2004</option>
    	<option value="2003">2003</option>
    	<option value="2002">2002</option>
    	<option value="2001">2001</option>
    	<option value="2000">2000</option>
    	<option value="1999">1999</option>
    	<option value="1998">1998</option>
    	<option value="1997">1997</option>
    	<option value="1996">1996</option>
    	<option value="1995">1995</option>
    	<option value="1994">1994</option>
    	<option value="1993">1993</option>
    	<option value="1992">1992</option>
    	<option value="1991">1991</option>
    	<option value="1990">1990</option>
    	<option value="1989">1989</option>
    	<option value="1988">1988</option>
    	<option value="1987">1987</option>
    	<option value="1986">1986</option>
    	<option value="1985">1985</option>
    	<option value="1984">1984</option>
    	<option value="1983">1983</option>
    	<option value="1982">1982</option>
    	<option value="1981">1981</option>
    	<option value="1980">1980</option>
    	<option value="1979">1979</option>
    	<option value="1978">1978</option>
    	<option value="1977">1977</option>
    	<option value="1976">1976</option>
    	<option value="1975">1975</option>
    	<option value="1974">1974</option>
    	<option value="1973">1973</option>
    	<option value="1972">1972</option>
    	<option value="1971">1971</option>
    	<option value="1970">1970</option>
    	<option value="1969">1969</option>
    	<option value="1968">1968</option>
    	<option value="1967">1967</option>
    	<option value="1966">1966</option>
    	<option value="1965">1965</option>
    	<option value="1964">1964</option>
    	<option value="1963">1963</option>
    	<option value="1962">1962</option>
    	<option value="1961">1961</option>
    	<option value="1960">1960</option>
    	<option value="1959">1959</option>
    </select>              <br />
            </form>
            
          </div>
          <h4>you need to enter date you were born</h4>
          <h4 className="birthday-detail">use your own birthday even if this account is for a business,a pet or something else</h4>
          <button onClick={handledata}> Next</button><br></br>
          <a className="go-back" href="/signup" >Go Back</a>
          </div>
          <div className="login-signup-form">
            <p>Don't have an account?  <a href="/">Sign up</a></p>
          </div>
          <div className="login-download">
            Get the App
            <div className="download_btn">
            <button className="google-btn">google</button>
            <button className="microsoft-btn">microsoft</button>
            </div>
                
          {/* </div> */}
          </div>
          <div className="lan-menu">
            <div style={{textAlign:"center"}}>
              Meta
About
Blog
Jobs
Help
API
Privacy
Terms
Top Accounts
Locations
Instagram Lite
Contact Uploading & Non-Users
Meta Verified
English

          </div>
          <div style={{textAlign:"center",margin:"2vh 0"}}>         
English © 2023 Instagram from Meta
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default BirthdayPage;
