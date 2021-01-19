import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ReactPlayer from "react-player/youtube";

import { FiChevronRight, FiX } from "react-icons/fi";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
  },
}));

const videoUrl = "https://youtu.be/OV-pgbO35rM";

const ModalDemo = ({ title }) => {
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
      <OpenDemo
        onClick={handleOpen}
        tabIndex="0"
        aria-label="open the demo modal"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.stopPropagation();
            handleOpen();
          }
        }}
      >
        See the demo{" "}
        <FiChevronRight
          style={{
            marginLeft: "3px",
            height: "14px",
            width: " 14px",
            paddingTop: "1px",
          }}
        />
      </OpenDemo>
      <OpenDemoPhone href={videoUrl} target="_blank">
        See the demo{" "}
        <FiChevronRight
          style={{
            marginLeft: "3px",
            height: "14px",
            width: " 14px",
            paddingTop: "1px",
          }}
        />
      </OpenDemoPhone>
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
          <div className={classes.paper}>
            <HeaderDiv>
              <Header id="transition-modal-title">{title} Demo</Header>
              <FiX
                style={{ height: "24px", width: "24px", cursor: "pointer" }}
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
            </HeaderDiv>
            <VideoDiv>
              <ReactPlayer width="100%" height="100%" url={videoUrl} />
            </VideoDiv>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

const OpenDemo = styled.div`
  font-style: italic;
  margin-top: 2px;
  display: flex;
  align-items: center;
  width: 115px;
  cursor: pointer;
  font-weight: 600;
  transition: 300ms ease-in-out;
  &:hover {
    margin-left: 5px;
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      margin-left: 0px;
    }
  }
  @media (max-width: 669px) {
    display: none;
  }
`;

const OpenDemoPhone = styled.a`
  font-style: italic;
  margin-top: 2px;
  display: flex;
  align-items: center;
  width: 115px;
  cursor: pointer;
  font-weight: 600;
  transition: 300ms ease-in-out;
  color: black;
  text-decoration: none;
  &:hover {
    margin-left: 5px;
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      margin-left: 0px;
    }
  }
  @media (min-width: 670px) {
    display: none;
  }
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const Header = styled.h2`
  margin-top: 0px;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 10px;
`;

const VideoDiv = styled.div`
  width: 980px;
  height: 550px;
  @media (max-width: 1100px) {
    width: 80vw;
    height: 44vw;
  }
`;

export default ModalDemo;
