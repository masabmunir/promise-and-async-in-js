// console.log("working");

function dellAvailable() {
    return false;
}

function hpAvailable() {
    return true;
}

function buylaptop() {
    return new Promise((resolve, reject) => {
        if (this.dellAvailable()) {
            return setTimeout(() => {
                resolve('buy dell laptop');
            }, 3000);
        } else if (this.hpAvailable()) {
           return setTimeout(() => {
                resolve('buy hp laptop');
            }, 3000);
        } else {
            reject("don't buy anthing");
        }
    });
}

buylaptop().then(res=>{
    console.log(res)
}).catch(res=>{
    console.log(res)
})