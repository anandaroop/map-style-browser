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
    <H2>Choose a visual style</H2>
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
  margin-bottom: ${p => p.theme.spacing.single};

  /* flex child */
  flex: 0 auto;
`

const H2 = styled.h2`
  color: #777;
  font-weight: ${p => p.theme.font.weight.normal};
  margin-bottom: ${p => p.theme.spacing.single};
`
