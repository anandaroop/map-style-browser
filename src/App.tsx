import * as React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            {() => <Redirect to="/natural/locator" />}
          </Route>

          <Route path="/:visual/:content">
            {props => {
              const {
                match: {
                  params: { visual, content }
                }
              } = props

              return (
                <Layout>
                  <Header>
                    <Title>Map style browser</Title>
                    <Download>Download PDF version</Download>
                  </Header>
                  <Content>
                    <Sidebar>
                      <StyleMenu>Choose a visual style</StyleMenu>
                      <ContentMenu>Choose a content style</ContentMenu>
                      <CurrentSelection>The map preview shows</CurrentSelection>
                      <FinePrint>
                        Styles shown here serve as a general guide only. Actual
                        styles will be tailored to the style and content
                        requirements of the project under consideration.
                      </FinePrint>
                    </Sidebar>
                    <Main>
                      {visual}-{content} image!
                    </Main>
                  </Content>
                </Layout>
              )
            }}
          </Route>
        </Switch>
      </Router>
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
