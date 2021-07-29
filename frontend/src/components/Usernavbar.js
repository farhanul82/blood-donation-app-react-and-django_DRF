import React, { Fragment, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../Redux/Action/auth";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { fetch_friends } from "../Redux/Action/FriendsAction";

import { Nav, Navbar } from 'react-bootstrap';



const Usernavbar = ({ logout, isAuthenticated }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    setRedirect(true);
  };
  const friend = useSelector((state) => state.friends.friends);
  console.log(friend.length)

  const guestLinks = () => (
    <Fragment>
      <Nav.Link  onClick={()=>history.push('/login')}> <AiFillHome /> Login</Nav.Link>
      <Nav.Link onClick={()=>history.push('/signup')} > <AiFillHome />  Sign Up</Nav.Link>
    </Fragment>
  );

  const authLinks = () => (
    <Fragment>
      <Nav.Link onClick={logout_user}>  Logout</Nav.Link>
    </Fragment>
  );



const getfriend = ()=>{
  dispatch(fetch_friends());
  history.push('/Follwers');
}



  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand onClick={()=>history.push('/home')}>
          <div className="navImgDIv">
            <img src="/images/1.png" alt=""></img>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0 collBtn"
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={()=>history.push('/home')}> <AiFillHome /> Home</Nav.Link>
            <Nav.Link  onClick={()=>history.push('/Profile')}><AiOutlineUser /> Profile{" "}</Nav.Link>
            <Nav.Link onClick={()=>getfriend() }> Follwers <span className="sr-only">(current)</span><span className="badge bg-danger cardBadge px-1">{friend.length}</span></Nav.Link>
            <Nav.Link  onClick={()=>history.push('/Requests')}>  Requests <span className="sr-only">(current)</span></Nav.Link>
            {isAuthenticated ? authLinks() : guestLinks()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {redirect ? <Redirect to="/" /> : <Fragment></Fragment>}




    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Usernavbar);


// <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//   <Navbar.Toggle aria-controls="navbarScroll" />
//   <Navbar.Collapse id="navbarScroll">
//     <Nav
//       className="mr-auto my-2 my-lg-0"
//       style={{ maxHeight: '100px' }}
//       navbarScroll
//     >
//       <Nav.Link to="/home"> <AiFillHome /> Home</Nav.Link>
//       <Nav.Link to="/Profile"><AiOutlineUser /> Profile{" "}</Nav.Link>
//       <Nav.Link to="/Follwers" onClick={() => dispatch(fetch_friends())}> Follwers <span className="sr-only">(current)</span><span className="badge bg-danger cardBadge px-1">{friend.length}</span></Nav.Link>
//       <Nav.Link to="/Requests">  Requests <span className="sr-only">(current)</span></Nav.Link>
//       {isAuthenticated ? authLinks() : guestLinks()}
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
//   {redirect ? <Redirect to="/" /> : <Fragment></Fragment>}