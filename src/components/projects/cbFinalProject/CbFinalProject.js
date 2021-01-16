import React from "react";
import styled from "styled-components";

import ModalDemo from "./ModalDemo";

import { FiChevronRight } from "react-icons/fi";

const title = "E-Commerce Photography Website";

const CbFinalProject = () => {
  return (
    <>
      <Wrapper>
        <Header>{title}</Header>
        <Info>
          <InfoStrong>Technologies used:</InfoStrong> React, Javascript, Redux,
          Node.js, CSS, MongoDB, Stripe, Email.js, Cloudinary, Bcrypt, Json Web
          Tokens
        </Info>
        <Info>
          <InfoStrong>Time frame:</InfoStrong> 14 days
        </Info>
        <LinkWrapper>
          <Link
            href="https://github.com/mathieutranchida/Mathieu-Tranchida-Website"
            target="_blank"
          >
            See GitHub repository{" "}
            <FiChevronRight
              style={{
                marginLeft: "3px",
                height: "14px",
                width: " 14px",
                paddingTop: "1px",
              }}
            />
          </Link>
          <ModalDemo title={title} />
        </LinkWrapper>
        <DescriptionTitle>Description:</DescriptionTitle>
        <Description>
          Created a fully responsive e-commerce application with a functioning
          store, cart, payment, order confirmation, and admin portal features.
        </Description>
        <Description>
          The store offers a variety of images that can be bought in different
          sizes and types of paper. Each cart is saved on a MongoDB database and
          can be retrieved using a unique ID assigned to each user's local
          storage. The payment system was created using Stripe. On payment, the
          user is redirected to the order confirmation page if the payment
          succeeds or to an error page if the payment fails.
        </Description>
        <Description>
          The admin portal gives the admin the possibility to create, update,
          and delete products. The portal is protected with a login portal that
          uses Bcrypt and Json Web Token to secure the user's authentication. If
          logged out, the admin can't access protected routes and perform
          protected actions. While logged in, the user can see every order made
          to the website and modify their status (received, processing,
          fulfilled, etc.).
        </Description>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
  width: 100vw;
  max-width: 980px;
  margin-bottom: 10px;
`;

const Header = styled.h2`
  margin-top: 0px;
  text-align: left;
  text-transform: uppercase;
  font-weight: 800;
  margin-bottom: 10px;
`;

const Info = styled.div`
  margin-bottom: 2px;
`;

const InfoStrong = styled.span`
  font-weight: 600;
`;

const LinkWrapper = styled.div`
  margin: 10px 0px 13px;
`;

const Link = styled.a`
  font-style: italic;
  margin-top: 2px;
  display: flex;
  align-items: center;
  width: 170px;
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
`;

const DescriptionTitle = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 11pt;
`;

const Description = styled.div`
  text-align: justify;
  margin-bottom: 5px;
  text-indent: 35px;
`;

export default CbFinalProject;
