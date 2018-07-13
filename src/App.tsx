import * as React from 'react'
import styled from './styles/styled-components'

import { ContentMenu, CurrentSelection, Main, VisualMenu } from './components'
import {
  ContentStyleKey,
  VisualStyleKey,
  ContentStyle,
  VisualStyle
} from './schema'

interface IProps {
  contentStyle?: ContentStyleKey
  visualStyle?: VisualStyleKey
}

interface IState {
  contentStyle: ContentStyleKey
  visualStyle: VisualStyleKey
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      contentStyle: props.contentStyle || ContentStyle.locator,
      visualStyle: props.visualStyle || VisualStyle.natural
    }
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
              contentStyle={contentStyle}
              setVisualStyle={this.setVisualStyle}
            />
            <ContentMenu
              visualStyle={visualStyle}
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

  private setVisualStyle = (visualStyle: VisualStyleKey) => {
    this.setState({ visualStyle })
  }

  private setContentStyle = (contentStyle: ContentStyleKey) => {
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
  padding: 1em;

  /* flex parent */
  display: flex;
  flex-direction: column;
  justify-content: ;
`

const Header = styled.header`
  /* appearance */
  padding-bottom: 1em;
  border-bottom: solid 1px #ddd;

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
  margin-right: 1em;

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

// const Foo = ({ bar = 'bar' }: { bar?: string }) => <h1>Foo, {bar}</h1>
