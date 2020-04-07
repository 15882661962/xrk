import React,{Component} from 'react';
import Video from 'react-native-video';
import { View, Text, BackHandler, TouchableOpacity, Button,StyleSheet, Image, Slider, Dimensions } from 'react-native';
const {width,height}=Dimensions.get('window')
const pause=require('../images/video/icon_pause.png')
const play=require('../images/video/icon-play.png')
const fullscreen=require('../images/video/fullscreen.png')
const exitscreen=require('../images/video/closescreen.png')

function formatMediaTime(duration){
    let min = Math.floor(duration / 60);
    let second = Math.floor(duration - min * 60);
    min = min >= 10 ? min : "0" + min;
    second = second >= 10 ? second : "0" + second;
    return min + ":" + second;
}

class VideoScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            rate:1,//速率
            volume:1,//声音
            muted:false,//静音
            resizeMode:'contain',
            duration:0.0,
            currentTime:0.0,
            paused:true,
            fullScreen:false,
            videoWidth:width,
            videoHeight:width*9/16,
            showBtn:false
        }
    }

    componentWillMount(){
        BackHandler.addEventListener('hardwareBackPress',this.onBackAndroid)
    }

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress',this.onBackAndroid)
    }

    onBackAndroid=()=>{
        this.props.navigation.goBack();
        return true;
    }

    onLoadStart=()=>{
        //加载开始
    }

    onLoad=(data)=>{
        //加载完
        this.setState({
            duration:data.duration,
            showBtn:true
        })
    }

    onProgress=(data)=>{
        //视频播放过程中每个间隔进度单位调用的回调函数
        this.setState({
            currentTime:data.currentTime,
        })
    }

    onEnd=()=>{
        //播放完
        this.setState({
            paused:true
        })
        this.video.seek(0)
    }

    onAudioBecomingNoisy=()=>{
        //音频变得嘈杂时的回调 - 应暂停视频
        this.setState({
            paused:true
        })
    }

    onAudioFocusChanged=(event:{hasAudioFocus:boolean})=>{
        //音频焦点丢失时的回调 - 如果焦点丢失则暂停
        this.setState({
            paused:!event.hasAudioFocus
        })
    }

    onError=()=>{
        //不能加载或出错
    }

    presentFullscreenPlayer=()=>{
        //全屏
    }

    onFullscreenPlayerWillPresent=()=>{
        //全屏启动前
    }

    onFullscreenPlayerWillPresent=()=>{
        //全屏启动后
    }

    onFullscreenPlayerWillPresent=()=>{
        //全屏停止前
    }

    onFullscreenPlayerWillPresent=()=>{
        //全屏停止后
    }

    presentFullscreenPlayer=()=>{
        this.video.presentFullscreenPlayer();
    }

    renderResizeModeControl(resizeMode){
        const isSelected=(this.state.resizeMode===resizeMode)

        return(
            <TouchableOpacity onPress={()=>{
                this.setState({resizeMode})
            }}>
                <Text style={[styles.controlOption,{fontWeight:isSelected?'bold':'normal'}]}>
                    {resizeMode}
                </Text>
            </TouchableOpacity>
        )
    }

    playbtn=()=>{
        if (this.state.paused) {
            var isShow=false
        }else{
            var isShow=true
        }
        this.setState({
            paused:!this.state.paused,
            showBtn:isShow
        })
    }

    bgbtn=()=>{
        if (this.state.paused) {
            var isShow=true
        }else{
            var isShow=false
        }
        this.setState({
            showBtn:!this.state.showBtn
        })
    }

    _onChange =(value)=>{
        this.setState({
            currentTime: value
        })
        this.video.seek(value)
    };

    _onLayout=(event)=>{
        let{width,height}=event.nativeEvent.layout
        let isLandscape=(width>height)
        if (isLandscape) {
            this.setState({
                fullScreen:true,
                videoWidth:width,
                videoHeight:height
            })
        }else{
            this.setState({
                fullScreen:false,
                videoWidth:width,
                videoHeight:width*9/16
            })
        }
    }

    render(){
        const {navigation}=this.props
        let videouri=navigation.getParam('params')
        return(
            <View
             style={styles.container}
             onLayout={this._onLayout}
             >
                <TouchableOpacity
                 style={styles.fullScreen}
                 onPress={this.bgbtn}
                >
                    <Video
                    style={[styles.fullScreen]}
                    ref={(ref)=>{
                        this.video=ref
                    }}
                    source={{uri:videouri}}
                    rate={this.state.rate}
                    paused={this.state.paused}
                    volume={this.state.volume}
                    muted={this.state.muted}
                    resizeMode={this.state.resizeMode}
                    onLoad={this.onLoad}
                    onProgress={this.onProgress}
                    onEnd={this.onEnd}
                    onAudioBecomingNoisy={this.onAudioBecomingNoisy}
                    onAudioFocusChanged={this.onAudioFocusChanged}
                    onFullscreenPlayerWillPresent={this.onFullscreenPlayerWillPresent}
                    onFullscreenPlayerDidPresent={this.onFullscreenPlayerDidPresent}
                    onFullscreenPlayerWillDismiss={this.onFullscreenPlayerWillDismiss}
                    onFullscreenPlayerDidDismiss={this.onFullscreenPlayerDidDismiss}
                    repeat={false}
                    />
                    {this.state.showBtn?(
                        <TouchableOpacity
                        style={styles.playbtn}
                        onPress={this.playbtn}
                        >
                            <Image source={this.state.paused?play:pause}/>
                        </TouchableOpacity>
                    ):(<View/>)}
                </TouchableOpacity>
                <View style={styles.trackingControls}>
                    <Text style={[styles.time,{textAlign:'left'}]}>
                        {formatMediaTime(this.state.currentTime)}
                    </Text>
                    <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={parseInt(this.state.duration)}
                    value={parseInt(this.state.currentTime)}
                    step={1}
                    minimumTrackTintColor={'red'}
                    maximumTrackTintColor={'#777'}
                    onValueChange={this._onChange}
                    />
                    <Text style={[styles.time,{textAlign:'right'}]}>
                        {formatMediaTime(this.state.duration)}
                    </Text>
                    <TouchableOpacity
                     style={styles.fullbtn}
                     onPress={this.presentFullscreenPlayer}
                     >
                        <Image
                         style={styles.fullimg}
                         source={this.state.fullScreen?fullscreen:exitscreen}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    textStyle: {
        paddingLeft: 10,
        paddingTop: 25,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    btnStyle: {
        paddingRight: 10,
        paddingTop: 25,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent:'center',
        alignItems:'center'
    },
    controls: {
        backgroundColor: 'transparent',
        borderRadius: 5,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    playbtn:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:'#00000060',
        justifyContent:'center',
        alignItems:'center'
    },
    trackingControls:{
        padding:15,
        justifyContent: 'space-around',
        alignItems:'center',
        flexDirection: 'row',
        position:'absolute',
        bottom:20
    },
    time:{
        color:'#fff',
        width:50
    },
    slider:{
        //flex:1
        width:width-150
    },
    fullbtn:{
        width:40,
        height:40,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    fullimg:{
        width:25,
        height:25
    },
    progress: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 3,
        overflow: 'hidden',
    },
    generalControls: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 4,
        overflow: 'hidden',
        paddingTop: 10,
    },
    rateControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    volumeControl: {
        fontSize: 25,
        color: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    resizeModeControl: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlOption: {
        alignSelf: 'center',
        fontSize: 11,
        color: 'white',
        paddingLeft: 2,
        paddingRight: 2,
        lineHeight: 12,
    },
})

export default VideoScreen