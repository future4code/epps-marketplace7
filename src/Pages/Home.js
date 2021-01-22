import React, { Component } from 'react'
import styled from 'styled-components'
import MaterialHeader from '../components/MaterialUI/MaterialHeader'
import MaterialFooter from "../components/MaterialUI/MaterialFooter";

const Body = styled.div`
  display: flex;
  height: 81.7vh ;
`

export default class Home extends Component {
  render() {
    return (
      <div>
        <MaterialHeader
          onClickClient={this.props.onClickClient}
          onClickSeller={this.props.onClickSeller}
        />
        <Body></Body>
        <MaterialFooter />
      </div>
    );
  }
}