import * as React from 'react'
import styled from './styles/styled-components'

import { VisualStyle, ContentStyle } from './types'

interface IProps {
  visualStyle: VisualStyle
  contentStyle: ContentStyle
}

export const Map = ({ visualStyle, contentStyle }: IProps) => (
  <Main>
    {visualStyle}-{contentStyle}.jpg
  </Main>
)

const Main = styled.main`
  background: pink;

  /* flex child */
  flex: 1 auto;
`
