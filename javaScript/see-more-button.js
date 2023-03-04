//----------------------------see more button----------------------------------------
const allCards=()=>{
    const url=' https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res=>res.json())
    .then(data=>seeMoreButton(data.data.tools))
}
const seeMoreButton=cards=>{
    const defaultCards=document.getElementById('default-cards');
    defaultCards.innerHTML='';
    //-------------------------button for sorting------------------
    const removeSortCardsButton=document.getElementById('sort-cards');
    removeSortCardsButton.classList.add('d-none');

    const showSortAllCardsButton=document.getElementById('sort-all-cards');
    showSortAllCardsButton.classList.remove('d-none');
    //---------------------------------------------------------------
    
    const removeButton=document.getElementById('see-more');
    removeButton.classList.add('d-none');

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
   //---------removed spinner----------------
   const spinner=document.getElementById('spinner');
   spinner.classList.add('d-none');
} 
//----------------added spinner-----------
document.getElementById('see-more').addEventListener('click',function(){
    const spinner=document.getElementById('spinner');
    spinner.classList.remove('d-none');
})