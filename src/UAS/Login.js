import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../UAS/Logo';
import Form from '../UAS/Form';

export default class Login extends Component {

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
                <Form/>
				<TouchableOpacity onPress={() => this.props.navigation.navigate('Category')} style={styles.button}>
             <Text style={styles.buttonText}>Login</Text>
           </TouchableOpacity> 
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity  onPress={() => this.props.navigation.navigate('Signup')}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'white',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  button: {
    width:300,
    backgroundColor:'#DC143C',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});