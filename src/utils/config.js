//URL API
export const api = "https://labsoft.herokuapp.com/"

// EXPORTING CONFIG REQUEST 
export const requestConfig = (method, data, token = null)=>{
    let config;

    if(method !== 'DELETE' || data!= null){
        config = {
            method,
            body: JSON.stringify(data),
            headers:{
                "Content-Type" : "application/json"
            }
        }
        if (method === "GET") {
            config.headers= {
                "accept": "application/json",
            }
            // Remove o body para solicitações GET
            config.body = null;
          } 
    }

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }


    return config;
}

//EXCEPTION CREATED FOR LOGIN ROUTE BECAUSE THE API ONLY ACCEPTS REQUEST IN XXX-FORM-ENCODED
export const requestConfiglogin = (method, data, token = null)=>{
    let config;

    if(data!= null){

        let formBody = [];
        for(var property in data){
            var encodedKey = encodeURIComponent(property);
            var encodeValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + "=" + encodeValue);
        }
        formBody = formBody.join("&");

        config = {
            method,
            headers:{
                "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
            body: formBody
        }
    }
    if(token){
        config.headers.Autorization = `Bearer ${token}`;
    }
    return config;
}