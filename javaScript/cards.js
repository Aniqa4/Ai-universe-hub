//-------------------- 6 default Cards-------------------------
const makeCards=()=>{
    const url=' https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCards(data.data.tools))
}
const showCards=cards=>{
    const defaultCards=document.getElementById('default-cards');
    defaultCards.innerHTML=''
    cards=cards.slice(0,6);
    cards.forEach(eachCard=> {
    const createDiv=document.createElement('div');
    createDiv.classList.add('col');
    createDiv.innerHTML=`
    <div class="card">
            <img src="${eachCard.image}" class="card-img-top" height="250px">
        <div class="card-body">
            <h5>Features</h5>
            <ul style="list-style:none">
            <li>${eachCard.features[0]?eachCard.features[0]:''}</li>
            <li>${eachCard.features[1]?eachCard.features[1]:''}</li>
            <li>${eachCard.features[2]?eachCard.features[2]:''}</li>
            <li>${eachCard.features[3]?eachCard.features[3]:''}</li>
            </ul>
            <hr>
            <div class="d-flex justify-content-between">
                <div>
                    <h5 class="card-title">${eachCard.name}</h5>
                    <p class="card-text"><img src="../icons/calendar.png" width="20px"><span> ${eachCard.published_in}</span></p>
                </div>
                <button onclick="displayMore('${eachCard.id}')" class="btn" data-bs-toggle="modal" data-bs-target="#show-more">
                    <img src="../icons/more.png" width="40px">
                </button>
            </div>
        </div>
    </div>
    `
    defaultCards.appendChild(createDiv);

   })
   
}


