import * as React from 'react'
import styled from '../styles/styled-components'
import { LinkProps } from 'react-router-dom'

import { H2, StyledRouterLink as Link } from '../shared'

import {
  ContentStyle,
  ContentStyleKey,
  contentStyles,
  VisualStyleKey
} from '../schema'

export interface IProps {
  visualStyle: VisualStyleKey
  contentStyle: ContentStyleKey
  setContentStyle: (contentStyle: ContentStyleKey) => void
}

const makeLink = (props: IProps) => (
  contentStyle: ContentStyle
): React.ReactElement<LinkProps> => (
  <Link
    to={`/${props.visualStyle}/${contentStyle}`}
    onClick={e => props.setContentStyle(contentStyle)}
  >
    {contentStyles[contentStyle].displayName}
  </Link>
)

export const ContentMenu = (props: IProps) => (
  <Div>
    <H2>Choose a content style</H2>

    <nav>
      {makeLink(props)(ContentStyle.locator)}
      {makeLink(props)(ContentStyle.entities)}
      {makeLink(props)(ContentStyle.phenomena)}
    </nav>
  </Div>
)

const Div = styled.div`
  margin-top: 1em;
  /* flex child */
  flex: 0 auto;
`
