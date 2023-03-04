//---------------------------sorting for 6 Cards-----------------
const sortCards=()=>{
    const url=' https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res=>res.json())
    .then(data=>showSortedCards(data.data.tools.sort(date)))
}

const showSortedCards=cards=>{
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
            <ul style="list-style:none" class="">
            <li>1.${eachCard.features[0]}</li>
            <li>2.${eachCard.features[1]}</li>
            <li>3.${eachCard.features[2]}</li>
            </ul>
            <hr>
            <div class="d-flex justify-content-between">
                <div>
                    <h5 class="card-title">${eachCard.name}</h5>
                    <p class="card-text">${eachCard.published_in}</p>
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
//-------------------sorting for all Cards-------------------------
const sortAllCards=()=>{
    const url=' https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res=>res.json())
    .then(data=>showAllSortedCards(data.data.tools.sort(date)))
}

const showAllSortedCards=cards=>{
    const defaultCards=document.getElementById('default-cards');
    defaultCards.innerHTML='';

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
                    <p class="card-text">${eachCard.published_in}</p>
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
//-------------------sorting Function--------------
const date=(a,b)=>{
    const A=new Date(a.published_in);
    const B=new Date(b.published_in);
    if (A>B) {
        return -1;
    }
    else if(A<B){
        return 1;
    }
    else {
        return 0;
    }
}

