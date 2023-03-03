const makeCards=()=>{
    const url=' https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCards(data.data.tools))
}
//-------------------- 6 default Cards-------------------------
const showCards=cards=>{
    const defaultCards=document.getElementById('default-cards');
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

//----------------------------more informations of cards on a modal------------------
const displayMore=id=>{
    const url=`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>showDisplayMore(data.data))
}

const showDisplayMore=info=>{
    //-----------------------right div of modal----------------------
    const modalRight=document.getElementById('modal-right');
    modalRight.innerHTML=`
    <div class="card text-center" style="height: 24rem; width:24rem ;">
        <img src="${info.image_link[0]?info.image_link[0] : info.image_link[1]}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${info.input_output_examples[0].input}</h5>
                <p class="card-text">${info.input_output_examples[0].output}</p>
            </div>
    </div>
    `
    //--------------------left div of modal---------------
    //--------------------description-----------------
    const descriptionSection=document.getElementById('description');
    descriptionSection.innerText=`${info.description}`

    //-------------------integrations----------------
    const integrations=document.getElementById('integrations');
    integrations.innerHTML='<h5>Integrations</h5>'
    const listOfIntegrations=document.createElement('ul')
    listOfIntegrations.innerHTML=`
        <li>${info.integrations[0]}</li>
        <li>${info.integrations[1]}</li>
        <li>${info.integrations[2]}</li>
    `
    integrations.appendChild(listOfIntegrations)

    //-------------------features----------------------
    const features=document.getElementById('features');
    features.innerHTML='<h5>Features</h5>';
    const listOfFeatures=document.createElement('ul')
    listOfFeatures.innerHTML=`
        <li>${info.features['1'].feature_name}</li>
        <li>${info.features['2'].feature_name}</li>
        <li>${info.features['3'].feature_name}</li>
    `
    features.appendChild(listOfFeatures)
}

makeCards();