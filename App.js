import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  DeviceEventEmitter,
  AppState,
  BackHandler
} from 'react-native';
//import {createAppContainer} from 'react-navigation'

//import configAppNavigator from './src/router/AppNavigator'
import AppNavigator from './src/router/AppNavigator'

import {Provider} from 'react-redux'
import configureStore from './src/redux/store/store'
import {PersistGate} from 'redux-persist/integration/react'

const {store,persist}=configureStore()

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      color: '#f4511E'
    }
  }
  UNSAFE_componentDidMount(){
    DeviceEventEmitter.addListener('theme_change',params=>{
      this.setState({
        color:params
      })
    })
    AppState.addEventListener('change',this._handleAppStateChange)
    BackHandler.addEventListener('hardwareBackPress',this.onBackPress)
}
componentWillUnmount(){
  BackHandler.removeEventListener('hardwareBackPress',this.onBackPress)
}
onBackPress=()=>{

}
_handleAppStateChange=nextAppState=>{
  if (nextAppState=='inactive') {
    console.log('挂起')
  }else if(nextAppState=='active'){
    console.log('进入')
  }else{
    console.log('杀死')
  }
}
   render(){
     //const AppNavigator=createAppContainer(configAppNavigator(this.state.isLoggedIn))
     return(
       <Provider store={store}>
         <PersistGate loading={null} persistor={persist}>
          <View style={styles.app}>
          <AppNavigator/>
          </View>
         </PersistGate>
       </Provider>
       
     )
   }
 }

 const styles = StyleSheet.create({
   app:{
     backgroundColor:'#f6f6f6',
     flex:1
   }
 });
export default App;
