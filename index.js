const url = 'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest'
const ul = () => document.querySelector('ul');
// const ul = document.getElementById('list')
document.addEventListener('DOMContentLoaded', () => {
    const popBtn = document.querySelector('#pop-btn')
    popBtn.addEventListener('click', fetchData)
    const mapBtn = document.querySelector('#map-btn')
    mapBtn.addEventListener('click', showMap )
})
// DOMContentLoaded allows html to load op before js file. This helps speed uploading the page faster
const fetchData = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayStateData(data.data)
    })
};
const displayStateData = (states) => {
    document.querySelector('#frame').innerHTML =''
    states.forEach(state => {
        // create li element
        const li = document.createElement('li');
        // add innner text to the li I made that shows state information
        li.innerText = `State name: ${state.State} | State Population: ${state.Population}`;
        //append li to the dom
        ul().appendChild(li);
    });
}
//....add img when click happens

// const image = './USA-map-state-name-creative-picture_3840x2160'
    
    // const h1 = document.querySelector('h1')
    // h1.addEventListener('mouseover',function(event) {
    //     event.target.style.color = "purple"
    // })
    
const showMap = () => {
    ul().innerHTML = ''
    const img = document.createElement('img');
    document.querySelector('#frame').appendChild(img)
    img.src='./USA-map-state-name-creative-picture_3840x2160.jpeg'
    }
        

// Scrap code.........
// POST
// fetch(url, {
    //     method: 'POST'
    //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(data)})
        // ul.innerHTML = renderData(data)
        // const ul = document.getElementById('list')
        //         .then( response => response.json())
        //         .then(ul =)
        //     }
        
        // })
        // const displayUl = =>
        // const renderData = (uls) => {
        //     return console.log(uls.map(ul => render(ul)))
        // }
                
        // const render = (ul) => {
                    
        // }