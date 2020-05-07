import React from 'react'
import { 
    View, 
    StyleSheet,
    Dimensions
} from 'react-native'
import WebView from 'react-native-webview'

const {width,height}=Dimensions.get('window')
class WebScene extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <WebView
                style={styles.webview}
                source={{uri:"http://app.baobanwang.com/reworkHtml/index.html?accountId=809316416670011392&orgId=1178230111808655360&projectId=1178229842173628416&register=00"}}
                />
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        backgroundColor:'#f5f9fc',
        width:width,
        height:height,
        alignItems:'center',
    },
    webview:{
        width:width,
        height:height,
    }
})

export default WebScene