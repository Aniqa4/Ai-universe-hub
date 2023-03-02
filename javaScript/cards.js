const makeCards=()=>{
    const url=' https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCards(data.data.tools))
}

const showCards=cards=>{
    const defaultCards=document.getElementById('default-cards');
    cards.forEach(eachCard=> {
        console.log(eachCard)
    const createDiv=document.createElement('div');
    createDiv.classList.add('col');
    createDiv.innerHTML=`
    <div class="card">
            <img src="${eachCard.image}" class="card-img-top" height="250px">
        <div class="card-body">
            <h5>Features</h5>
            <ul style="list-style:none" class="">
            <li>1.${eachCard.features[0]}</li>
            <li>2.${eachCard.features[1]}</li>
            <li>3.${eachCard.features[2]}</li>
            </ul>
            <hr>
            <h5 class="card-title">${eachCard.name}</h5>
            <p class="card-text">${eachCard.published_in}
            </p>
        </div>
    </div>
    `
    defaultCards.appendChild(createDiv);
   })
}
makeCards();