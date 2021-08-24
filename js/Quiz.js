class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("purple");

    //write code to show a heading for showing the result of Quiz
    textSize(20);
    text ("Result of the quiz",340,50);
    text ("_____",320,50);


    //call getContestantInfo( ) here
    contestant.getPlayerInfo();


    //write condition to check if contestantInfor is not undefined
    if(allContestants!==undefined){
      fill ("Blue");
      textSize(20);
      text ("NOTE:Contestant who answered correct is highlihted in green",130,230);
    }

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for (var plr in allContestants){
      var correctAns="2";
      if(correctAns===allContestants[plr].answer){
        fill ("green");
      }
        else{
          fill ("red")
        }
        display_answers+=30;
        textSize(20);
        text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_answers);

  
      }

    }
    
  }


