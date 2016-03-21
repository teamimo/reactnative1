var Swiper = require('react-native-swiper')
// es6
// import Swiper from 'react-native-swiper'

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

var swiper = React.createClass({
  render: function() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
})

AppRegistry.registerComponent('IMO', () => swiper)


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */
// 'use strict';
// import React, {
//   AppRegistry,
//   Component,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// var REQUEST_URL = 'http://staging.imo.com/service_check.php';

// var FBLogin = require('react-native-facebook-login');
// var FBLoginManager = require('NativeModules').FBLoginManager;

// var Login = React.createClass({
//   render: function() {
//     var _this = this;
//     return (
//       <FBLogin style={{ marginBottom: 10, }}
//         permissions={["email","user_friends"]}
//         loginBehavior={FBLoginManager.LoginBehaviors.Native}
//         onLogin={function(data){
//           console.log("Logged in!");
//           console.log(data);
//           _this.setState({ user : data.credentials });
//         }}
//         onLogout={function(){
//           console.log("Logged out.");
//           _this.setState({ user : null });
//         }}
//         onLoginFound={function(data){
//           console.log("Existing login found.");
//           console.log(data);
//           _this.setState({ user : data.credentials });
//         }}
//         onLoginNotFound={function(){
//           console.log("No user logged in.");
//           _this.setState({ user : null });
//         }}
//         onError={function(data){
//           console.log("ERROR");
//           console.log(data);
//         }}
//         onCancel={function(){
//           console.log("User cancelled.");
//         }}
//         onPermissionsMissing={function(data){
//           console.log("Check permissions!");
//           console.log(data);
//         }}
//       />
//     );
//   }
// });




// class FirstProject extends Component {
    
//   constructor(props) {
//     super(props); 
//     this.state = {
//       data: null,
//     };
//   }

//   renderLoadingView() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           Loading data...
//         </Text>
//       </View>
//     );
//   }
    

//   renderData(data) {
//     console.log(data._bodyText);
//     return (
//       <View style={styles.container}>
//           <Text>{data._bodyText}</Text>
//       </View>
//     );
//   }
    
//   render() {

//     if (!this.state.data) {
//       return this.renderLoadingView();
//     }

//     //var movie = this.state.data;
//     return this.renderData(this.state.data);
    
//   }

//   fetchData() {
//     fetch(REQUEST_URL)
//       //.then((response) => response.json())
//       .then((responseData) => {
//         this.setState({
//           data: responseData,
//         });
//       })
//       .done();
//   }
    
//   componentDidMount() {
//     this.fetchData();
//   }


// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   }
// });

// AppRegistry.registerComponent('FirstProject', () => Login);

