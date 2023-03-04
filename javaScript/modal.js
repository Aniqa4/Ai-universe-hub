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
            <img src="${info.image_link[0]?info.image_link[0]:info.image_link}" class="card-img-top">
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
    integrations.innerText=''
    info.integrations.forEach(data => {
        const listOfIntegrations=document.createElement('li')
        listOfIntegrations.innerHTML=`
        <li>${data}</li>
    `
    integrations.appendChild(listOfIntegrations)
    });
    
    //-------------------features----------------------
    const features=document.getElementById('features');
    features.innerHTML='';
    for (const data in info.features) {
        const listOfFeatures=document.createElement('li')
        listOfFeatures.innerHTML=`
        <li>${info.features[data].feature_name}</li>
    `
    features.appendChild(listOfFeatures)
    }

    //--------------------pricing-------------------
    const basic=document.getElementById('basic');
    const pro=document.getElementById('pro');
    const enterprise=document.getElementById('enterprise');

    console.log(Object.values(info.pricing));
    basic.innerHTML=`
    <ul style="list-style:none;" class="p-0 pt-2 text-success fw-bold">
        <li>${Object.values(info.pricing[0])[1]}</li>
        <li>${Object.values(info.pricing[0])[0]}</li>
    </ul>
    `
    pro.innerHTML=`
    <ul style="list-style:none;" class="p-0 pt-2 text-warning fw-bold">
        <li>${Object.values(info.pricing[1])[1]}</li>
        <li>${Object.values(info.pricing[1])[0]}</li>
    </ul>
    `
    enterprise.innerHTML=`
    <ul style="list-style:none;" class="p-0 pt-2 text-danger fw-bold">
        <li>${Object.values(info.pricing[2])[1]}</li>
        <li>${Object.values(info.pricing[2])[0]}</li>
    </ul>
    `

    
}

makeCards();