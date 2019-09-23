import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
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

 import {Field, reduxForm} from 'redux-form'

 import BgImage from '../images/bg.png'
 import Logo from '../images/logo.png'

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    UserSignup = () => {
        fetch('https://libraryapps.herokuapp.com/auth/register', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
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
    }
     render() {
         return (
             <View style={styles.container}>
                 <Image style={styles.BgImageStyle} source={BgImage} />
                 <View style={styles.LogoStyle}>
                     <Thumbnail square large source={Logo} />
                     <Text style={styles.textLogoStyle}>Register Now To Our Library!</Text>
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
                            <Text style={styles.inputStyle}>Email</Text>
                        </Label>
                        <Input 
                            style={styles.inputStyle}
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.email} 
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
                 <Button 
                    onPress={this.UserSignup}
                    block info style={styles.footerBottomStyle}
                 >
                     <Text>Sign Up</Text>
                 </Button>
                 <View style={styles.footersignUpStyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} >
                        <Text 
                        style={styles.signUpStyle}>
                            Already have an account? Sig In
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
         marginTop: 0,
     },
     BgImageStyle: {
         flex: 1,
         resizeMode: 'cover',
         justifyContent: 'center',
         alignItems: 'center',
         position: 'absolute',
         width: '100%',
         height: '100%',
         marginTop: 0,

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

 export default reduxForm({
     form: "register"
 })(Signup)