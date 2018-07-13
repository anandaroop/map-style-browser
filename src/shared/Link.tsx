import { NavLink } from 'react-router-dom'
import styled from '../styles/styled-components'

export const StyledRouterLink = styled(NavLink)`
  display: block;
  padding: 0.5em;
  border-radius: 0.5em;
  text-decoration: none;
  color: black;

  &:hover {
    background: #ffc;
  }

  &.active {
    background: #eed;
    font-weight: bold;
  }
`
