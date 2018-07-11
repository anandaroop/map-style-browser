import * as React from 'react'
import styled, { css } from '../styles/styled-components'

export enum ContentType {
  /** Basic point and label features */
  simple = 'Simple locator',

  /** Areal features */
  entities = 'Historical entities',

  /** Miscellaneous spatial features such as trade routes, invasions */
  phenomena = 'Historical phenomena'
}

export interface IProps {
  /** The style of information overlaid on the basemap */
  contentStyle: ContentType
  setContentStyle: (contentStyle: ContentType) => void
}

export const ContentMenu = (props: IProps) => (
  <Div>
    <H2>Choose a content style</H2>
    <Nav>
      <Link {...props} name={ContentType.simple} />
      <Link {...props} name={ContentType.entities} />
      <Link {...props} name={ContentType.phenomena} />
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
  setContentStyle,
  contentStyle
}: IProps & { name: ContentType }) => (
  <A
    active={contentStyle === name}
    onClick={() => {
      setContentStyle(name)
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
