import * as React from 'react'
import styled from '../styles/styled-components'

import { Link } from '../shared'

export enum VisualType {
  /** Full-color land cover relief background */
  natural = 'Natural',

  /** Monochrome shaded relief background */
  relief = 'Relief',

  /** Flat tint background */
  flat = 'Flat'
}

export interface IProps {
  /** The style of the basemap */
  visualStyle: VisualType
  setVisualStyle: (visualStyle: VisualType) => void
}

export const VisualMenu = (props: IProps) => (
  <Div>
    <H2>Choose a visual style</H2>
    <Nav>
      <Link
        onClick={props.setVisualStyle}
        current={props.visualStyle}
        value={VisualType.natural}
      />
      <Link
        onClick={props.setVisualStyle}
        current={props.visualStyle}
        value={VisualType.relief}
      />
      <Link
        onClick={props.setVisualStyle}
        current={props.visualStyle}
        value={VisualType.flat}
      />
    </Nav>
  </Div>
)

const Div = styled.div`
  /* flex child */
  flex: 0 auto;
`

const H2 = styled.h2`
  font-weight: 300;
  color: #777;
`

const Nav = styled.nav`
  list-style-type: none;
`
