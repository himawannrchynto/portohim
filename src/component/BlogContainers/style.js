import styled from "styled-components";
import {Link} from "react-router-dom";
import Iframe from 'react-iframe';

export const TitleContent = styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 900;
    font-size: ${(props)=>(props.art ? "18px" : "26px")};
    line-height: ${(props)=>(props.art ? "25px" : "50px")};
    margin: ${(props)=>(props.art ? "150px 0 15px" : "22px 0")};
    @media screen and (max-width: 740px) {
        font-weight: 700;
        text-align:center;
    }
`;

export const BlogWrapped = styled.div`
    text-align: ${props => props.image ? "center" : "justify"};
    margin: ${props => props.image ? "30px auto 0" : "50px 21px 50px 21px"};
    text-indent: ${props => props.image ? "none" : "50px"};
    @media screen and (max-width: 740px) {
        text-align: ${props => props.image ? "left" : "left"};
    }
`;
export const BoxContainer = styled.div`
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    @media screen and (max-width: 740px) {
        line-height: 15px;
        font-size: 11px;
    }
`;

export const BlogImage = styled.img`
    z-index: 3;
    width: 400px;
    max-height: 400px;
    @media screen and (max-width: 565px) {
        max-width: 100%;
        max-height: 300px;
    }
`;

export const BlogVideo = styled(Iframe)`
    width: 400px;
    max-height: 400px;
    @media screen and (max-width: 565px) {
        max-width: 100%;
        max-height: 300px;
    }
`;

export const BlogImageArt = styled.img`
    width: 100px;
    max-height: 100px;
    @media screen and (max-width: 565px) {
        max-width: 125px;
        max-height: 100px;
    }
`;

export const BlogApart = styled.div`
    display: flex;
    height: ${(props) => (props.art ? "133px" : "auto")};
    overflow: ${(props) => (props.art ? "hidden" : "none")};
    border-bottom: ${(props) => (props.art ? "1px solid black" : "none")};
    &:hover {
        transition: ${(props) => (props.art ? "0.2s ease-in-out" : "none")};
        transform: ${(props) => (props.art ? "scale(1.02)" : "none")};
    }
    @media screen and (max-width: 1150px) {
        height: ${(props) => (props.art ? "118px" : "auto")};
    }
    @media screen and (max-width: 859px) {
        display: ${(props) => (props.containe ? "block" : "flex")};
    }
`;

export const BlogDivApart = styled.div`
    flex-basis: ${(props) => (props.contain ? "70%" : "30%")};
    padding: ${(props) => (props.contain ? "5px" : "2px")};
    margin: 1px 5px;
    align-self: ${(props) => (props.imagart ? "center" : "none")};
`;

export const ArticlePart = styled.div`
    max-height: 538px;
    overflow: hidden;
    @media screen and (max-width: 1250px) {
        max-height: 590px;
    }
    @media screen and (max-width: 750px) {
        max-height: 504px;
    }
    @media screen and (max-width: 684px) {
        max-height: 472px;
    }
`;
export const Linked = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: black
`;

export const ShareBtn = styled.button`
    font-size: 14px;
    margin: 10px 5px;
    border-radius: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
    padding: 8px 20px;
    background-color: #3b5998;
    &:hover {
        transition:0.2s ease-in-out;
        transform:scale(1.1);
    }
`;