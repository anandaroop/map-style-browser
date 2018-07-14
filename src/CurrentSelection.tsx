import * as React from 'react'
import styled from './styles/styled-components'

import {
  VisualStyle,
  ContentStyle,
  VISUAL_STYLES,
  CONTENT_STYLES
} from './types'

interface IProps {
  visualStyle: VisualStyle
  contentStyle: ContentStyle
}

export const CurrentSelection = ({ visualStyle, contentStyle }: IProps) => (
  <Div>
    <P>
      The map preview shows a
      <strong>{mapNameFor(visualStyle, contentStyle)}</strong>
      which:
    </P>

    <List>
      <Item>{VISUAL_STYLES[visualStyle].description}</Item>
      <Item>{CONTENT_STYLES[contentStyle].description}</Item>
    </List>
  </Div>
)

const mapNameFor = (
  visualStyle: VisualStyle,
  contentStyle: ContentStyle
): string =>
  `
  ${VISUAL_STYLES[visualStyle].displayName.toLowerCase()}-style
  ${CONTENT_STYLES[contentStyle].displayName.toLowerCase()} map
  `

const Div = styled.div`
  padding-top: ${p => p.theme.spacing.double};
  margin-bottom: ${p => p.theme.spacing.single};
  border-top: solid 1px #eee;
  font-size: 90%;

  /* flex child */
  flex: 1 auto;
`

const P = styled.p``

const List = styled.ul`
  padding-left: 1em;
`
const Item = styled.li`
  margin: 1em 0;
`
