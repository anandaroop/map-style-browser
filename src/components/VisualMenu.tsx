import * as React from 'react'
import styled from '../styles/styled-components'

import { H2, Link, Nav } from '../shared'

import { VisualStyle, VisualStyleKey } from '../schema'

export interface IProps {
  /** The style of the basemap */
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
      />
      <Link
        onClick={props.setVisualStyle}
        current={props.visualStyle}
        value={VisualStyle.relief}
      />
      <Link
        onClick={props.setVisualStyle}
        current={props.visualStyle}
        value={VisualStyle.flat}
      />
    </Nav>
  </Div>
)

const Div = styled.div`
  margin-top: 1em;
  /* flex child */
  flex: 0 auto;
`
