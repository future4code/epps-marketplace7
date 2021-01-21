import React, { Component } from 'react'
import styled from 'styled-components'
import MaterialHeader from './MaterialUI/MaterialHeader'
import MaterialFooter from './MaterialUI/MaterialFooter'

const Body = styled.div`
  display: flex;
  height: 79.99vh ;
`

class ContainerHome extends Component {
  render() {
    return (
      <div>
        <MaterialHeader />
        <Body>

        </Body>
        <MaterialFooter />
      </div>
    )
  }
}
export default ContainerHome;