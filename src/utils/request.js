const BASE_URL='http://www.7uao.com/'//'http://47.99.133.13/'//
const DEFAULT_HEADERS={
    'Content-Type':'application/json;charst=utf-8'
}

var Request={}

Request.get=function(url,params){
    var requestUrl=BASE_URL+url+paramsSerializer(params);
    return new Promise(function(resolve,reject){
        fetch(requestUrl,{
            method:'GET',
            headers:DEFAULT_HEADERS
        })
        .then((response)=>response.json())
        .then((responseData)=>{
            resolve(responseData.Data)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

Request.post=function(url,formData){
    var requestUrl=BASE_URL+url;
    return new Promise(function(resolve,reject){
        fetch(requestUrl,{
            method:'POST',
            body:formData,
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
        .then((response)=>{
            if (reponse.ok) {
                return reponse.json()
            }else{
                reject({status:response.status})
            }
        })
        .then((reponse)=>{
            resolve(reponse)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

function paramsSerializer(params){
    let url = '';
    let paramsArray=[];
    Object.keys(params).forEach(key=>paramsArray.push(key+'='+params[key]))
    if(url.search(/\?/)===-1){
        url+='?'+paramsArray.join('&')
    }else{
        url+='&'+paramsArray.join('&')
    }
    return url;
}

export default Request