import {start} from './About.js'
import {render} from'./PokeAPI.js'


const second = function () {
    render();
};

if(localStorage.id == 2){
    second();
}
else{
    start();
}

const pokemonButton = document.getElementById('pockemon-button');
const infoButton = document.getElementById('info-button');

function pokemon(){
    second();
    localStorage.id = 2;
}

pokemonButton.onclick = pokemon;


function info(){
    start();
    localStorage.id = 1;
}

infoButton.onclick = info;



