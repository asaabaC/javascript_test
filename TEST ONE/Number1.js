function height(){
    var height = 123.56;
    var type =(height>=190)?"tall": "short";
    return type;
}




// no 3
function compare(){
    let a=2
    let b=2.0
    if (a==b)return true;
    else return false;
}

//no 5
var a=5 , b=1
var obj={a : 10}
with(obj){alert(b)}
