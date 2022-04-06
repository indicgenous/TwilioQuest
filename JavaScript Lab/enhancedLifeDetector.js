const argmv=process.argv[2];
const livetreestatus=Number(argmv)

if(argmv==0){
    console.log("alive")
}else if(livetreestatus==1){
    console.log("flowering")
}else if(livetreestatus==2){
    console.log("shedding")
}else{
    console.log("other")
}; 




// 0	"alive"
// 1	"flowering"
// 2	"shedding"
// 3+	"other"