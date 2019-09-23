import React, { Component } from 'react';
import { Container, Header, Item, Icon, Button, Text } from 'native-base';
import {
    TextInput,
} from 'react-native'


export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
        }
    }

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <TextInput
            style={{height: 40}}
            placeholder="Search"
            onChangeText={(search) => this.setState({search})}
            value={this.state.search}
            />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}