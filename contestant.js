class Contestant {
    constructor(){
        this.index=null;
        this.distance = 0;
        this.name = null;
        }
        
        getCount(){
            var contestantCountref = database.ref('contestantCount');
            contestantCountref.on("value",function(data)
            {
            contestantCount= data.val()
            })
        }
        updateCount(count){
            database.ref('/').update({
                contestantCount: count
            })
        }
        update(name){
         var contestantIndex="contestants/contestant"+ this.index
         database.ref(contestantIndex).set({
             name: this.name,
             distance : this.distance
    
         })
        }
        
    static getcontestantinfo(){
    var contestantinforef = database.ref('contestants')
    contestantinforef.on("value",(data)=>{
        allcontestants= data.val()
    })
    
    
    }















}