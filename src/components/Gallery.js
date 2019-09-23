import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    FlatList,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native'
import {connect} from 'react-redux'
import axios from 'axios'

import {getAllBooks} from '../public/actions/Books'

class Gallery extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: []
        }
    }

    componentDidMount() {
      return fetch('https://libraryapps.herokuapp.com/api/books')
              .then((res) =>  res.json())
              .then((data) => {
                console.log(data)
                this.setState({
                  isLoading: false,
                  data: data,
                })
              })
              .catch((error) => {console.log(error)})
    }


    render() {
      
      if (this.state.isLoading) {
        return (
          <View>
            <ActivityIndicator />
          </View>
        )
      } else {
       let data = this.state.data.map((item, key) => {
          return <View>
                  <View style={styles.container}>
                    <FlatList style={styles.list}
                      contentContainerStyle={styles.listContainer}
                      data={this.state.data}
                      horizontal={false}
                      numColumns={2}
                      keyExtractor= {(item) => {
                        return item.id;
                      }}
                      ItemSeparatorComponent={() => {
                        return (
                          <View style={styles.separator}/>
                        )
                      }}
                      renderItem={(post) => {
                        const item = post.item;
                        return (
                          <View style={styles.card}>
                            <View style={styles.imageContainer}>
                              <Image style={styles.cardImage} source={{uri:item.image}}/>
                            </View>
                            <View style={styles.cardContent}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('Details')}>

                              <Text style={styles.title}>{item.title}</Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        )
                      }}/>
                  </View>
          </View>
       })
        
        return (
          <View>{data}</View>
       );
      }

   }
}

    export default Gallery
     
    const styles = StyleSheet.create({
      container:{
        flex:1,
        marginTop:0,
      },
      list: {
        paddingHorizontal: 10,
      },
      listContainer:{
        alignItems:'center'
      },
      separator: {
        marginTop: 10,
      },
      card:{
        marginVertical: 8,
        backgroundColor:"white",
        flexBasis: '45%',
        marginHorizontal: 10,
      },
      cardContent: {
        paddingVertical: 17,
        justifyContent: 'space-between',
      },
      cardImage:{
        flex: 1,
        height: 150,
        width: null,
        borderRadius: 5,
      },
      imageContainer:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
     
        elevation: 9,
      },

      title:{
        fontSize:18,
        flex:1,
        color:"#778899"
      },
      count:{
        fontSize:18,
        flex:1,
        color:"#B0C4DE"
      },
    });