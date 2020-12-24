import React from "react";
import Hima from "../../images/Hima.png";
import { GlobalContent } from "../GlobalContent";
import { Homebtn } from "./style";
import {Banner, IntroPart, Intro, Img, ImgPart} from "../BannerStyle"

const HomeBanner = () => {
    return(
        <GlobalContent>
            <Banner>
                <IntroPart>
                    <Intro>HELLO! MY NAME IS</Intro>
                    <Intro big normal >Himawan Nurcahyanto</Intro>
                    <Intro normal jobs >Artificial Intelligence <br />Engineer</Intro>
                    <Homebtn>Download Resume</Homebtn>
                </IntroPart>
                <ImgPart>
                    <Img src={Hima} />
                </ImgPart>
            </Banner>
        </GlobalContent>
    );
};

export default HomeBanner;