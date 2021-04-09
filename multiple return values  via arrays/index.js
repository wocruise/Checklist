var a =[1,2,3,4,5,6,7];
var b = [];

function chiahet2(a)
{
    for (i of a){
        if(i%2 == 0) {b.push(i);}
        else continue
    }
    console.log(b);
}

chiahet2(...a);//[2,4,6]