setTimeout(()=>{
console.log("I do");
clearInterval(inter);
},3000)
const inter=setInterval(()=>{
console.log("interval");},1000);
console.log(__dirname);
console.log(__filename);