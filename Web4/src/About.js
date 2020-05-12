export function start(){
    const content = document.getElementById('root');
    let pokemonButton = document.getElementById('pockemon-button');
    let infoButton = document.getElementById('info-button');
    pokemonButton.className = 'first-button';
    infoButton.className = 'first-button';
    content.innerHTML = '';
    content.className = 'first-page';
    document.body.className = 'first';
    let photo = document.createElement('div');
    photo.className = 'photo';
    let img = document.createElement('img');
    img.className = 'img';
    img.src = "img/1.png";
    photo.appendChild(img);
    content.appendChild(photo);
    let list = document.createElement("li");
    let ul = document.createElement('ul');
    list.innerHTML = "Вовк Владимир";
    ul.appendChild(list);
    let name = document.createElement('h1');
    name.className = 'name';
    let info = document.createElement("div");
    info.className = 'info';
    name.innerHTML = "Вовк Владимир";
    info.appendChild(name);
    let restInfo = document.createElement("p");
    restInfo.className = 'rest-info';
    restInfo.innerHTML = "Студент группы М3307";
    info.appendChild(restInfo);
    content.appendChild(info);
}







