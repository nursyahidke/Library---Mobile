import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    AsyncStorage,
    
 } from 'react-native'
 import {
    Item,
    Input,
    Form,
    Label,
    Button,
    Thumbnail,
    Text,
 } from 'native-base'

 import BgImage from '../images/bg.png'
 import Logo from '../images/logo.png'

export default class LoginForm extends Component {
     constructor(props) {
         super(props)
         this.state = {
             username: '',
             password: '',
         }
     }

     Login = () => {
         fetch('https://libraryapps.herokuapp.com/auth/login', {
             method: "POST",
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 username: this.state.username,
                 password: this.state.password,
             })
         })
         .then((response)=> response.json())
         .then((res) => {
            if (res.success === true) {
                var username = res.message;

                AsyncStorage.setItem('username', username)

                this.props.navigation.navigate('Home')
            } else {
                alert(res.message)
            }
         })
         .done();
             this.props.navigation.navigate("Home")

     }

     render() {
         return (
             <View style={styles.container}>
                 <Image style={styles.BgImageStyle} source={BgImage} />
                 <View style={styles.LogoStyle}>
                     <Thumbnail square large source={Logo} />
                     <Text style={styles.textLogoStyle}>Welcome To Our Library!</Text>
                 </View>
                 <Form style={styles.formLoginStyle}>
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Username</Text>
                        </Label>
                        <Input 
                            style={styles.inputStyle}
                            onChangeText={(username) => this.setState({username})}
                            value={this.state.username}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputStyle}>Password</Text>
                        </Label>
                        <Input 
                            style={styles.inputStyle} 
                            secureTextEntry={true} 
                            onChangeText={(password) => this.setState({password})}
                            value={this.state.password}
                        />
                    </Item>
                 </Form>
                 <Button onPress={this.Login} 
                    block info style={styles.footerBottomStyle}>
                     <Text>Sign In</Text>
                 </Button>
                 <View style={styles.footersignUpStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text  
                        style={styles.signUpStyle}>
                            Don't have an account? Register now
                        </Text>
                    </TouchableOpacity>
                 </View>
             </View>
         )
     }
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
     },
     BgImageStyle: {
         flex: 1,
         resizeMode: 'cover',
         justifyContent: 'center',
         alignItems: 'center',
         position: 'absolute',
         width: '100%',
         height: '100%',

     },
     LogoStyle: {
         marginTop: 70,
         marginBottom: 80,
         alignItems: 'center',
         justifyContent: 'center'
     },
     textLogoStyle: {
         fontSize: 25,
         color: 'white',
     },
     formLoginStyle: {
         marginTop: -30,
         paddingLeft: 10,
         paddingRight: 30,
     },
     inputStyle: {
         color: 'white',
         marginBottom: 6,
         fontSize: 14,
     },
     footerBottomStyle: {
         marginTop: 26,
         paddingTop: 10,
         marginLeft: 16,
         marginRight: 16,
     },
     footersignUpStyle: {
         marginTop: 25,
         alignItems: 'center',
     },
     signUpStyle: {
         color: 'white',
         fontSize: 12,
     }
 })