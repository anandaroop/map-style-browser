import * as React from 'react'
import styled from '../styles/styled-components'

import { ContentType, VisualType } from '.'

interface IProps {
  contentStyle: ContentType
  visualStyle: VisualType
}


const makeFilename = (props: IProps): string =>
  `${props.visualStyle.toLowerCase()}-${props.contentStyle.toLowerCase()}`

  export const Main = (props: IProps) => <Div>{makeFilename(props)}</Div>

const Div = styled.main`
  background: #eee;

  /* flex child */
  flex: 1 auto;
`
