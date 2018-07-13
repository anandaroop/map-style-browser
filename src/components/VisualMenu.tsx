import * as React from 'react'
import styled from '../styles/styled-components'
import { LinkProps } from 'react-router-dom'

import { H2, StyledRouterLink as Link } from '../shared'

import {
  ContentStyleKey,
  VisualStyle,
  VisualStyleKey,
  visualStyles
} from '../schema'

export interface IProps {
  contentStyle: ContentStyleKey
  visualStyle: VisualStyleKey
  setVisualStyle: (visualStyle: VisualStyleKey) => void
}

const makeLink = (props: IProps) => (
  visualStyle: VisualStyle
): React.ReactElement<LinkProps> => (
  <Link
    to={`/${visualStyle}/${props.contentStyle}`}
    onClick={e => props.setVisualStyle(visualStyle)}
  >
    {visualStyles[visualStyle].displayName}
  </Link>
)

export const VisualMenu = (props: IProps) => (
  <Div>
    <H2>Choose a visual style</H2>

    <nav>
      {makeLink(props)(VisualStyle.natural)}
      {makeLink(props)(VisualStyle.flat)}
      {makeLink(props)(VisualStyle.relief)}
    </nav>
  </Div>
)

const Div = styled.div`
  margin-top: 1em;
  /* flex child */
  flex: 0 auto;
`
