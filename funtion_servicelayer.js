function add(a, b) {
    return a + b;
}
function isevn(num) {
    return num % 2 === 0;
}

function createuser(id, name) {
    return {id, name,createdat: Date.now()}
;}
function loginuser(name){
     return {"loged in": name }
}
function calculalateTotal(a,b,c,d,e){
         total = a+b+c+d+e;    
    return {
     "total":total,
     "AVg": total/5,
    }


}


console.log(
    add(50,100)
);
console.log(
    isevn(60)
);
console.log(
    createuser(1,"hridoy")
);
