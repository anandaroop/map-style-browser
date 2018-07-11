import * as React from 'react'
import styled from './styles/styled-components'

import {
  ContentMenu,
  ContentType,
  CurrentSelection,
  VisualMenu,
  VisualType
} from './components'

interface IState {
  contentStyle: ContentType
  visualStyle: VisualType
}

class App extends React.Component<{}, IState> {
  public state = {
    contentStyle: ContentType.locator,
    visualStyle: VisualType.natural
  }

  public render() {
    const { visualStyle, contentStyle } = this.state

    return (
      <Layout>
        <Header>
          <Title>Map style browser</Title>
          <Download>Download PDF version</Download>
        </Header>
        <Content>
          <Sidebar>
            <VisualMenu
              visualStyle={visualStyle}
              setVisualStyle={this.setVisualStyle}
            />
            <ContentMenu
              contentStyle={contentStyle}
              setContentStyle={this.setContentStyle}
            />
            <CurrentSelection
              visualStyle={visualStyle}
              contentStyle={contentStyle}
            />
            <FinePrint>
              Styles shown here serve as a general guide only. Actual styles
              will be tailored to the style and content requirements of the
              project under consideration.
            </FinePrint>
          </Sidebar>
          <Main>Map image!</Main>
        </Content>
      </Layout>
    )
  }

  private setVisualStyle = (visualStyle: VisualType) => {
    this.setState({ visualStyle })
  }

  private setContentStyle = (contentStyle: ContentType) => {
    this.setState({ contentStyle })
  }
}

const Layout = styled.div`
  /* fullscreen */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  /* flex parent */
  display: flex;
  flex-direction: column;
  justify-content: ;
`

const Header = styled.header`
  background: yellow;

  /* appearance */
  border-bottom: solid 1px #ddd;
  padding: 1em 0;

  /* flex child */
  flex: 0 auto;

  /* flex parent */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  font-weight: 300;
`

const Download = styled.a`
  position: absolute;
  right: 0;
`

const Content = styled.div`
  /* flex child */
  flex: 1 auto;

  /* flex parent */
  display: flex;
  flex-direction: row;
`

const Sidebar = styled.aside`
  overflow: auto;

  /* flex child */
  flex: 0 30%;

  /* flex parent */
  display: flex;
  flex-direction: column;
`

const FinePrint = styled.div`
  margin: 1em;
  /* flex child */
  flex: 0 auto;
`

const Main = styled.main`
  background: purple;

  /* flex child */
  flex: 1 auto;
`

export default App
