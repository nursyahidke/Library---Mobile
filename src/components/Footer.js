import React, {Component} from 'react';
import {Button, Text, Icon, Footer, FooterTab, Container, Content} from 'native-base';


export default class FooterScreens extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
          <Container>
            <Content />
            <Footer>
              <FooterTab>
                <Button
                  light
                  vertical
                  // active={props.navigationState.index == 0}
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <Icon name="home" />
                  <Text>Home</Text>
                </Button>
                <Button
                  light
                  vertical
                  // active={props.navigationState.index == 1}
                  onPress={() => this.props.navigation.navigate('History')}>
                  <Icon type="FontAwesome" name="history" />
                  <Text>History</Text>
                </Button>
                <Button
                  light
                  vertical
                  // active={props.navigationState.index == 2}
                  onPress={() => this.props.navigation.navigate('Profile')}>
                  <Icon type="FontAwesome" name="persons" />
                  <Text>Profile</Text>
                </Button>
                <Button
                  light
                  vertical
                  // active={props.navigationState.index == 2}
                  onPress={() => this.props.navigation.navigate('Donate')}>
                  <Icon type="FontAwesome" name="book" />
                  <Text>Genre</Text>
                </Button>
                <Button
                  light
                  vertical
                  // active={props.navigationState.index == 2}
                  onPress={() => this.props.navigation.navigate('Details')}>
                  <Icon type="FontAwesome" name="app" />
                  <Text>Detail</Text>
                </Button>
              </FooterTab>
            </Footer>
          </Container>
          )
    
    }
}
