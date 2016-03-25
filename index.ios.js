var Swiper = require('react-native-swiper')

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Component
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#046380',
    alignItems: 'center',
    paddingTop: 20
  },
  header: {
    color: '#fff',
    fontSize: 80,
    fontWeight: 'bold',
    fontFamily: 'Lobster',
    marginTop: 20 
  },
  wrapper: {

  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#EFECCA',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#EFECCA',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#EFECCA',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Helvetica Light',
    alignItems: 'center'
  },
  facebookLoginButton: {
  }
})

var welcome = React.createClass({
  render: function() {
    var _this = this;
    return (
      <View style={styles.container}>
      <View>
        <Text style={styles.header}>
        IMO
        </Text>
      </View>
      <Swiper style={styles.wrapper} width={350} height={400} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Welcome to IMO.{"\n"}{"\n"}Visit memorials of those important to you. </Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Screenshot 1</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Screenshot 2</Text>
        </View>
      </Swiper>
      <View>
      <FBLogin style={styles.facebookLoginButton}
        permissions={["email","user_friends"]}
        loginBehavior={FBLoginManager.LoginBehaviors.Native}
        onLogin={function(data){
          console.log("Logged in!");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLogout={function(){
          console.log("Logged out.");
          _this.setState({ user : null });
        }}
        onLoginFound={function(data){
          console.log("Existing login found.");
          console.log(data);
          _this.setState({ user : data.credentials });
        }}
        onLoginNotFound={function(){
          console.log("No user logged in.");
          _this.setState({ user : null });
        }}
        onError={function(data){
          console.log("ERROR");
          console.log(data);
        }}
        onCancel={function(){
          console.log("User cancelled.");
        }}
        onPermissionsMissing={function(data){
          console.log("Check permissions!");
          console.log(data);
        }}
      />
      </View>
      </View>
    )
  }
})

var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;

AppRegistry.registerComponent('IMO', () => welcome)

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

