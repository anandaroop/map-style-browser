import * as React from 'react'
import styled from '../styles/styled-components'

import { H2, Link, Nav } from '../shared'

import { ContentStyle, ContentStyleKey } from '../schema'

export interface IProps {
  /** The style of information overlaid on the basemap */
  contentStyle: ContentStyleKey
  setContentStyle: (contentStyle: ContentStyleKey) => void
}

export const ContentMenu = (props: IProps) => (
  <Div>
    <H2>Choose a content style</H2>
    <Nav>
      <Link
        onClick={props.setContentStyle}
        current={props.contentStyle}
        value={ContentStyle.locator}
      />
      <Link
        onClick={props.setContentStyle}
        current={props.contentStyle}
        value={ContentStyle.entities}
      />
      <Link
        onClick={props.setContentStyle}
        current={props.contentStyle}
        value={ContentStyle.phenomena}
      />
    </Nav>
  </Div>
)

const Div = styled.div`
  margin-top: 1em;
  /* flex child */
  flex: 0 auto;
`
