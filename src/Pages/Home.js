import React, { Component } from "react";
import styled from "styled-components";
import MaterialHeader from "../components/MaterialUI/MaterialHeader";
import MaterialFooter from "../components/MaterialUI/MaterialFooter";
import Section1 from "../components/BodySections/Section1/Section1";
import Section2 from "../components/BodySections/Section2/Section2";
import Section3 from "../components/BodySections/Section3/Section3";

const Body = styled.div`

`;

export default class Home extends Component {
  render() {
    return (
      <div>
        <MaterialHeader
          onClickHome={this.props.onClickHome}
          onClickClient={this.props.onClickClient}
          onClickSeller={this.props.onClickSeller}
          onclickAboutUs={this.props.onclickAboutUs}
        />
        <Body>
          <Section1 />
          <Section2 />
          <Section3 />
        </Body>
        <MaterialFooter />
      </div>
    );
  }
}
