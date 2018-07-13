import * as React from 'react'
import styled from './styles/styled-components'

import { VisualStyle, ContentStyle } from './types'

interface IProps {
  visualStyle: VisualStyle
  contentStyle: ContentStyle
}

export const Map = (props: IProps) => <Main image={makeImagePath(props)} />

const makeImagePath = ({ visualStyle, contentStyle }: IProps) =>
  `/${visualStyle}-${contentStyle}.jpg`

interface IMainProps {
  image: string
}

const Main = styled.main`
  background-image: url(${(p: IMainProps) => p.image});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;

  /* flex child */
  flex: 1 auto;
`
