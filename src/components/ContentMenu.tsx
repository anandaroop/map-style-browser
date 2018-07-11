import * as React from 'react'
import styled from '../styles/styled-components'

export enum ContentType {
  /** Basic point and label features */
  simple = 'Simple locator',

  /** Areal features */
  entities = 'Historical entities',

  /** Miscellaneous spatial features such as trade routes, invasions */
  phenomena = 'Historical phenomena'
}

export interface IContentProps {
  /** The style of information overlaid on the basemap */
  contentStyle: ContentType
}

export const ContentMenu = ({ contentStyle }: IContentProps) => (
  <Div>
    <h2>Choose a content style</h2>
    <p>{contentStyle}</p>
    <ul>
      <li>{ContentType.simple}</li>
      <li>{ContentType.entities}</li>
      <li>{ContentType.phenomena}</li>
    </ul>
  </Div>
)

const Div = styled.div`
  background: hsla(90, 50%, 50%, 0.5);

  /* flex child */
  flex: 0 auto;
`
