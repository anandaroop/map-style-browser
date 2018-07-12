import * as React from 'react'
import styled, { css } from '../styles/styled-components'

import { ContentStyleKey, VisualStyleKey } from '../schema'

type Key = ContentStyleKey | VisualStyleKey

interface IProps {
  onClick: (style: Key) => void
  value: Key
  current: Key
  children?: string
}

export const Link = ({ value, onClick, current, children }: IProps) => (
  <A
    active={current === value}
    onClick={() => {
      onClick(value)
    }}
  >
    {children}
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
