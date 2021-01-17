import React from "react";
import styled from "styled-components";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FiMenu } from "react-icons/fi";

// Getting this error onclick. Might have to change some things around for deployment:
// Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference.

const SmartphoneMenu = ({ header }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuStyle = {
    fontFamily: "montserrat, sans-serif",
    fontWeight: "400",
  };

  return (
    <>
      <Wrapper>
        <FiMenu
          style={{
            width: "31px",
            height: "31px",
            paddingTop: "1px",
            color: "white",
            cursor: "pointer",
          }}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{
            height: "100vw",
            width: "200px",
          }}
        >
          <MenuItem onClick={handleClose} style={menuStyle}>
            {header.bio}
          </MenuItem>
          <MenuItem onClick={handleClose} style={menuStyle}>
            {header.education}
          </MenuItem>
          <MenuItem onClick={handleClose} style={menuStyle}>
            {header.skills}
          </MenuItem>
          <MenuItem onClick={handleClose} style={menuStyle}>
            {header.projects}
          </MenuItem>
          <MenuItem onClick={handleClose} style={menuStyle}>
            {header.workExperience}
          </MenuItem>
          <MenuItem onClick={handleClose} style={menuStyle}>
            {header.contact}
          </MenuItem>
        </Menu>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

export default SmartphoneMenu;
