import React from "react";

export const Nav = ({user}:{user?:any}) => {


    const {lastName} = user || {}
    return (
    <header>
      <nav id="topbar">
        <div className="leftNav">
          <a href="#">
            <img alt="static" src="/assets/logo.svg" />
          </a>
        </div>

        {/* <div className="middleNav">
                <p className="searchBar">Search for anything</p>
                <button className='alignC fullH'>
                    <img alt='static' src="/assets/Vector (2).svg"/>
                </button>

            </div> */}

        <div className="rightNav gap2">
          <div>
            <a href="#">
              <img
                alt="static"
                height={"50px"}
                className="bell"
                src={"/assets/bell.svg"}
              />
            </a>
          </div>

          <div>
            <a href="#">
              <img
                alt="static"
                className="profileImage"
                src="/assets/image 4.svg"
              />
            </a>
          </div>

          <div className="profileName alignC gap1">
            <a href="#">{lastName}</a>
            <img
              alt="static"
              className="tinyIcon"
              src="/assets/Vector (4).svg"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export const SideBar = () => {
  return (
    <div className="sidebarContainer">
      <div className="leftbar">
        <div className="userDashboard">
          <a href="#">
            <img alt="static" className="icons" src="/assets/home 1.svg" />
            <p className="dashText">Dashboard</p>
          </a>
        </div>

        <h1 className="customers">CUSTOMERS</h1>

        <div className="user">
          <div className="userDashboard">
            <a href="#">
              <img
                alt="static"
                className="icons"
                src="/assets/user-friends 1.svg"
              />
              <p className="dashText">Users</p>
            </a>
          </div>
        </div>

        <div className="userDashboard">
          <a href="#">
            <img alt="static" className="icons" src="/assets/users 1.svg" />
            <p className="dashText">Guarantors</p>
          </a>
        </div>

        <div className="userDashboard">
          <a href="#">
            <img alt="static" className="icons" src="/assets/sack 1.svg" />
            <p className="Loans">Loans</p>
          </a>
        </div>

        <h1 className="customers">BUSINESSES</h1>

        <div className="userDashboard">
          <a href="#">
            <img alt="static" className="icons" src="/assets/briefcase 1.svg" />
            <p className="dashText">Organization</p>
          </a>
        </div>

        <div className="userDashboard">
          <a href="#">
            <img
              alt="static"
              className="icons"
              src="/assets/Loan Requests.svg"
            />
            <p className="dashText">Loan Products</p>
          </a>
        </div>

        <div className="userDashboard">
          <a href="#">
            <img alt="static" className="icons" src="/assets/icon.svg" />
            <p className="dashText">Transactions</p>
          </a>
        </div>

        <div className="logout">
            <div className="userDashboard">
            <a href="#">
                <img alt="static" className="icons" src="/assets/sign-out 1.svg" />
                <p className="dashText">Logout</p>
            </a>
            </div>
        </div>



      </div>

    </div>
  );
};

export const UserInfo = ({user}:{user:any}) => {

  const {
    personal,
    employment,
    guarantor
  } = user || {}
  
  const {
    firstName,
    lastName,
    userId,
    tier,
    accountBalance,
  } = personal || {}

  
  console.log('personal',personal)

  return (
    <div className="userContent">
      <div className="topContent">
        <div className="backDetails">
          <a href="#">
            <img alt="static" src="/assets/Vector (7).svg" />
            <p>Back to Users</p>
          </a>
        </div>

        <div className="userDetails">
          <h1>User Details</h1>
          {/* <div className="buttonContent">
            <a href="#">
              <button className="blacklist">BLACKLIST USER</button>
            </a>

            <a href="#">
              <button className="activate">ACTIVATE USER</button>
            </a>
          </div> */}
        </div>

        <div className="userProfile">
          <div className="username colMobile">
            <div className="flex gap1Res">
              <img alt="static" src="/assets/avatar.svg" />

              <div className="firstName alignC ">
                <h1>{firstName} {lastName}</h1>
                <p>{userId}</p>
              </div>
            </div>

            <div className="userTier">
              <p>User’s Tier</p>
              <img alt="static" src="/assets/Vector (8).svg" />
              <img alt="static" src="/assets/Vector (9).svg" />
              <img alt="static" src="/assets/Vector (9).svg" />
            </div>

            <div className="firstName">
              <h1>₦{accountBalance}</h1>
              <p>{personal?.accountNo}/{personal?.bank} Bank</p>
            </div>
          </div>
        </div>

        <div className="userInfo">
          <div className="detailedInfo">
            <div className="personalInfo">
              <h1>Personal Information</h1>
            </div>

            <div className="data">
              <div className="infoContainer">
                <p>Phone Number</p>
                <h1>07060780922</h1>
                <p>Marital status</p>
                <h1>Single</h1>
              </div>

              <div className="infoContainer">
                <p>Email Address</p>
                <h1>grace@gmail.com</h1>
                <p>Children</p>
                <h1>None</h1>
              </div>

              <div className="infoContainer">
                <p>Type of residence</p>
                <h1>Parent’s Apartment</h1>
              </div>

              <div className="infoContainer">
                <p>Bvn</p>
                <h1>07060780922</h1>
              </div>

              <div className="infoContainer">
                <p>Gender</p>
                <h1>Female</h1>
              </div>
            </div>
          </div>

          <div className="detailedInfo">
            <div className="personalInfo">
              <h1>Empoloyment Information</h1>
            </div>

            <div className="data">
              <div className="infoContainer">
                <p>Employment Status</p>
                <h1>{employment?.employmentStatus}</h1>
              </div>

              <div className="infoContainer">
                <p>Office Name</p>
                <h1>{employment?.officeName}</h1>
              </div>



              <div className="infoContainer">
                <p>Sector</p>
                <h1>{employment?.sector}</h1>
              </div>

              <div className="infoContainer">
                <p>Duration of Employment</p>
                <h1>{employment?.employmentDuration}</h1>
              </div>

              <div className="infoContainer">
                <p>Contact Email</p>
                <h1>{employment?.officeEmail}</h1>
              </div>



              <div className="infoContainer">
                <p>Salary</p>
                <h1>{employment?.salary}</h1>
              </div>



            </div>
          </div>

          <div className="detailedInfo">
            <div className="personalInfo">
              <h1>Guarantor</h1>
            </div>

            <div className="data">
              <div className="infoContainer">
                <p>Full Name</p>
                <h1>{guarantor?.firstNamw} {guarantor?.lastName}</h1>
              </div>

              <div className="infoContainer">
                <p>Phone Number</p>
                <h1>{guarantor?.phone}</h1>
              </div>

              <div className="infoContainer">
                <p>Email Address</p>
                <h1>{guarantor?.email}</h1>
              </div>

              <div className="infoContainer">
                <p>Relationship</p>
                <h1>{guarantor?.relationship}</h1>
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  );
};
