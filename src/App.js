import React from "react";
import { AppContainer } from "./components/AppContainer";
import { JobsList } from "./components/JobsList";
import { MainContainer } from "./Styled";

export default class App extends React.Component {
  render() {
	return (
    <MainContainer>
      <AppContainer />
      <JobsList />
    </MainContainer>
  );
  }
}
