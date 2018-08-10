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
