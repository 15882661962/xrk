import React from 'react'
import { 
    View, 
    Text, 
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput
} from 'react-native'
const {width,height}=Dimensions.get('window')
var navigation = null;
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userName:'15882661962',
            password:'123456'
        }
    }
    register(){
        this.props.updateLogin()
    }
    render(){
        return(
            <View>
                <View style={styles.input}>
                    <Image style={styles.inputIcon} source={require('../../images/login/icon-email.png')}/>
                    <TextInput 
                    value={this.state.userName}
                    style={styles.inputText} 
                    placeholder="请输入账号"
                    placeholderTextColor = {'#fff'}
                    onChangeText={(text)=>{
                        this.setState({userName:text})
                    }}
                    />
                </View>
                <View style={styles.input}>
                    <Image style={styles.inputIcon} source={require('../../images/login/icon-password.png')}/>
                    <TextInput 
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder = '请输入密码'
                    placeholderTextColor = {'#fff'}
                    style={styles.inputText} 
                    onChangeText={(text)=>{
                        this.setState({password:text})
                    }}
                    />
                </View>
                <TouchableOpacity 
                style={[styles.loginBtn,styles.btns]}
                //onPress={this.login.bind(this)}
                onPress={()=>this.props.login(this.state.userName,this.state.password)}
                >
                    <Text style={styles.btnText}>登录</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={[styles.btns,styles.registerBtn]}
                onPress={this.register.bind(this)}
                >
                    <Text style={styles.btnText}>注册</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    input:{
        width:'70%',
        left:'15%',
        marginTop:10,
        marginBottom:10,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
    },
    inputIcon:{
        width:width*60/750,
        resizeMode:'contain'
    },
    inputText:{
        position:'absolute',
        left:50,
        right:0,
        color:'#fff',
        height:40,
        bottom:10
    },
    btns:{
        width:'70%',
        left:'15%',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        borderRadius:25,
        marginTop:30,
        borderColor:'#fff',
        borderWidth:1
    },
    loginBtn:{
    },
    btnText:{
        color:'#fff',
        fontSize:18
    },
    registerBtn:{
        backgroundColor:'rgba(255,255,255,0.2)',
    }
})

export default Login