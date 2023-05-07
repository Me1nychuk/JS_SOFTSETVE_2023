    console.log("Start Task-1.. ");

    function getPromise(message, delay){
        return new Promise((resolve,reject) => {
            if (message == "") {
                reject(null);
            }
            else{
                setTimeout(() => {resolve(message);},2000)
            }
        })
    }

    getPromise("test promise", 2000).then(function(data){
        console.log(data);
    })
    console.log("End Task-1")
    console.log("Start Task-2..");
    
    function calcArrProduct(arr){
        return new Promise((resolve,reject) => {
            if(arr.lengt == 0){
                reject(null);
            }
            else{
                let res = 1;
                for (let index = 0; index < arr.length; index++) {
                    if(typeof( arr[index]) == "number"){
                        res *= arr[index];
                    }
                    else {
                        resolve("Error! Incorrect array!");
                    }
                }
                resolve(res);
            }
        }) 
    }

    calcArrProduct([3,4,5]).then(resualt => console.log(resualt));
    calcArrProduct([5,"user2",7,12]).then(resualt => console.log(resualt));
    