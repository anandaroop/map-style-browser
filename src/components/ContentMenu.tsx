import * as React from 'react'
import styled from '../styles/styled-components'

import { Link } from '../shared'

export enum ContentType {
  /** Basic point and label features */
  locator = 'Simple locator',

  /** Areal features */
  entities = 'Historical entities',

  /** Miscellaneous spatial features such as trade routes, invasions */
  phenomena = 'Historical phenomena'
}

export interface IProps {
  /** The style of information overlaid on the basemap */
  contentStyle: ContentType
  setContentStyle: (contentStyle: ContentType) => void
}

export const ContentMenu = (props: IProps) => (
  <Div>
    <H2>Choose a content style</H2>
    <Nav>
      <Link
        onClick={props.setContentStyle}
        current={props.contentStyle}
        value={ContentType.locator}
      />
      <Link
        onClick={props.setContentStyle}
        current={props.contentStyle}
        value={ContentType.entities}
      />
      <Link
        onClick={props.setContentStyle}
        current={props.contentStyle}
        value={ContentType.phenomena}
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
