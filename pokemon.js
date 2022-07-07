const cont = document.querySelector('#container');
let base = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
for(let i=1 ;i<201 ;i++){
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.innerText = i;
   
    const newele = document.createElement('img');
    newele.src=`${base}${i}.png`;
    div.appendChild(newele);
    div.appendChild(span);
    container.appendChild(div);
}



