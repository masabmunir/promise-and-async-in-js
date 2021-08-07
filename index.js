// console.log("working");

function dellAvailable() {
    return false;
}

function hpAvailable() {
    return true;
}

dell = {
    ssd:128,
    ram:8,
    color:'silver'
}

hp = {
    ssd:256,
    ram:16,
    color:'white'
}

function buylaptop() {
    return new Promise((resolve, reject) => {
        if (this.dellAvailable()) {
            return setTimeout(() => {
                resolve(this.dell);
            }, 3000);
        } else if (this.hpAvailable()) {
           return setTimeout(() => {
                resolve(this.hp);
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