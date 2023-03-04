const sortCards=()=>{
    const url=' https://openapi.programming-hero.com/api/ai/tools';
    fetch(url)
    .then(res=>res.json())
    .then(data=>showSortedCards(data.data.tools))
}

const showSortedCards=(cards)=>{
    cards.forEach(a=> {
        //const dateA= new Date(a.published_in);
        //const dateB= new Date(b[0].published_in).valueOf();
        console.log(dateA);
        console.log('file works')
    });
    
}

