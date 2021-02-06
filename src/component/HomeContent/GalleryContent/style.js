import styled from "styled-components";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AiOutlineClose } from "react-icons/ai";

export const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 20px;
    overflow-x:hidden;
    grid-column-gap: 60px;
    justify-content: center;
    @media screen and (max-width: 1015px) {
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
        margin: 0 auto;
      }
    @media screen and (max-width: 709px) {
        text-align:center;
        grid-template-columns: 40% 30%;
        grid-template-rows: auto;
        grid-gap: 15px;
        justify-content: left;
        width:100%;
    }
`;


export const GalleryImage = styled(LazyLoadImage)`
    width: 190px;
    height: 190px;
    position: inherit;
    &:hover {
        transition: all 0.2s ease-in-out;
        transform:scale(1.02);
    }
    @media screen and (max-width: 709px) {
        max-width: 180px;
        max-height: 180px;
    }
    @media screen and (max-width: 520px) {
        max-width: 130px;
        max-height: 130px;
    }
`;

export const ButtonCloser = styled(AiOutlineClose)`
    font-size: 26px;
    color: white !important;
    font-weight: bold;
    background-color: white;
    border-radius: 50%;
`;
export const ContentDrop = styled.div`
margin: 20px auto;
max-width: 700px;
border-radius: 10px;
border-radius: 10px;
border: 1px solid #ccc;
padding: 16px 16px;
z-index: 952;
background-color: rgba(255,255,255);`;

export const DropDownContent = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
display: none;
z-index: 951;
padding: 15px;
overflow-y: scroll;
`;
export const ContentDiv2 = styled.button`
    display: none;
    font-weight: 400;
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-style: italic;
    font-size: 13px;
    line-height: 20px;
    text-decoration: underline;
    background: none;
    outline: none;
    border: none;
    color: white;
    cursor: pointer;
    width: fit-content;
`;

export const ContentDiv = styled.div`
    display: block;
    font-weight: 400;
    font-family: 'Montserrat',sans-serif;
    text-align: center;
    font-style: italic;
    font-size: 13px;
    line-height: 20px;
    text-decoration: underline;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    margin: 0 auto;
`;
export const DropDown = styled.div`
  margin-bottom: 32px;
  display: inline-block;
  border-bottom: 1px solid #D6D6D6;
  border: none;
  cursor: pointer;
  outline: none;
  > * {
    cursor: pointer;
  }

  &:focus,
  &:active {
    /* background-color: rgba(0, 0, 0, 0.1); */
    border: none;
  }

  &:focus ${DropDownContent}, &:active ${DropDownContent} {
    display: block;
    max-width: 100vw;
    cursor: auto;
  }
  &:focus ${ContentDiv2}, &:active ${ContentDiv2} {
      display: flex;
      flex-direction: row-reverse;
      width: 100%;
      color: white;
  }
  &:focus ${ContentDiv}, &:active${ContentDiv} {
    display: none;
}
  &:hover {
    color: #333;
  }
`;

export const Dropbtn = styled.div`
  display: block;
`;