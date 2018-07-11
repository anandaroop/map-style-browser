import * as React from 'react'
import styled, { css } from 'styled-components'

import { ContentType } from '../components/ContentMenu'
import { VisualType } from '../components/VisualMenu'

interface IProps {
  onClick: (style: ContentType | VisualType) => void
  value: ContentType | VisualType
  current: ContentType | VisualType
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
