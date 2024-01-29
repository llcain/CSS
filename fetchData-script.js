// Fetch data from the api

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        return;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

// function to render data to cards
async function renderData() {
    const container = document.querySelector('.container');
    const data = await (fetchData);
    
    if(!data) {
        return;
    }


    data.map(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h2');
        title.classList.add('h2');

        const body = document.createElement('p');
        body.textContent = item.body;

        card.appendChild(title);
        card.appendChild(body);
        container.appendChild(card);
    });
}

// call the renderData function to display data
renderData();