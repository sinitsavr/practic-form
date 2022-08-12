import React from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderTask = () => {
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <div>

      <Link to="/"><img src="/static/images/logo.png" alt="logo"/></Link>    
      {pathname==='/login'?<Link to="/signup">Signup</Link>:<Link to="/login">Login</Link>}
    </div>
  );
};

export default HeaderTask;