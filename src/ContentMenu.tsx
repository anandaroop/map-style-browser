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
    <h2>Choose a content style</h2>
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
  background: hsla(90, 50%, 50%, 0.5);

  /* flex child */
  flex: 0 auto;
`
