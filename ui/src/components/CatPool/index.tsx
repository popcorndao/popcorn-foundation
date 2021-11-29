import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ReactComponent as CatPoolSvg } from './catpool.svg';

const catRotate = keyframes`
  from { transform: rotateZ(0deg) }
  to { transform: rotateZ(-360deg) }
`;

const tailJump = keyframes`
  from{
    transform: rotateX(0deg);
  }
  to{
    transform: rotateX(40deg);
  }
`;

const redcatfall = keyframes`
  from{
    transform: translate(-50px, -50px);
  }
  to{
    transform: translate(35px, 25px);
  }
`;

const snowFall = keyframes`
  from{
    transform : translate(-10px,-25px);
  }
  to{
    transform : translate(0px,0px);
  }
`;

const lightBlueCatRise = keyframes`
  from{
    transform: translate(0px,0px) rotateZ(0deg); 
  }
  to{
      transform: translate(-20px,-20px) rotateZ(-20deg);
  }
`;

const StyledCatPool = styled(CatPoolSvg)`
  position: relative;
  width: 100%;
  height: auto;
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  body{
    text-align: center;
}
  * {
    transform-box: fill-box;
    transform-origin: center center;
    transition-timing-function: ease;
  }
  #svg-id-greencat{
    animation: ${catRotate} 9s  infinite linear;
    transform-origin: center;
    transform-box: fill-box;
  }
  #svg-id-tail{
    animation: ${tailJump} 2s infinite ease-in-out alternate;
    transform-origin: bottom;
}
  #svg-id-redcat{
    animation: ${redcatfall} 12s forwards;
    transform-origin: top;
}
  #svg-id-popcorn {
    animation: ${snowFall} 12s forwards;
    transform-origin: top;
    transform-box: fill-box;
  }
  #svg-id-lightbluecat{
    animation: ${lightBlueCatRise} 12s forwards;
     transform-origin: center;
     transform-box: fill-box;
 }
`;

export const CatPool: React.FC = () => <StyledCatPool />;

export default CatPool;