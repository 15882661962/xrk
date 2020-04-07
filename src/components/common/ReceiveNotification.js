import {NativeModules,NativeAppEventEmitter, NativeEventEmitter} from 'react-native';
NativeAppEventEmitter.addListener(
    'ReceiveNotification',
    (message)=>{
        console.log("content:"+JSON.stringify(message));
    }
)
// var nativeBridge=NativeModules.NotificationManager;
// const NativeModule=new NativeEventEmitter(nativeBridge);
// NativeModule.addListener(
//     'ReceiveNotification',
//     (message)=>{
//         console.log("content:"+JSON.stringify(message));
//     }
// )
// NativeModule.addListener(
//     'DidReceiveChatRoom',
//     (message)=>{
//         this.props.navigation.navigate('PublicChatRoom')
//     }
// )