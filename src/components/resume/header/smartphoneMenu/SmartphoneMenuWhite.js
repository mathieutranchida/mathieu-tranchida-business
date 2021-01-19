import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector } from "react-redux";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, animateScroll as scroll } from "react-scroll";
import LanguageSelector from "../LanguageSelector";
import "./smartphoneMenu.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
}));

const SmartphoneMenu = () => {
  const header = useSelector(
    (state) => state.languageReducer.state && state.languageReducer.state.header
  );

  console.log(header);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Wrapper>
        <MenuButtonDiv>
          <FiMenu
            style={{
              width: "31px",
              height: "31px",
              paddingTop: "1px",
              cursor: "pointer",
              color: "white",
            }}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleOpen}
          />
        </MenuButtonDiv>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Div className={classes.paper}>
              <FiX
                style={{
                  height: "24px",
                  width: "24px",
                  cursor: "pointer",
                  marginTop: "30px",
                  right: "0px",
                }}
                onClick={handleClose}
                tabIndex="0"
                aria-label="close modal"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.stopPropagation();
                    handleClose();
                  }
                }}
              />
              <HeaderMenu>
                <Link
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="smartphoneScrollNavLink"
                  onClick={handleClose}
                >
                  {header.bio}
                </Link>
                <Link
                  activeClass="active"
                  to="section2"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="smartphoneScrollNavLink"
                  onClick={handleClose}
                >
                  {header.education}
                </Link>
                <Link
                  activeClass="active"
                  to="section3"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="smartphoneScrollNavLink"
                  onClick={handleClose}
                >
                  {header.skills}
                </Link>
                <Link
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="smartphoneScrollNavLink"
                  onClick={handleClose}
                >
                  {header.projects}
                </Link>
                <Link
                  activeClass="active"
                  to="section5"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="smartphoneScrollNavLink"
                  onClick={handleClose}
                >
                  {header.workExperience}
                </Link>
                <Link
                  activeClass="active"
                  to="section6"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="smartphoneScrollNavLink"
                  onClick={handleClose}
                >
                  {header.contact}
                </Link>
                <LanguageDiv>
                  <LanguageSelector />
                </LanguageDiv>
              </HeaderMenu>
            </Div>
          </Fade>
        </Modal>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Div = styled.div`
  height: 100vh;
  width: 230px;
  padding: 32px 0px;
`;

const MenuButtonDiv = styled.div`
  -webkit-filter: drop-shadow(0px 0px 15px black);
  filter: drop-shadow(0px 0px 15px black);
`;

const HeaderMenu = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin-top: -5px;
  @media (min-width: 801px) {
    display: none;
  }
`;

const LanguageDiv = styled.div`
  margin-top: 10px;
`;

export default SmartphoneMenu;
