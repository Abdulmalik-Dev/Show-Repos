let inputTetx = document.querySelector('.container input'),  // Input Field
    button = document.querySelector('.container button'),    // Button
    dataArea = document.querySelector('.data-area');         // Data Area

button.addEventListener("click", getRepo);

function getRepo(){
    // Check If There Is a Value On Input Field 
    if(inputTetx.value == ''){
        dataArea.textContent = "Please Write a GitHub User Name";
    }else{
        dataArea.textContent = '';
        // Get The API 
        fetch(`https://api.github.com/users/${inputTetx.value}/repos`)
        .then(response => response.json())
        .then(allData => {
            allData.forEach(data => {
                // The Container For Repo 
                let div = document.createElement('div');
                // Repo Name 
                div.appendChild(document.createTextNode(data.name));

                dataArea.appendChild(div);
                // The Stars And Vist The Repo 
                let stars = document.createElement('span'),
                    vistLink = document.createElement('a');
                vistLink.href = `https://github.com/${inputTetx.value}/${data.name}`
                vistLink.target = '_blank';

                stars.appendChild(document.createTextNode(`Stars ${data.stargazers_count}`));
                vistLink.appendChild(document.createTextNode(`Vist`));
                // Add Stars And Vist Link To Repo Container 
                div.appendChild(vistLink);
                div.appendChild(stars);
            });
        });
    };
};