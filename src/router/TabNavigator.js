import React,{Component} from 'react'
import { 
    createStackNavigator
} from 'react-navigation-stack'
import { createBottomTabNavigator,TabBarBottom } from 'react-navigation-tabs'

import { Image, StyleSheet} from 'react-native'

import HomeScene from '../scene/HomeScene'
import XrkScene from '../scene/XrkScene'
import OwnerScene from '../scene/OwnerScene'

const homeStackNavigator = createStackNavigator({
    Home:{
        screen:HomeScene,
        navigationOptions:{
            
        }
    }
});
 
const xrkStackNavigator = createStackNavigator({
    Xrk:{
        screen:XrkScene,
        navigationOptions:{
            headerTitle:'向日葵',
            headerStyle:{
                backgroundColor:'#f2f2f2',
                shadowColor:'#f2f2f2'
            },
            headerTintColor:'#000',
        }
    }
});

const ownerStackNavigator = createStackNavigator({
    Owner:{
        screen:OwnerScene,
        navigationOptions:{
            headerShown:false
        }
    }
});

export default createBottomTabNavigator(
    {
        Home:{
            screen:homeStackNavigator,
            navigationOptions:()=>(
                {
                    tabBarLabel:'首页',
                    tabBarIcon:({focused})=>{
                        var imageIcon=require('../images/home/icon-index.png')
                        if (focused) {
                            imageIcon=require('../images/home/icon-index-on.png')
                        }
                        return <Image style={styles.tabIcon} source={imageIcon}/>
                    }
                }
            )
        },
        Xrk:{
            screen:xrkStackNavigator,
            navigationOptions:()=>(
                {
                    tabBarLabel:' 向日葵',
                    tabBarIcon:({focused})=>{
                        var imageIcon=require('../images/home/icon-xrk.png')
                        if (focused) {
                            imageIcon=require('../images/home/icon-xrk-on.png')
                        }
                        return <Image style={styles.tabIcon} source={imageIcon}/>
                    }
                }
            )
        },
        Owner:{
            screen:ownerStackNavigator,
            navigationOptions:()=>(
                {
                    headerShown:false,
                    tabBarLabel:'我的',
                    tabBarIcon:({focused})=>{
                        var imageIcon=require('../images/home/icon-me.png')
                        if (focused) {
                            imageIcon=require('../images/home/icon-me-on.png')
                        }
                        return <Image style={styles.tabIcon} source={imageIcon}/>
                    }
                }
            )
        }
    },
    {
        initialRouteName: "Home",
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#469df8',
            //activeBackgroundColor: "#f5f5f5",
            inactiveTintColor: '#a5aab2',
            // inactiveBackgroundColor: "#fff",
            showLabel: true,
            showIcon: true,
            style: {
                borderTopColor:'#ddd'
            },
            labelStyle:{
                fontSize:14
            }
        },
        //是否在切换tab页时使用动画
        animationEnabled: true,
        //是否允许滑动切换tab页
        swipeEnabled: true,
        //是否懒加载
        lazy: true,
    }
)

var styles=StyleSheet.create({
    tabIcon:{
        width: 23, height: 24
    }
})