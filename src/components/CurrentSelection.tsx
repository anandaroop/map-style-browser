import * as React from 'react'
import styled from 'styled-components'

import { ContentType, VisualType } from '../components'

interface IProps {
  contentStyle: ContentType
  visualStyle: VisualType
}

const mapName = ({ visualStyle, contentStyle }: IProps): string =>
  ` ${visualStyle.toLowerCase()}-style ${contentStyle.toLowerCase()} map`

export const CurrentSelection = ({ contentStyle, visualStyle }: IProps) => (
  <Div>
    <P>
      The map preview shows a
      <strong>{mapName({ visualStyle, contentStyle })}</strong> which:
    </P>
    <List>
      <Item>
        {visualStyle === VisualType.natural &&
          `uses naturalistic colors to depict land cover and vegetation as well as terrain`}
        {visualStyle === VisualType.relief &&
          `uses shaded topographic relief to depict terrain`}
        {visualStyle === VisualType.flat && `uses flat tints and line art only`}
      </Item>
      <Item>
        {contentStyle === ContentType.locator &&
          `locates simple point features such as towns, archaeological sites, etc`}
        {contentStyle === ContentType.entities &&
          `shows areal entities such as kingdoms, states, linguistic areas, etc`}
        {contentStyle === ContentType.phenomena &&
          `shows spatial phenomena such as trade or invasion routes, etc`}
      </Item>
    </List>
  </Div>
)

const Div = styled.div`
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
