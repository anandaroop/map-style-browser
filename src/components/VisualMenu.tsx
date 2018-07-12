import * as React from 'react'
import styled from '../styles/styled-components'

import { H2, Link, Nav } from '../shared'

import { VisualStyle, VisualStyleKey, visualStyles } from '../schema'

export interface IProps {
  visualStyle: VisualStyleKey
  setVisualStyle: (visualStyle: VisualStyleKey) => void
}

export const VisualMenu = (props: IProps) => (
  <Div>
    <H2>Choose a visual style</H2>
    <Nav>
      <Link
        onClick={props.setVisualStyle}
        current={props.visualStyle}
        value={VisualStyle.natural}
      >
        {visualStyles[VisualStyle.natural].displayName}
      </Link>

      <Link
        onClick={props.setVisualStyle}
        current={props.visualStyle}
        value={VisualStyle.relief}
      >
        {visualStyles[VisualStyle.relief].displayName}
      </Link>

      <Link
        onClick={props.setVisualStyle}
        current={props.visualStyle}
        value={VisualStyle.flat}
      >
        {visualStyles[VisualStyle.flat].displayName}
      </Link>
    </Nav>
  </Div>
)

const Div = styled.div`
  margin-top: 1em;
  /* flex child */
  flex: 0 auto;
`
