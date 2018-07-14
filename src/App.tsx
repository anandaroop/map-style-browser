import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import { Map } from './Map'
import { CurrentSelection } from './CurrentSelection'
import { VisualMenu } from './VisualMenu'
import { ContentMenu } from './ContentMenu'

class App extends React.Component {
  public render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" exact={true}>
              {() => <Redirect to="/natural/locator" />}
            </Route>

            <Route path="/:visual/:content">
              {props => {
                const {
                  match: { params }
                } = props

                return (
                  <Layout>
                    <Header>
                      <Title>Map style browser</Title>
                      <Download href="/downloads/Map%20Style%20Book.pdf.zip">
                        Download PDF version
                      </Download>
                    </Header>
                    <Content>
                      <Sidebar>
                        <VisualMenu
                          visualStyle={params.visual}
                          contentStyle={params.content}
                        />
                        <ContentMenu
                          visualStyle={params.visual}
                          contentStyle={params.content}
                        />
                        <CurrentSelection
                          visualStyle={params.visual}
                          contentStyle={params.content}
                        />
                        <FinePrint>
                          Styles shown here serve as a general guide only.
                          Actual styles will be tailored to the style and
                          content requirements of the project under
                          consideration.
                        </FinePrint>
                      </Sidebar>
                      <Map
                        visualStyle={params.visual}
                        contentStyle={params.content}
                      />
                    </Content>
                  </Layout>
                )
              }}
            </Route>
          </Switch>
        </ThemeProvider>
      </Router>
    )
  }
}

const Layout = styled.div`
  /* typography */
  font-family: ${p => p.theme.font.family};
  font-weight: ${p => p.theme.font.weight.normal};

  /* fullscreen */
  position: absolute;
  height: 100%;
  width: 100%;
  /* margin: ${p => p.theme.spacing.single}; */

  /* flex parent */
  display: flex;
  flex-direction: column;
  justify-content: ;
`

const Header = styled.header`
  /* appearance */
  border-bottom: solid 1px #ddd;
  padding: ${p => p.theme.spacing.single} 0;

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
  right: ${p => p.theme.spacing.single};
  padding-right: 25px;
  background-image: url(http://wwwimages.adobe.com/content/dam/acom/en/legal/images/badges/Adobe_PDF_file_icon_24x24.png);
  background-repeat: no-repeat;
  background-position-x: right;
  background-size: 20px;
`

const Content = styled.div`
  /* flex child */
  flex: 1 auto;

  /* flex parent */
  display: flex;
  flex-direction: row;
`

const Sidebar = styled.aside`
  padding: ${p => p.theme.spacing.single};

  /* flex child */
  flex: 0 30%;

  /* flex parent */
  display: flex;
  flex-direction: column;
`

const FinePrint = styled.div`
  color: #999;
  font-size: 0.8em;
  /* line-height: 150%; */

  /* flex child */
  flex: 0 auto;
`

export default App
