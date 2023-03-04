//---------------------------- modal------------------
const displayMore=id=>{
    const url=`https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>showDisplayMore(data.data))
}

const showDisplayMore=info=>{
    //-----------------------right div of modal----------------------
    const modalRight=document.getElementById('modal-right');
    if(!!info.accuracy.score){
        modalRight.innerHTML=`
        <div class="card text-center p-3">
            <img src="${info.image_link[0]?info.image_link[0] : info.image_link[1]}" class="card-img-top">
            <button class="btn btn-danger position-absolute top-15 start-50" style="width:150px">${info.accuracy.score*100}% accuracy</button>
                <div class="card-body">
                    <h5 class="card-title">${info.input_output_examples[0].input?info.input_output_examples[0].input :'Can you give any example?'}</h5>
                    <p class="card-text">${info.input_output_examples[0].output?info.input_output_examples[0].output:'no! not yet! take a break!!'}</p>
                </div>
        </div>
        `
    }
    else{
    modalRight.innerHTML=`
    <div class="card text-center p-3">
        <img src="${info.image_link[0]?info.image_link[0] : info.image_link[1]}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${info.input_output_examples[0].input?info.input_output_examples[0].input :'Can you give any example?'}</h5>
                <p class="card-text">${info.input_output_examples[0].output?info.input_output_examples[0].output:'no! not yet! take a break!!'}</p>
            </div>
    </div>
    `}
    //--------------------left div of modal---------------
    //--------------------description-----------------
    const descriptionSection=document.getElementById('description');
    descriptionSection.innerText=`${info.description}`

    //-------------------integrations----------------
    const integrations=document.getElementById('integrations');
    integrations.innerHTML='<h5>Integrations</h5>'
    const listOfIntegrations=document.createElement('ol')
    listOfIntegrations.innerHTML=`
        <li>${info.integrations[0]?info.integrations[0]:'No data found'}</li>
        <li>${info.integrations[1]?info.integrations[1]:'No data found'}</li>
        <li>${info.integrations[2]?info.integrations[2]:'No data found'}</li>
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