import * as React from 'react'
import styled from './styles/styled-components'
import { StyledRouterNavLink } from './Link'

import {
  // CONTENT_STYLES,
  ContentStyle,
  VISUAL_STYLES,
  VisualStyle
} from './types'

interface IProps {
  visualStyle: VisualStyle
  contentStyle: ContentStyle
}

export const VisualMenu = ({ visualStyle, contentStyle }: IProps) => (
  <Div>
    <h2>Choose a visual style</h2>
    <nav>
      <StyledRouterNavLink to={`/${VisualStyle.natural}/${contentStyle}`}>
        {VISUAL_STYLES[VisualStyle.natural].displayName}
      </StyledRouterNavLink>

      <StyledRouterNavLink to={`/${VisualStyle.relief}/${contentStyle}`}>
        {VISUAL_STYLES[VisualStyle.relief].displayName}
      </StyledRouterNavLink>

      <StyledRouterNavLink to={`/${VisualStyle.flat}/${contentStyle}`}>
        {VISUAL_STYLES[VisualStyle.flat].displayName}
      </StyledRouterNavLink>
    </nav>
  </Div>
)

const Div = styled.div`
  background: hsla(0, 50%, 50%, 0.5);

  /* flex child */
  flex: 0 auto;
`
