import React, { useState, useRef } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { gsap } from "gsap";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const Contact = ({ contact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    gsap.to(messageArea, {
      duration: 1,
      height: "15px",
      ease: "power2",
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  let messageArea = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2lz9tdc",
        "template_qu7pwha",
        e.target,
        "user_48pmgavLTUZbdVapzMSzv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Form className="contact-form" onSubmit={sendEmail}>
        <Input type="hidden" name="contact_number" />
        <Div>
          <Input
            type="text"
            name="user_name"
            placeholder={"*" + contact.name}
            value={name}
            onChange={(ev) => {
              setName(ev.target.value);
            }}
          />
        </Div>
        <Div>
          <Input
            type="email"
            name="user_email"
            placeholder={"*" + contact.email}
            value={email}
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
          />
        </Div>
        <Div>
          <Textarea
            name="message"
            value={message}
            placeholder={"*" + contact.message}
            onChange={(ev) => {
              setMessage(ev.target.value);
              gsap.to(messageArea, {
                duration: 1,
                height: "150px",
                ease: "power2",
              });
            }}
            ref={(e) => {
              messageArea = e;
            }}
            onSelect={() => {
              gsap.to(messageArea, {
                duration: 1,
                height: "150px",
                ease: "power2",
              });
            }}
          />
          <TextareaReducedMotion
            name="message"
            value={message}
            placeholder={"*" + contact.message}
            onChange={(ev) => {
              setMessage(ev.target.value);
            }}
          />
        </Div>
        <Button
          type="submit"
          value={contact.send}
          disabled={!name || !email.includes("@") || !message}
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={handleClick}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography className={classes.typography}>
            {contact.confirmation}
          </Typography>
        </Popover>
      </Form>
    </>
  );
};

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  margin-top: 15px;
  @media (max-width: 600px) {
    width: 85vw;
  }
`;

const Div = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  color: black;
  font-family: montserrat, sans-serif;
  font-size: 10pt;
  margin-top: 5px;
`;

const Textarea = styled.textarea`
  width: calc(100% + 2px);
  height: 15px;
  outline: none;
  border: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  color: black;
  font-family: montserrat, sans-serif;
  font-size: 10pt;
  padding: 0px 0px 2px 2px;
  margin-top: 6px;
  @media screen and (prefers-reduced-motion) {
    display: none;
  }
`;

const TextareaReducedMotion = styled.textarea`
  width: calc(100% + 2px);
  height: 150px;
  outline: none;
  border: none;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid black;
  background-color: transparent;
  color: black;
  font-family: montserrat, sans-serif;
  font-size: 10pt;
  padding: 0px 0px 2px 2px;
  margin-top: 6px;
  @media screen and (prefers-reduced-motion: no-preference) {
    display: none;
  }
`;

const Button = styled.input`
  float: right;
  background-color: transparent;
  font-family: montserrat, sans-serif;
  font-size: 11pt;
  color: black;
  border: none;
  text-transform: uppercase;
  font-weight: 900;
  margin: 4px 0px 0px 0px;
  &:disabled {
    color: grey;
  }
  &:hover:not([disabled]) {
    cursor: pointer;
  }
`;

export default Contact;
