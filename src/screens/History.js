import React, {Component} from 'react';
import {
  View, 
  Image, 
  Text, 
  StyleSheet,
  } from 'react-native';
import {
  Footer,
  FooterTab,
  Icon,
  Button,
  Content,
} from 'native-base'
import historyImg from '../images/1.jpg';

class History extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.screen}>
        <Image source={historyImg} />
        <Text style={styles.notice}>The History is Empty!</Text>
        <Content />
          <Footer>
                  <FooterTab style={{backgroundColor: "white"}}>
                    <Button onPress={() => this.props.navigation.navigate('Home')} >
                      <Icon name="home" />
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('Details')} >
                      <Icon name="book" />
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('History')} >
                      <Icon name="clock" />
                    </Button>
                    <Button onPress={() => this.props.navigation.navigate('Profile')} >
                      <Icon name="person" />
                    </Button>
                  </FooterTab>
                </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notice: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 18,
    lineHeight: 23,
    color: '#303031',
  },
});

export default History;
