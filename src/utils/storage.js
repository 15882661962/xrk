//import {AsyncStorage} from '@react-native-community/async-storage'
import {AsyncStorage} from 'react-native'
var Storage={
    set(key,value){
        AsyncStorage.setItem(key,JSON.stringify(value),(err)=>{
            if (err) {
                alert('存储失败')
            }else{

            }
        })
    },
    get(key){
        return AsyncStorage.getItem(key).then((value)=>{
            return JSON.parse(value)
        })
    },
    remove(key){
        AsyncStorage.removeItem(key,(err)=>{
            if (err) {
                alert('移除失败')
            }else{
                alert('移除成功')
            }
        })
    }
}

export default Storage