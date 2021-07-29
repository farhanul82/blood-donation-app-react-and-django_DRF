import React, { useEffect } from "react";
import {

  useLocation
} from "react-router-dom";
import { connect } from "react-redux";
import { checkAuthenticated, googleAuthenticate, load_user } from "../Redux/Action/auth";
import { useSelector, useDispatch } from "react-redux";
import queryString from 'query-string'


const Layout = (props) => {
  const location = useLocation()
  useEffect(() => {

    const values = queryString.parse()
    const state = values.state ? values.state : null
    const code = values.code ? values.code : null

    if (state && code) {
      props.googleAuthenticate(state, code)
    }
    else {
      props.checkAuthenticated();
      props.load_user();
    }


  }, [location]);


  return (
    <div>

      {props.children}
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user,googleAuthenticate })(Layout);
