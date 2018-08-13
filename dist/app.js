var mensagem = 'Help me, Obi Wan Kenobi. You are my only hope.';
var episode = 4;
console.log("This is episode " + episode);
episode += 1;
console.log("Next episode: " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log('My favorite droid is: ' + favoriteDroid);
console.log('______ AULA DE FUNÇÕES ______');
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
console.log("inc (5,2) = " + inc(5, 2));
