import React from "react"
import Centered from "../Grid/Centered";
import FullHeightContainer from "../Grid/FullHeightContainer";

export const CenteredStory = (Story) => {
  return <FullHeightContainer><Centered><Story /></Centered></FullHeightContainer>
}

export default CenteredStory;