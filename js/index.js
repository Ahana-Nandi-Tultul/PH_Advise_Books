const loadAdvise = async(url) =>{
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.slips[0]);
    displayAdviseCard(data.slip ? data.slip : data.slips[0]);
}

const displayAdviseCard = (data) =>{
    console.log(data);
    const displayCard = document.getElementById('display-card');
    displayCard.innerHTML = '';
    const displayCardDiv = document.createElement('div');
    displayCardDiv.innerHTML = `
    <div class="card mb-3 text-center mx-auto bg-secondary text-white" style="width: 18rem;">
        <div class="card-body ">
            <h1 class="card-title text-danger">Advice ${data.id}</h1>
            <h4 class="card-text">${data.advice}</h4>
        </div>
    </div>
    `;
    displayCard.appendChild(displayCardDiv);
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const searchFieldValue = searchField.value;
    console.log(searchFieldValue);
    loadAdvise(`https://api.adviceslip.com/advice/search/happy`);
})

loadAdvise(`https://api.adviceslip.com/advice`);