var listofDates=[]
var input= document.getElementById("input");
var todo=document.getElementById("todo");
document.getElementById("button").onclick=click;
function click(){
    listofDates.push(input.value)
    console.log(listofDate);
    input.value=""
    showList()
}
function showList(){
    todo.innerHTML = " "

}


listofDate.forEach(function(n,i)){
    listofDate.innerHTML=("<li>"+n+"<a onclick='delete("+i+")'>&times | </a>'")
})
function edit(i){
    var newVal =prompt("please insert new value")
    listofDates.splice(i,1,newVal)
    showList()
}
