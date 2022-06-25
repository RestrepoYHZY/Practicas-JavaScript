const cards = document.getElementById('card-dinamicas');
const templateCard = document.getElementById('template-card').content;

//Cargando el DOM
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
});

const fetchData = async () => {
    try {
        loadindData(true);

        //solicitud a la api
        const res = await fetch("https://rickandmortyapi.com/api/character");
        const data = await res.json();
        
        //console.log(data);
        pintarCards(data);

    } catch (error){
        console.log(error);

    }finally{
        loadindData(false);

    }
};

//pintar el loading
const  pintarCards = data => {
    const fragment = document.createDocumentFragment();
    //console.log(data)
    data.results.forEach(item => {
        //console.log(item);

        const clone = templateCard.cloneNode(true);
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent= item.species;

        clone.querySelector("img").setAttribute("src", item.image);
        //se guarda en el fragmento evitando el reflow
        fragment.appendChild(clone);

    });

    cards.appendChild(fragment);
};


const loadindData = estado => {
    const loading = document.getElementById("loading");
    if(estado){
        loading.classList.remove('d-none');
    }else{
        loading.classList.add('d-none');
    }
    
};