import * as React from 'react'
import styled from '../styles/styled-components'

export enum VisualType {
  natural = 'Natural',
  relief = 'Relief',
  flat = 'Flat'
}

export interface IVisualProps {
  visualStyle: VisualType
}

export const VisualMenu = ({ visualStyle }: IVisualProps) => (
  <Div>
    <h2>Choose a visual style</h2>
    <p>{visualStyle}</p>
  </Div>
)

const Div = styled.div`
  background: hsla(0, 50%, 50%, 0.5);

  /* flex child */
  flex: 0 auto;
`
