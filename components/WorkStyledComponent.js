import styled from "styled-components";

export const Card = styled.div`
width: 190px;
 height: 254px;
 margin: 0 auto;
 background-color: #011522;
 border-radius: 8px;
 z-index: 1;

`
export const Tools = styled.div`
display: flex;
 align-items: center;
 padding: 9px;
`
export const Circle = styled.div`
 padding: 0 4px;
`
export const Box = styled.span`
 display: inline-block;
 align-items: center;
 width: 10px;
 height: 10px;
 padding: 1px;
 border-radius: 50%;
`
export const RedBox = styled.span`
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
  background-color: #ff605c;
`;
export const YellowBox = styled.span`
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
  background-color: #ffbd44;
`;
export const GreenBox = styled.span`
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
  background-color: #00ca4e;
`;

export const CardContent = styled.div`
margin-left:0.5em ;
margin-top:1em ;
`
export const NameWork = styled.h1`
font-size:1.2em ;
font-weight: bold;
`

export const DescriptionWork = styled.p`
font-size:1em;
`
export const BtnWorkLink = styled.button`
margin-top:1em ;

border: unset;
 border-radius: 15px;
 color: #212121;
 z-index: 1;
 background: #e8e8e8;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;

 &:before{
    content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: #212121;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
 }
 &:hover{
    color: #e8e8e8;
 }
 &:hover::before{
    width: 100%;
 }

`