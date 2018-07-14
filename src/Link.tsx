import styled from './styles/styled-components'
import { NavLink } from 'react-router-dom'

export const StyledRouterNavLink = styled(NavLink)`
  display: block;
  padding: ${p => p.theme.spacing.half};
  border-radius: ${p => p.theme.spacing.half};
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
