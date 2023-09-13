
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

function compare_results(user_choice, computer_choice){
    let user = user_choice.toLowerCase();
    let computer = computer_choice.toLowerCase();
    let result;

    //console.log("User = "+user+ " and computer = "+computer);

    switch (user) {
        case "rock":
          if (computer==="rock"){
            result="tie"
          }
          else if (computer==="paper"){
            result="computer"
          }
          else if (computer === "scissors")
            result = "user"

          break;
        case "paper":
            if (computer==="rock"){
              result="user"
            }
            else if (computer==="paper"){
              result="tie"
            }
            else if (computer === "scissors")
              result = "computer"
  
            break;
        case "scissors":
            if (computer==="rock"){
                result="computer"
            }
            else if (computer==="paper"){
                result="user"
            }
            else if (computer === "scissors")
                result = "tie"
    
            break;

        default:
          result = "invalid";
      }
      return result;

}

function new_round(){
    let user_choice=getUserChoice();
    let computer_choice=getComputerChoice();
    console.log("User choice = "+user_choice+ " and computer choice = "+computer_choice);
    let result = compare_results(user_choice, computer_choice);
    //console.log("Result = "+result);
    return result;
}

function game(){
    let result;
    let user_wins=0, computer_wins=0;
    for (let i = 0; i < 5; i++) {
        result = new_round();
        switch (result){
            case "user":
                console.log("User wins!\n");
                user_wins++;
                break;
            case "computer":
                console.log("Computer wins!\n");
                computer_wins++;
                break;
            case "tie":
                console.log("Its a tie.\n");
                break;
        }
        console.log("\n");
    }

    if (user_wins>computer_wins){
        console.log("User: "+user_wins+", Computer: "+computer_wins+". User wins!");
    }
    else if (user_wins<computer_wins){
        console.log("User: "+user_wins+", Computer: "+computer_wins+". Computer wins!");
    }
    else{
        console.log("User: "+user_wins+", Computer: "+computer_wins+". Its a tie!");
    }
}

game();
//new_round();