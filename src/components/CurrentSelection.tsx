import * as React from 'react'
import styled from '../styles/styled-components'

import {
  ContentStyleKey,
  contentStyles,
  VisualStyleKey,
  visualStyles
} from '../schema'

interface IProps {
  contentStyle: ContentStyleKey
  visualStyle: VisualStyleKey
}

const mapName = (
  visualStyle: VisualStyleKey,
  contentStyle: ContentStyleKey
): string =>
  `
  ${visualStyles[visualStyle].displayName.toLowerCase()}-style
  ${contentStyles[contentStyle].displayName.toLowerCase()} map
  `

export const CurrentSelection = ({ contentStyle, visualStyle }: IProps) => (
  <Div>
    <P>
      The map preview shows a
      <strong>{mapName(visualStyle, contentStyle)}</strong> which:
    </P>
    <List>
      <Item>{visualStyles[visualStyle].description}</Item>
      <Item>{contentStyles[contentStyle].description}</Item>
    </List>
  </Div>
)

const Div = styled.div`
  margin: 1em;
  padding-top: 1em;
  border-top: solid 1px #eee;
  font-size: 90%;
  /* flex child */
  flex: 1 auto;
`

const P = styled.p`
  margin: 1em 0.5em;
`

const List = styled.ul`
  margin-left: 1em;
  padding-left: 1em;
`

const Item = styled.li`
  margin: 1em 0;
`
