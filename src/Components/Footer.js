import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Awards</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Buy</FooterLink>
            <FooterLink href="#">Sell</FooterLink>
            <FooterLink href="#">Management</FooterLink>
            <FooterLink href="#">Renovations</FooterLink>
          </Column>
          <Column>
            <Heading>Top Cities</Heading>
            <FooterLink href="#">New York</FooterLink>
            <FooterLink href="#">San Francisco</FooterLink>
            <FooterLink href="#">Austin</FooterLink>
            <FooterLink href="#">Portland</FooterLink>
          </Column>
          <Column>
            <Heading>Socials</Heading>
            <FooterLink href="#">
              <FaFacebook className="icon" />
              Facebook
            </FooterLink>
            <FooterLink href="#">
              <FaLinkedin className="icon" />
              LinkedIn
            </FooterLink>
            <FooterLink href="#">
              <AiFillInstagram className="icon" />
              Instagram
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
