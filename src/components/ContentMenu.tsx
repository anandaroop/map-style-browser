import * as React from 'react'
import styled from '../styles/styled-components'

import { H2, Link, Nav } from '../shared'

import { ContentStyle, ContentStyleKey, contentStyles } from '../schema'

export interface IProps {
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
      >
        {contentStyles[ContentStyle.locator].displayName}
      </Link>
      <Link
        onClick={props.setContentStyle}
        current={props.contentStyle}
        value={ContentStyle.entities}
      >
        {contentStyles[ContentStyle.entities].displayName}
      </Link>
      <Link
        onClick={props.setContentStyle}
        current={props.contentStyle}
        value={ContentStyle.phenomena}
      >
        {contentStyles[ContentStyle.phenomena].displayName}
      </Link>
    </Nav>
  </Div>
)

const Div = styled.div`
  margin-top: 1em;
  /* flex child */
  flex: 0 auto;
`
