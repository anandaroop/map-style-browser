import styled from './styles/styled-components'
import { NavLink } from 'react-router-dom'

export const StyledRouterNavLink = styled(NavLink)`
  display: block;

  &:hover {
    background: orange;
  }

  &.active {
    background: yellow;
  }
`
