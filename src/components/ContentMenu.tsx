import * as React from 'react'
import styled from '../styles/styled-components'

export enum ContentType {
  simple = 'Simple locator',
  entities = 'Historical entities',
  phenomena = 'Historical phenomena'
}

export interface IContentProps {
  contentStyle: ContentType
}

export const ContentMenu = ({ contentStyle }: IContentProps) => (
  <Div>
    <h2>Choose a content style</h2>
    <p>{contentStyle}</p>
  </Div>
)

const Div = styled.div`
  background: hsla(90, 50%, 50%, 0.5);

  /* flex child */
  flex: 0 auto;
`
