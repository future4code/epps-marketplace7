import React, { Component } from 'react'
import styled from 'styled-components'
import MaterialHeader from './MaterialUI/MaterialHeader'
import MaterialFooter from './MaterialUI/MaterialFooter'
import Section1 from './BodySections/Section1/Section1'
import Section2 from './BodySections/Section2/Section2'
import Section3 from './BodySections/Section3/Section3'

const Body = styled.div`
  display: flex;
  flex-direction: column;
`

class ContainerHome extends Component {
  render() {
    return (
      <div>
        <MaterialHeader
          onClickClient={this.props.onClickClient}
          onClickSeller={this.props.onClickSeller}
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
export default ContainerHome;