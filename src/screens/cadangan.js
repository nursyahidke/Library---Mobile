import React, {Component} from 'react'
import { 
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    TextInput, 
} from 'react-native';
import { 
  Container, 
  DeckSwiper, 
  Content, 
  Item, 
  Card, 
  CardItem, 
  Left, 
  Thumbnail, 
  Body, 
  Footer, 
  FooterTab, 
  Button, 
  Input,
  Title,
  Icon } from 'native-base';

const cards = [
    {
      text: 'Card One',
      name: 'One',
      image: require('../images/1.jpg'),
    },
{
    text: 'Card One',
    name: 'One',
    image: require('../images/2.jpg'),
 }
 ];

export default class Home extends Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
            
        
        <Container>
            <Item>
            <Icon name="ios-search" />
            <TextInput 
              placeholder="Search"
              autoFocus={true}
            />
            </Item>
            <View>
            <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
            </View>
          


               <Content />
                <Footer>
                  <FooterTab style={{backgroundColor: "white"}}>
                    <Button >
                      <Icon name="home" />
                    </Button>
                    <Button>
                      <Icon name="book" />
                    </Button>
                    <Button>
                      <Icon name="clock" />
                    </Button>
                    <Button>
                      <Icon name="person" />
                    </Button>
                  </FooterTab>
                </Footer>
              </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 30,
      marginBottom: 10,
    },
    footerContainer: {
        marginBottom: -10,
    }
  });


  // import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar ,
//   TouchableOpacity,
//   Alert
// } from 'react-native';
// import {connect} from "react-redux";
// import {compose} from "redux";
// import { Field, reduxForm } from 'redux-form';

// import InputText from "../components/InputText";
// import {loginUser} from "../actions/auth.actions";
// import Logo from '../components/Logo';
// import Loader from "../components/Loader";
// import {Actions} from 'react-native-router-flux';


// const styles = StyleSheet.create({
//   container : {
//     backgroundColor:'#455a64',
//     flex: 1,
//     alignItems:'center',
//     justifyContent :'center'
//   },
//   signupTextCont : {
//   	flexGrow: 1,
//     alignItems:'flex-end',
//     justifyContent :'center',
//     paddingVertical:16,
//     flexDirection:'row'
//   },
//   signupText: {
//   	color:'rgba(255,255,255,0.6)',
//   	fontSize:16
//   },
//   signupButton: {
//   	color:'#ffffff',
//   	fontSize:16,
//   	fontWeight:'500'
//   },
//   button: {
//     width:300,
//     backgroundColor:'#1c313a',
//     borderRadius: 25,
//     marginVertical: 10,
//     paddingVertical: 13
//   },
//   buttonText: {
//     fontSize:16,
//     fontWeight:'500',
//     color:'#ffffff',
//     textAlign:'center'
//   },
//   errorText: {
//     color: "#ffffff",
//     fontSize:14,
//     paddingHorizontal:16,
//     paddingBottom: 8
// }
// });


// class Login extends Component {

// 	signup() {
// 		Actions.signup()
// 	}

//   loginUser = async (values) => {
//       try {
//           const response =  await this.props.dispatch(loginUser(values));
//           console.log(response);
//           if (!response.success) {
//               throw response;
//           }
//       } catch (error) {
//           let errorText;
//           if (error.message) {
//               errorText = error.message
//           }
//           errorText = error.responseBody;
//           Alert.alert(
//             'Login Error!',
//             errorText,
//             [
//               {
//                 text: 'Cancel',
//                 onPress: () => console.log('Cancel Pressed'),
//                 style: 'cancel',
//               },
//             ]
//           );
//       }
//   }

//   onSubmit = (values) => {
//       this.loginUser(values);
//   }

//   renderTextInput = (field) => {
//         const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
//         return (
//             <View>
//               <InputText
//                   onChangeText={onChange}
//                   maxLength={maxLength}
//                   placeholder={placeholder}
//                   keyboardType={keyboardType}
//                   secureTextEntry={secureTextEntry}
//                   label={label}
//                   {...restInput} />
//             {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
//             </View>
//         );
//   }

// 	render() {
//     const { handleSubmit, loginUser} = this.props;
//     console.log(loginUser);
// 		return(
// 			<View style={styles.container}>
//         {(loginUser && loginUser.isLoading) && <Loader />}
// 				<Logo/>
//         <Field
//             name="email"
//             placeholder="Email"
//             component={this.renderTextInput} />
//         <Field
//             name="password"
//             placeholder="Password"
//             secureTextEntry={true}
//             component={this.renderTextInput} />
//         <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
// 				<View style={styles.signupTextCont}>
// 					<Text style={styles.signupText}>Do not have an account yet?</Text>
// 					<TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
// 				</View>
// 			</View>
// 			)
// 	}
// }

// const validate = (values) => {
//     const errors = {};
//     if(!values.name) {
//         errors.name = "Name is required"
//     }
//     if(!values.email) {
//         errors.email = "Email is required"
//     }
//     if(!values.password) {
//         errors.password = "Name is required"
//     }
//     return errors;
// };

// mapStateToProps = (state) => ({
//     loginUser: state.authReducer.loginUser
// })

// mapDispatchToProps = (dispatch) => ({
//     dispatch
// });

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   reduxForm({
//     form: "login",
//     validate
//   })
// )(Login);

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar ,
//   TouchableOpacity,
//   Alert
// } from 'react-native';
// import { Field, reduxForm } from 'redux-form';
// import {connect} from "react-redux";
// import {compose} from "redux";

// import Logo from '../components/Logo';
// import InputText from "../components/InputText";
// import {createNewUser} from "../actions/auth.actions";
// import Loader from "../components/Loader";
// import {ErrorUtils} from "../utils/auth.utils";

// import {Actions} from 'react-native-router-flux';

// const styles = StyleSheet.create({
//   container : {
//     backgroundColor:'#455a64',
//     flex: 1,
//     alignItems:'center',
//     justifyContent :'center'
//   },
//   signupTextCont: {
//   	flexGrow: 1,
//     alignItems:'flex-end',
//     justifyContent :'center',
//     paddingVertical:16,
//     flexDirection:'row'
//   },
//   signupText: {
//   	color:'rgba(255,255,255,0.6)',
//   	fontSize:16
//   },
//   signupButton: {
//   	color:'#ffffff',
//   	fontSize:16,
//   	fontWeight:'500'
//   },
//   button: {
//     width:300,
//     backgroundColor:'#1c313a',
//     borderRadius: 25,
//     marginVertical: 10,
//     paddingVertical: 13
//   },
//   buttonText: {
//     fontSize:16,
//     fontWeight:'500',
//     color:'#ffffff',
//     textAlign:'center'
//   },
//   errorText: {
//       color: "#ffffff",
//       fontSize:14,
//       paddingHorizontal:16,
//       paddingBottom: 8
//   },
//   inputBox: {
//     width:300,
//     backgroundColor:'rgba(255, 255,255,0.2)',
//     borderRadius: 25,
//     paddingHorizontal:16,
//     fontSize:16,
//     color:'#ffffff',
//     marginVertical: 10
//   }
// });

// class Signup extends Component {

//   goBack() {
//       Actions.pop();
//   }

//   createNewUser = async (values) => {
//       try {
//           const response =  await this.props.dispatch(createNewUser(values));
//           if (!response.success) {
//               throw response;
//           }
//       } catch (error) {
//           const newError = new ErrorUtils(error, "Signup Error");
//           newError.showAlert();
//       }
//   }

//   onSubmit = (values) => {
//       this.createNewUser(values);
//   }

//   renderTextInput = (field) => {
//         const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
//         return (
//             <View>
//               <InputText
//                   onChangeText={onChange}
//                   maxLength={maxLength}
//                   placeholder={placeholder}
//                   keyboardType={keyboardType}
//                   secureTextEntry={secureTextEntry}
//                   label={label}
//                   {...restInput} />
//             {(touched && error) && <Text style={styles.errorText}>{error}</Text>}
//             </View>
//         );
//   }

// 	render() {
//     const { handleSubmit, createUser} = this.props;
// 		return(
// 			<View style={styles.container}>
//         {createUser.isLoading && <Loader />}
// 				<Logo/>
//         <Field
//             name="name"
//             placeholder="Name"
//             component={this.renderTextInput} />
//         <Field
//             name="email"
//             placeholder="Email"
//             component={this.renderTextInput} />
//         <Field
//             name="password"
//             placeholder="Password"
//             secureTextEntry={true}
//             component={this.renderTextInput} />
//         <TouchableOpacity style={styles.button} onPress={handleSubmit(this.onSubmit)}>
//           <Text style={styles.buttonText}>Signup</Text>
//         </TouchableOpacity>
// 				<View style={styles.signupTextCont}>
// 					<Text style={styles.signupText}>Already have an account?</Text>
// 					<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
// 				</View>
// 			</View>
// 			)
// 	}
// }

// const validate = (values) => {
//     const errors = {};
//     if(!values.name) {
//         errors.name = "Name is required"
//     }
//     if(!values.email) {
//         errors.email = "Email is required"
//     }
//     if(!values.password) {
//         errors.password = "Name is required"
//     }
//     return errors;
// };

// mapStateToProps = (state) => ({
//     createUser: state.authReducer.createUser
// })

// mapDispatchToProps = (dispatch) => ({
//     dispatch
// });

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   reduxForm({
//     form: "register",
//     validate
//   })
// )(Signup);










