import * as React from 'react'
import styled from '../styles/styled-components'

import { ContentStyleKey, VisualStyleKey } from '../schema'

interface IProps {
  contentStyle: ContentStyleKey
  visualStyle: VisualStyleKey
}

const makeFilename = (props: IProps): string => {
  const visual = props.visualStyle.toLowerCase()
  const content = props.contentStyle.toLowerCase()
  return `${visual}-${content}.jpg`
}

export const Main = (props: IProps) => <Div image={makeFilename(props)} />

interface IDivProps {
  image: string
}

const Div = styled.main`
  margin-top: 1em;
  background: #eee;
  background-image: url(/${(p: IDivProps) => p.image});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;

  /* flex child */
  flex: 1 auto;
`
