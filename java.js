const juisteAntwoorden = [{
    vraag : "hoeveel champions leauge heeft Real madrid ?"  , antwoord :["15", "4" ,"7", "10"], juiste_antwoorde:0
},{
    vraag : "sinds welk jaar bestaat het champions league ?"  , antwoord :["1954", "1955", "1956", "1957"], juiste_antwoorde:1
},{
    vraag : "hoeveel wk's heeft Argentine ?"  , antwoord :["1","2","3","4"], juiste_antwoorde:2
},{
    vraag : "hoevaak is Feyenoord kampioen geweest ?"  , antwoord :["15", "16" ,"24", "20"], juiste_antwoorde :1
},{
    vraag : "welke league is de beste league ?"  , antwoord :["spaanse league", "engelse league" ,"deutse league", "italiaanse league"] ,juiste_antwoorde :1
}];

let score = 0;

let index = 0;

const vragen = document.getElementById("vraag");
const antwoorden = document.getElementById("antwoorden");
const feedback = document.getElementById("feedback");





// 3 functies laat vragen zien van en array
// function om antwoorden te laten zien +creat element (button) voor elker vraag je hebt 
// function voor de feedback en die moet je samen zetten met de 2 functie van de antwoorden 

