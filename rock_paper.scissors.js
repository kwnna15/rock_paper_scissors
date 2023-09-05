
function getComputerChoice(){
    let max=100, min=0;
    let x = Math.random()* (max - min) + min;;
    x=Math.floor(x);
    let y=x%3;
    //console.log("Output is: "+x+", "+y)
    if (y==0){
       // console.log("Rock");
        return "rock";
    }
    else if (y==1){
        //console.log("Paper");
        return "paper";
    }
    else{
        //console.log("Scissors");
        return "scissors";
    }
}

function getUserChoice(){
    let user_choice, computer_choice;
    user_choice= prompt("Please enter your choice:");
    user_choice = user_choice.toLowerCase();
    return user_choice;
}

function new_round(){
    let user_choice=getUserChoice();
    let computer_choice=getComputerChoice();
    console.log("User choice = "+user_choice+ " and computer choice = "+computer_choice);
}



new_round();