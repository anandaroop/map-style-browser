import * as React from 'react'
import styled from './styles/styled-components'

import {
  ContentMenu,
  ContentType,
  CurrentSelection,
  Main,
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
          <Download href="http://styles.anandarooproy.com/downloads/Map%20Style%20Book.pdf.zip">
            Download PDF version
          </Download>
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
            <Caveat>
              Styles shown here serve as a general guide only. Actual styles
              will be tailored to the style and content requirements of the
              project under consideration.
            </Caveat>
          </Sidebar>
          <Main visualStyle={visualStyle} contentStyle={contentStyle} />
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
  background: white;
  z-index: 1;
`

const Download = styled.a`
  position: absolute;
  right: 10px;
  padding-right: 30px;

  background-image: url(http://wwwimages.adobe.com/content/dam/acom/en/legal/images/badges/Adobe_PDF_file_icon_24x24.png);
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: 20px;

  color: inherit;
  text-decoration: none;

  &:hover {
    color: blue;
    text-decoration: underline;
  }

  /* responsive */
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
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

const Caveat = styled.div`
  color: #999;
  font-size: 0.8em;
  line-height: 150%;
  margin: 1em;
  /* flex child */
  flex: 0 auto;
`

export default App
