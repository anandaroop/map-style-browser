import * as React from 'react'
import styled from '../styles/styled-components'

export enum VisualType {
  /** Full-color land cover relief background */
  natural = 'Natural',

  /** Monochrome shaded relief background */
  relief = 'Relief',

  /** Flat tint background */
  flat = 'Flat'
}

export interface IVisualProps {
  /** The style of the basemap */
  visualStyle: VisualType
}

export const VisualMenu = ({ visualStyle }: IVisualProps) => (
  <Div>
    <h2>Choose a visual style</h2>
    <p>{visualStyle}</p>
    <ul>
      <li>{VisualType.natural}</li>
      <li>{VisualType.relief}</li>
      <li>{VisualType.flat}</li>
    </ul>
  </Div>
)

const Div = styled.div`
  background: hsla(0, 50%, 50%, 0.5);

  /* flex child */
  flex: 0 auto;
`
