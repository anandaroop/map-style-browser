import * as React from 'react'
import styled from './styles/styled-components'
import { StyledRouterNavLink } from './Link'

import { CONTENT_STYLES, ContentStyle, VisualStyle } from './types'

interface IProps {
  visualStyle: VisualStyle
  contentStyle: ContentStyle
}

export const ContentMenu = ({ visualStyle, contentStyle }: IProps) => (
  <Div>
    <H2>Choose a content style</H2>
    <nav>
      <StyledRouterNavLink to={`/${visualStyle}/${ContentStyle.locator}`}>
        {CONTENT_STYLES[ContentStyle.locator].displayName}
      </StyledRouterNavLink>

      <StyledRouterNavLink to={`/${visualStyle}/${ContentStyle.entities}`}>
        {CONTENT_STYLES[ContentStyle.entities].displayName}
      </StyledRouterNavLink>

      <StyledRouterNavLink to={`/${visualStyle}/${ContentStyle.phenomena}`}>
        {CONTENT_STYLES[ContentStyle.phenomena].displayName}
      </StyledRouterNavLink>
    </nav>
  </Div>
)

const Div = styled.div`
  padding-top: ${p => p.theme.spacing.single};
  margin-bottom: ${p => p.theme.spacing.single};
  border-top: solid 1px #eee;

  /* flex child */
  flex: 0 auto;
`

const H2 = styled.h2`
  color: #777;
  font-weight: ${p => p.theme.font.weight.normal};
  margin-bottom: ${p => p.theme.spacing.single};
`
