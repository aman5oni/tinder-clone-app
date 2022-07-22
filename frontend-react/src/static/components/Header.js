import React from "react";
import "../style/Header.css";
import TinderLogo from "../images/TinderLogo.png";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="headerIcon" />
      </IconButton>

      <img src={TinderLogo} className="headerLogo" alt="" />

      <IconButton>
        <ForumIcon fontSize="large" className="headerIcon" />
      </IconButton>
    </div>
  );
};

export default Header;
