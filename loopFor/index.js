var a =[2,4,6,8,10,12];
for(i = 0 ; i<a.length;i++){
    console.log(a[i]); // i = 2,4,6,8,10,12
}

for (i in a){
    console.log(i);// i = 0,1,2,3,4,5
}

for (i of a){
    console.log(i); // i =2,4,6,8,10,12
}

a.forEach((i)=>{
    console.log(i); // i =2,4,6,8,12
})