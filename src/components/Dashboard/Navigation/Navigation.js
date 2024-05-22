import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="maincontainer">
        <div className="leftcontainer">
          <div className="prfset">
            <div className="profile-icon">
              <img src="../../../../images/Profile.png" />
            </div>
            <div className="notification-icon">
              <img src="../../../../images/Notifications.png" />
            </div>
          </div>
          <div className="name-mail">
            <h1 className="name">Samantha</h1>
            <p style={{ color: "silver" }} className="mail">
              samantha@email.com
            </p>
          </div>
          <br />
          <br />   <br />
          <br />
          <br />
          <br />
          <br />
          <br />
       
          <div className="navlinks-style">
            <h1  className="nav-links">
              Dashboard
            </h1>
            <h1 className="nav-links">Expenses</h1>
            <h1  className="nav-links"  >
              Wallets
            </h1>
            <h1  className="nav-links">
              Summary
            </h1>
            <h1 className="nav-links">
              Accounts
            </h1>
            <h1  className="nav-links"> 
              Settings
            </h1>
          </div>
        </div>
        <div className="rightcontainer">
          <div className="innerleft">
            <div className="Expensheading-img">
              <div className="heading">
                <h1 style={{ fontSize: "46px" }}>Expenses</h1>
                <p className="headpara">01 - 25 March, 2020</p>
              </div>
              <div className="headingicons">
                <img src="../../../../images/Group 3.png" />
                <img src="../../../../images/Group 3 Copy 6.png" />
                <img src="../../../../images/Group 3 Copy 2.png" />
                <img src="../../../../images/Group 3 Copy 7.png" />
              </div>
            </div>
            <br />
            <br />
            <img className="statimg" src="../../../../images/Stats.png" />
            <br />
            <div className="Todaystyle">
              <div>
                <h1 style={{ fontSize: "24px" }}>Today</h1>
              </div>

              <div className="imgtoday">
                <img src="../../../../images/Group 3 (2).png" />
              </div>
            </div>
            <img src="../../../../images/Path.png" />
            <br /> <br />
            <div className="groceryparent">
              <div className="groceryleft">
                <img
                  style={{ width: "49px", height: "48px" }}
                  src="../../../../images/Group 4.png"
                />
                <div className="grocery-heading-para">
                  <div>
                    {" "}
                    <h1 style={{ fontSize: "16px" }}>Grocery</h1>{" "}
                  </div>
                  <div>
                    {" "}
                    <p style={{ fontSize: "14px" }}>
                      5:12 pm • Belanja di pasar
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <h1 style={{ fontSize: "16px" }}>-326.800</h1>
              </div>
            </div>
            <br />
            <div className="groceryparent">
              <div className="groceryleft">
                <img
                  style={{ width: "49px", height: "48px" }}
                  src="../../../../images/Group 4 (1).png"
                />
                <div className="grocery-heading-para">
                  <div>
                    {" "}
                    <h1 style={{ fontSize: "16px" }}>Grocery</h1>{" "}
                  </div>
                  <div>
                    {" "}
                    <p style={{ fontSize: "14px" }}>
                      5:12 pm • Belanja di pasar
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <h1 style={{ fontSize: "16px" }}>-15.000</h1>
              </div>
            </div>
            <br />
            <div className="groceryparent">
              <div className="groceryleft">
                <img
                  style={{ width: "49px", height: "48px" }}
                  src="../../../../images/Group 4 (2).png"
                />
                <div className="grocery-heading-para">
                  <div>
                    {" "}
                    <h1 style={{ fontSize: "16px" }}>Grocery</h1>{" "}
                  </div>
                  <div>
                    {" "}
                    <p style={{ fontSize: "14px" }}>
                      5:12 pm • Belanja di pasar
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <h1 style={{ fontSize: "16px" }}>-15.5430</h1>
              </div>
            </div>
            <br />
            <div className="Todaystyle1">
              <div>
                <h1 style={{ fontSize: "24px" }}>Tomorrow</h1>
              </div>
 
              <div className="imgtoday">
                <img src="../../../../images/Group 3 (2).png" />
              </div>
            </div>
            <img src="../../../../images/Path.png" />
            <br />
            <br />
            <div className="groceryparent">
              <div className="groceryleft">
                <img
                  style={{ width: "49px", height: "48px" }}
                  src="../../../../images/Group 4 (3).png"
                />
                <div className="grocery-heading-para">
                  <div>
                    {" "}
                    <h1 style={{ fontSize: "16px" }}>Grocery</h1>{" "}
                  </div>
                  <div>
                    {" "}
                    <p style={{ fontSize: "14px" }}>
                      5:12 pm • Belanja di pasar
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <h1 style={{ fontSize: "16px" }}>-136.654</h1>
              </div>
            </div>
            <br />
            <div className="groceryparent">
              <div className="groceryleft">
                <img
                  style={{ width: "49px", height: "48px" }}
                  src="../../../../images/Group 4 (4).png"
                />
                <div className="grocery-heading-para">
                  <div>
                    {" "}
                    <h1 style={{ fontSize: "16px" }}>Grocery</h1>{" "}
                  </div>
                  <div>
                    {" "}
                    <p style={{ fontSize: "14px" }}>
                      5:12 pm • Belanja di pasar
                    </p>{" "}
                  </div>
                </div>
              </div>
              <div>
                {" "}
                <h1 style={{ fontSize: "16px" }}>-786.900</h1>
              </div>
            </div>
          </div>

          <div className="innerrightmain">
            <div className="innerright">
              <p>Where your money go?</p>

              <div className="forgapboxes">
                <div className="box1">
                  <div className="parentfood">
                    <h2>Food and Drinks</h2>
                    <p style={{ fontSize: "12px" }}>872.400</p>
                  </div>
                  <div className="barsimg">
                    <img
                      style={{ width: "72px", height: "4px" }}
                      src="../../../../images/Rectangle Copy.png"
                    />
                    <img
                      style={{ width: "185px", height: "4px" }}
                      src="../../../../images/Rectangle (1).png"
                    />
                  </div>
                </div>
                <div className="box1">
                  <div className="parentfood">
                    <h2>Shopping</h2>
                    <p style={{ fontSize: "12px" }}>548.400</p>
                  </div>
                  <div className="barsimg">
                    <img
                      style={{ width: "162px", height: "4px" }}
                      src="../../../../images/Rectangle Copy.png"
                    />
                    <img
                      style={{ width: "95px", height: "4px" }}
                      src="../../../../images/Rectangle (1).png"
                    />
                  </div>
                </div>
                <div className="box1">
                  <div className="parentfood">
                    <h2>Houses</h2>
                    <p style={{ fontSize: "12px" }}>872.400</p>
                  </div>
                  <div className="barsimg">
                    <img
                      style={{ width: "132px", height: "4px" }}
                      src="../../../../images/Rectangle Copy.png"
                    />
                    <img
                      style={{ width: "115px", height: "4px" }}
                      src="../../../../images/Rectangle (1).png"
                    />
                  </div>
                </div>
                <div className="box1">
                  <div className="parentfood">
                    <h2>Transportation</h2>
                    <p style={{ fontSize: "12px" }}>262.400</p>
                  </div>
                  <div className="barsimg">
                    <img
                      style={{ width: "92px", height: "4px" }}
                      src="../../../../images/Rectangle Copy.png"
                    />
                    <img
                      style={{ width: "165px", height: "4px" }}
                      src="../../../../images/Rectangle (1).png"
                    />
                  </div>
                </div>
                <div className="box1">
                  <div className="parentfood">
                    <h2>Vehicle</h2>
                    <p style={{ fontSize: "12px" }}>982.400</p>
                  </div>
                  <div className="barsimg">
                    <img
                      style={{ width: "72px", height: "4px" }}
                      src="../../../../images/Rectangle Copy.png"
                    />
                    <img
                      style={{ width: "185px", height: "4px" }}
                      src="../../../../images/Rectangle (1).png"
                    />
                  </div>
                </div>
                <br />
                <br />
                <div className="lastbox">
                  <img src="../../../../images/Box Tips (1).png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
