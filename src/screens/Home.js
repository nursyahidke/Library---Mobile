import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Item,
  Input,
  Icon,
  Title,
  Body,
  Card,
  CardItem,
  Left,
  Footer,
  FooterTab,
  Button,
  Content
} from 'native-base';
import {Rating} from 'react-native-ratings';

import BookGenre from '../components/Genre';
import Galery from '../components/Gallery'

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Container style={styles.container}>
            <Body style={styles.brand}>
              <Title style={styles.headerText}>Library App</Title>
            </Body>
            <Item rounded style={styles.searchBar}>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
            </Item>
          </Container>
          <ScrollView
            horizontal={true}
            style={styles.genreContainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <TouchableOpacity>
              <BookGenre name="Novel" />
            </TouchableOpacity>
            <TouchableOpacity>
              <BookGenre name="Action" />
            </TouchableOpacity>
            <TouchableOpacity>
              <BookGenre name="Romance" />
            </TouchableOpacity>
            <TouchableOpacity>
              <BookGenre name="Motivation" />
            </TouchableOpacity>
          </ScrollView>
          
            <Text style={styles.popular}>Popular Books</Text>
            <View style={{flex: 1, height: 250}}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Details')}>
                  <Card style={styles.cardBook}>
                    <CardItem cardBody>
                      <Image
                        style={styles.cardBookImage}
                        source={{
                          uri:
                            'https://images-na.ssl-images-amazon.com/images/I/51%2BGySc8ExL._SX333_BO1,204,203,200_.jpg',
                        }}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Text>Ratings</Text>
                      </Left>
                    </CardItem>
                    <CardItem style={styles.rating}>
                      <Left>
                        <Rating
                          type="star"
                          startingValue={5}
                          ratingCount={5}
                          imageSize={13}
                        />
                      </Left>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Details')}>
                  <Card style={styles.cardBook}>
                    <CardItem cardBody>
                      <Image
                        style={styles.cardBookImage}
                        source={{
                          uri:
                            'https://images-na.ssl-images-amazon.com/images/I/51%2BGySc8ExL._SX333_BO1,204,203,200_.jpg',
                        }}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Text>Ratings</Text>
                      </Left>
                    </CardItem>
                    <CardItem style={styles.rating}>
                      <Left>
                        <Rating
                          type="star"
                          startingValue={5}
                          ratingCount={5}
                          imageSize={13}
                        />
                      </Left>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Details')}>
                  <Card style={styles.cardBook}>
                    <CardItem cardBody>
                      <Image
                        style={styles.cardBookImage}
                        source={{
                          uri:
                            'https://images-na.ssl-images-amazon.com/images/I/51%2BGySc8ExL._SX333_BO1,204,203,200_.jpg',
                        }}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Text>Ratings</Text>
                      </Left>
                    </CardItem>
                    <CardItem style={styles.rating}>
                      <Left>
                        <Rating
                          type="star"
                          startingValue={5}
                          ratingCount={5}
                          imageSize={13}
                        />
                      </Left>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Details')}>
                  <Card style={styles.cardBook}>
                    <CardItem cardBody>
                      <Image
                        style={styles.cardBookImage}
                        source={{
                          uri:
                            'https://images-na.ssl-images-amazon.com/images/I/51%2BGySc8ExL._SX333_BO1,204,203,200_.jpg',
                        }}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Text>Ratings</Text>
                      </Left>
                    </CardItem>
                    <CardItem style={styles.rating}>
                      <Left>
                        <Rating
                          type="star"
                          startingValue={5}
                          ratingCount={5}
                          imageSize={13}
                        />
                      </Left>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Details')}>
                  <Card style={styles.cardBook}>
                    <CardItem cardBody>
                      <Image
                        style={styles.cardBookImage}
                        source={{
                          uri:
                            'https://images-na.ssl-images-amazon.com/images/I/51%2BGySc8ExL._SX333_BO1,204,203,200_.jpg',
                        }}
                      />
                    </CardItem>
                    <CardItem>
                      <Left>
                        <Text>Ratings</Text>
                      </Left>
                    </CardItem>
                    <CardItem style={styles.rating}>
                      <Left>
                        <Rating
                          type="star"
                          startingValue={5}
                          ratingCount={5}
                          imageSize={13}
                        />
                      </Left>
                    </CardItem>
                  </Card>
                </TouchableOpacity>
              </ScrollView>
            </View>
          
              <Galery />
          
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
        </ScrollView>        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginTop: 10,
  },
  brand: {
    position: 'absolute',
    width: 'auto',
    height: 51,
    left: 20,
    top: 32,
  },
  searchBar: {
    backgroundColor: '#E5E6EE',
    borderRadius: 15,
    position: 'absolute',
    width: 'auto',
    height: 35,
    left: 140,
    right: 29,
    top: 28,
  },
  headerText: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 18,
    color: '#303031',
  },
  genreContainer: {
    marginTop: -600,
    marginBottom: 20,
    marginHorizontal: 29,
  },
  popularContainer: {
    marginHorizontal: 29,
  },
  popular: {
    fontFamily: 'Airbnb Cereal App',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 23,
    color: '#303031',
  },
  bookContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 20,
    // paddingRight: 20,
  },
  cardBook: {
    marginRight: 28,
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 20,
    shadowColor: '#2c2c2c',
    shadowOffset: {height: 0, width: 4},
  },
  cardBookImage: {
    width: 145,
    height: 180,
    borderRadius: 5,
  },
  rating: {
    marginTop: -10,
  },
});

export default Home;
