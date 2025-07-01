function main(){
    let confirm=document.getElementById('mainresult').innerHTML;
    if(confirm=="You Lost"){
        alert("Game over.Please restart the game");
    }
    else{
    let x;
    do{
     x = Math.floor(Math.random()*100/ 7.6);
    }while(x == 0);

    let currentTotal=parseInt(document.getElementById('result').innerHTML);
    let total=currentTotal+x;
    document.getElementById('result').innerHTML=total;

    if(total < 21){
        document.getElementById('mainresult').innerHTML="Genarate another card ?";
    }
    else if(total == 21){
        document.getElementById('mainresult').innerHTML="You've Won !!";
        alert("Congratulation !!");
        document.getElementById('btn-rst').style.display="block"
    }
    else if(total>21){
        document.getElementById('mainresult').innerHTML="You Lost";
        alert("Lost :(");
        document.getElementById('btn-rst').style.display="block"

    } 

    var img = document.createElement("img");
    img.src = "Images/"+x+".png";
    img.height = 150;
    
    document.body.appendChild(img);
}
}
function restart(){
    location.reload();
}