let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");

function Genecomp_choice()
{
   let options = ["rock","scissors","paper"];
   let ranIdx=Math.floor(Math.random()*3);
   return options[ranIdx];
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
});
});

function playGame(userChoice)
{
    const compChoice=Genecomp_choice();
    console.log(userChoice,compChoice);

    if(compChoice===userChoice)
    {
        console.log("Tie");
        document.getElementById("msg").innerHTML="Opps! Its a Tie";
    }
    else{
        let userwin=true;
        if(userChoice==='rock')
        {
            userwin=compChoice==='paper'?false:true;
            if(userwin===true)
            {
                document.getElementById('msg').innerHTML='You Did It';
            }
            else{
                document.getElementById("msg").innerHTML="Opps! Better Luck Next Time";
            }
        }
        else if(userChoice==='scissors')
        {
             userwin=compChoice==='rock'?false:true;
             if(userwin===true)
            {
                document.getElementById('msg').innerHTML='You Did It';
            }
            else{
                document.getElementById("msg").innerHTML="Opps! Better Luck Next Time";
            }
        }
        else if(userChoice==='paper'){
            userwin=compChoice==='rock'?false:true;
            if(userwin===true)
            {
                document.getElementById('msg').innerHTML='You Did It';
            }
            else{
                document.getElementById("msg").innerHTML="Opps! Better Luck Next Time";
            }
        }
        
        userwin===false?compscore++:userscore++;
        
        document.getElementById("user-score").innerHTML=userscore;
        document.getElementById("comp-score").innerHTML=compscore;
       
    
        
    }
}
