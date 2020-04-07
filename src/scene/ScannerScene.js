import React,{Component} from 'react'
import {RNCamera} from 'react-native-camera'
import { View, Animated, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { Easing } from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'

const {width,height}=Dimensions.get('window')

class OwnerScanner extends Component{
    constructor(props){
        super(props)
        this.state={
            moveAni:new Animated.Value(0),
            flashMode:false,
            showCamera:true
        }
        this.isBarcodeRead=false
    }
    
    componentDidMount(){
        this.startAnimation();
        this.props.navigation.addListener('didFocus',()=>
        this.setState({showCamera:true}))
    }

    startAnimation=()=>{
        this.state.moveAni.setValue(-200)
        Animated.timing(this.state.moveAni,{
            toValue:0,
            duration:1500,
            easing:Easing.linear
        })
        .start(()=>this.startAnimation())
    }

    onBarCodeRead=result=>{
        if (!this.isBarcodeRead) {
            this.isBarcodeRead=true
            this.setState({showCamera:false})
            this.props.navigation.navigate('ScannerResult',{
                imgUri:null,
                scannerResult:JSON.stringify(result)
            })
        }
    }

    takePicture=async()=>{
        if (this.camera) {
            const options={quality:0.5,base64:true}
            const data=await this.camera.takePictureAsync(options)
            this.setState({showCamera:false})
            this.props.navigation.push('ScannerResult',{
                imgUri:data.uri,
                scannerResult:''
            })
        }
    }

    changeFlashMode(){
        this.setState({
            flashMode:!this.state.flashMode
        })
    }

    render(){
        return(
            <View style={styles.container}>
                {this.state.showCamera?
                (
                    <RNCamera
                        ref={ref=>{
                            this.camera=ref
                        }}
                        style={styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={this.state.flashMode?1:0}
                        onBarCodeRead={this.onBarCodeRead}
                    >
                        <View style={styles.rectangleContainer}>
                            <View style={styles.reactangle}/>
                            <Animated.View
                            style={[
                                styles.border,
                                {transform:[{translateY:this.state.moveAni}]}
                            ]}
                            />
                            <View style={{width:width,height:height,position:'absolute',top:0}}>
                                <View style={[styles.op,styles.optop]}/>
                                <View style={[styles.op,styles.opleft]}/>
                                <View style={[styles.op,styles.opright]}/>
                                <View style={[styles.op,styles.opbottom]}/>
                            </View>
                            <Text style={styles.reactangleText}>
                                将二维码放入框内，即可自动扫描
                            </Text>
                            {/* <View style={{flexDirection:'row',marginTop:15}}>
                                <TouchableOpacity
                                onPress={()=>this.props.navigation.goBack()}
                                >
                                    <Image source={require('../images/home/icon-back.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={this.takePicture.bind(this)}
                                style={{marginLeft:25}}
                                >
                                    <Image source={require('../images/home/icon-back.png')}/>
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={this.changeFlashMode.bind(this)}
                                >
                                    <Image source={require('../images/home/icon-back.png')}/>
                                </TouchableOpacity>
                            </View> */}
                        </View>
                    </RNCamera>
                )
                :
                (<View/>)}
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
      },
      rectangleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent'
      },
      reactangle: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: '#00FF00',
        backgroundColor: 'transparent',
      },
      reactangleText: {
        flex: 0,
        color: '#fff',
        marginTop: 40
      },
      border: {
        flex: 0,
        width: 195,
        height: 2,
        backgroundColor: '#00FF00'
      },
      op:{
          backgroundColor:'#00000070',
          position:'absolute',
      },
      optop:{
          width:width,
          height:(height-350)/2,
          top:0,
      },
      opbottom:{
        width:width,
        top:(height-350)/2+200,
        bottom:0,
      },
      opleft:{
        top:(height-350)/2,
        width:(width-200)/2,
        height:200,
        left:0,
      },
      opright:{
        top:(height-350)/2,
        width:(width-200)/2,
        height:200,
        right:0,
      }
})

export default OwnerScanner