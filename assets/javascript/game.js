
// Run Javascript when the HTML has finished loading
$(document).ready(function() {

    //The player will be shown a random number at the start of the game.
    //The random number shown at the start of the game should be between 19 - 120.

    var random_number = Math.floor((Math.random() * 120) + 19);    
    console.log(random_number);
    $("#random").text(random_number);

    //Each crystal should have a random hidden value between 1 - 12.    

    var ruby = Math.floor((Math.random() * 12) + 1);
    var sapphire = Math.floor((Math.random() * 12) + 1);
    var purple = Math.floor((Math.random() * 12) + 1);
    var emerald = Math.floor((Math.random() * 12) + 1);

    console.log("ruby== "+ruby);
    console.log("sapphire== "+sapphire);
    console.log("purple== "+purple);
    console.log("emerald== "+emerald);
    
    var tot_score = 0;
    var win = 0;
    var loss = 0;

    //console.log("win::::: "+win);
    $("#wins").text(win);
    $("#losses").text(loss);
    $("#tot_score").text(tot_score);

    function reset(){
        random_number = Math.floor((Math.random() * 120) + 19);    
        console.log(random_number);
        $("#random").text(random_number);

        //Each crystal should have a random hidden value between 1 - 12.    

        ruby = Math.floor((Math.random() * 12) + 1);
        sapphire = Math.floor((Math.random() * 12) + 1);
        purple = Math.floor((Math.random() * 12) + 1);
        emerald = Math.floor((Math.random() * 12) + 1);

        console.log("ruby== "+ruby);
        console.log("sapphire== "+sapphire);
        console.log("purple== "+purple);
        console.log("emerald== "+emerald);
        tot_score = 0;
        $("#tot_score").text(tot_score);
        $("#wins").text(win);
        $("#losses").text(loss);   }

    //Ruby crystal
   
    $("#ruby_crystal").on("click", function() {
        tot_score = tot_score+ruby;
        $("#tot_score").text(tot_score);
        console.log("tot_score== "+tot_score);
       
        if(tot_score==random_number){
            win++;
            console.log("wins== "+win);
            $("#wins").text(win);
            $("#msg").text("You win!");
            reset();
        }
        else if (tot_score>random_number) {
            loss++;
            $("#losses").text(loss);
            console.log("loss== "+loss);
            $("#msg").text("You loss!");
            reset();
        }
    });

    //Sapphire crystal

    $("#sapphire_crystal").on("click", function() {
        tot_score = tot_score+sapphire;
        $("#tot_score").text(tot_score);
        console.log("tot_score== "+tot_score);
        if(tot_score==random_number){
            win++;
            console.log("wins== "+win);
            $("#wins").text(win);
            $("#msg").text("You win!");
            reset();
        }
        else if (tot_score>random_number) {
            loss++;
            $("#losses").text(loss);
            console.log("loss== "+loss);
            $("#msg").text("You loss!");
            reset();
        }        
    });

    //Purple crystal

    $("#purple_crystal").on("click", function() {
        tot_score = tot_score+purple;
        $("#tot_score").text(tot_score);
        console.log("tot_score== "+tot_score);
        if(tot_score==random_number){
            win++;
            console.log("wins== "+win);
            $("#wins").text(win);
            $("#msg").text("You win!");
            reset();
        }
        else if (tot_score>random_number) {
            loss++;
            $("#losses").text(loss);
            console.log("loss== "+loss);
            $("#msg").text("You loss!");
            reset();
        }        
    });

    //Emerald crystal

    $("#emerald_crystal").on("click", function() {
        tot_score = tot_score+emerald;
        $("#tot_score").text(tot_score);
        console.log("tot_score== "+tot_score);
        if(tot_score==random_number){
            win++;
            console.log("wins== "+win);
            $("#wins").text(win);
            $("#msg").text("You win!");
            reset();
        }
        else if (tot_score>random_number) {
            loss++;
            $("#losses").text(loss);
            console.log("loss== "+loss);
            $("#msg").text("You loss!");
            reset();
        }       
    }); 
});