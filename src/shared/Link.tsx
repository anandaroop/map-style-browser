import * as React from 'react'
import styled, { css } from '../styles/styled-components'

import { ContentStyleKey, VisualStyleKey } from '../schema'

type Key = ContentStyleKey | VisualStyleKey

interface IProps {
  onClick: (style: Key) => void
  value: Key
  current: Key
}

export const Link = ({ value, onClick, current }: IProps) => (
  <A
    active={current === value}
    onClick={() => {
      onClick(value)
    }}
  >
    {value}
  </A>
)

const A = styled.a`
  display: block;
  margin: 0.5em 0;
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
