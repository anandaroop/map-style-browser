import * as React from 'react'
import styled, { css } from '../styles/styled-components'

export enum VisualType {
  /** Full-color land cover relief background */
  natural = 'Natural',

  /** Monochrome shaded relief background */
  relief = 'Relief',

  /** Flat tint background */
  flat = 'Flat'
}

export interface IProps {
  /** The style of the basemap */
  visualStyle: VisualType
  setVisualStyle: (visualStyle: VisualType) => void
}

export const VisualMenu = (props: IProps) => (
  <Div>
    <H2>Choose a visual style</H2>
    <Nav>
      <Link {...props} name={VisualType.natural} />
      <Link {...props} name={VisualType.relief} />
      <Link {...props} name={VisualType.flat} />
    </Nav>
  </Div>
)

const Div = styled.div`
  /* flex child */
  flex: 0 auto;
`

const H2 = styled.h2`
  font-weight: 300;
  color: #777;
`

const Nav = styled.nav`
  list-style-type: none;
`

const Link = ({
  name,
  setVisualStyle,
  visualStyle
}: IProps & { name: VisualType }) => (
  <A
    active={visualStyle === name}
    onClick={() => {
      setVisualStyle(name)
    }}
  >
    {name}
  </A>
)
const A = styled.a`
  display: block;
  padding: 0.5em;
  border-radius: 0.5em;
  cursor: pointer;

  &:hover {
    background: #ffc;
  }

  ${(p: { active?: boolean }) =>
    p.active &&
    css`
      background: #eed;
      font-weight: bold;
    `};
`
