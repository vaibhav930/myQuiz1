class Quiz {

getState(){



}

update(){


}

async start(){
if (gameState === 0){
contestant = new Contestant();
var contestantCountRef = await database.ref('contestantCount').once("value");
 
if(contestantCountRef.exists()){
contestantCount = contestantCountref.val();
contestant.getCount();

}
question = new Question();
question.display();
}
}



}