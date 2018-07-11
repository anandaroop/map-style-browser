import * as React from 'react'
import styled from 'styled-components'

interface IState {
  contentStyle: string
  visualStyle: string
}

class App extends React.Component<{}, IState> {
  public state = {
    contentStyle: 'simple',
    visualStyle: 'natural'
  }

  constructor(props: {}) {
    super(props)
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
            <StyleMenu>Choose a visual style ({visualStyle})</StyleMenu>
            <ContentMenu>Choose a content style ({contentStyle})</ContentMenu>
            <CurrentSelection>The map preview shows</CurrentSelection>
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
}

const Layout = styled.div`
  /* fullscreen */
  position: absolute;
  height: 100%;
  width: 100%;

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
  background: gray;

  /* flex child */
  flex: 1 auto;

  /* flex parent */
  display: flex;
  flex-direction: row;
`

const Sidebar = styled.aside`
  background: orange;

  /* flex child */
  flex: 0 30%;

  /* flex parent */
  display: flex;
  flex-direction: column;
`

const StyleMenu = styled.div`
  background: hsla(0, 50%, 50%, 0.5);

  /* flex child */
  flex: 0 auto;
`

const ContentMenu = styled.div`
  background: hsla(90, 50%, 50%, 0.5);

  /* flex child */
  flex: 0 auto;
`

const CurrentSelection = styled.div`
  background: hsla(180, 50%, 50%, 0.5);

  /* flex child */
  flex: 1 auto;
`

const FinePrint = styled.div`
  background: hsla(270, 50%, 50%, 0.5);

  /* flex child */
  flex: 0 auto;
`

const Main = styled.main`
  background: purple;

  /* flex child */
  flex: 1 auto;
`

export default App
