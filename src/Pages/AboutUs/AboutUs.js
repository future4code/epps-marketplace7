import React, { Component } from 'react'
import styled from 'styled-components'
import MaterialHeader from '../../components/MaterialUI/MaterialHeader'
import MaterialFooter from "../../components/MaterialUI/MaterialFooter"
import BoxUs from "./BoxUs.js"
import BoxNews from './BoxNews.js'

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default class Home extends Component {
  render() {
    return (
      <div>
        <MaterialHeader
          onClickClient={this.props.onClickClient}
          onClickSeller={this.props.onClickSeller}
          onClickAboutUs={this.props.onClickAboutUs}
        />
        <Body>
            <BoxUs />
        </Body>
            <BoxNews />
            <MaterialFooter/>
      </div>
    );
  }
}