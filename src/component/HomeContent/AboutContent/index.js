import React from "react";
import { GlobalContent } from "../../GlobalContent";
import { TitleHomeContent } from "../style";
import {
    AboutWriteContent,
    HimaAbout, 
    AboutWrapper,
    SocialIconLink,
    SocialIcons,
    GridAbout,
    ContactIcon,
    HimaAboutImg
} from "./style";
import {
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
    FaPhone,
    FaEnvelope
} from "react-icons/fa";
import { AboutData } from "../../../alldata/AboutContent";
import AboutHima from "../../../images/AboutHima.png";

const abt = AboutData.abt;
const phone = AboutData.phone;
const mail = AboutData.mail;

const AboutContent = () => {
    return(
        <GlobalContent>
            <TitleHomeContent abt >About Me</TitleHomeContent>
            <AboutWrapper>
            <GridAbout gridAbt >
                <AboutWriteContent abt > {abt} </AboutWriteContent>
            </GridAbout>
            <HimaAbout>
                <HimaAboutImg src = {AboutHima} alt="Hima" />
            </HimaAbout>
            <GridAbout>
            <TitleHomeContent>Reach Me</TitleHomeContent>
            <ContactIcon phone >
                <FaPhone />
                <AboutWriteContent> {phone} </AboutWriteContent>
            </ContactIcon>
            <ContactIcon>
                <FaEnvelope />
                <AboutWriteContent> {mail} </AboutWriteContent>
            </ContactIcon>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/himawan.nurcahyanto/"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebookSquare />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/himawannurcahyanto/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/channel/UCK_2UEc-JfIKDtWEy1_IK9g/videos"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/himawan-nurcahyanto-b46306147/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="https://twitter.com/HimawanNrchynto"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
            </GridAbout>
            </AboutWrapper>
        </GlobalContent>
    );
};

export default AboutContent;
