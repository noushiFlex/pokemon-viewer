const pokemonName = document.querySelector('.pokemon-name');
const pokemonButton = document.querySelector('.pokemon-button');
const pokemonInput = document.querySelector('.pokemon-name-field');
const pokemonImage = document.querySelector('.pokemon-image');

function pokemonDisplay(event) {
    event.preventDefault();
    // Récupérer la saisie de l'utilisateur
    let name = pokemonInput.value ? pokemonInput.value : null;

    // Validation : vérifier si un nom est saisi
    if (!name) {
        alert("Please enter a Pokémon name!");
        return;
    }

    // Construire l'URL
    const url = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
    
    // Envoyer la requête à l'API
    fetch(url)
        .then(response => {
            if (!response.ok) {
                pokemonName.innerHTML = '(Pas trouve)';
            }
            return response.json();
        })
        .then(data => {
            // Afficher le nom et le nombre d'éléments si nécessaire
            if(name.toLowerCase !== 'divine')
                {
                    pokemonName.innerHTML = (data['name']).charAt(0).toUpperCase() + (data['name']).slice(1);
                    pokemonImage.src = data['sprites']['front_default'];
                    console.log(pokemonImage)
                }
                else{
                    pokemonName.innerHTML = 'Divine';
                    pokemonImage.src = 'https://actus.zoobeauval.com/wp-content/uploads/2024/11/nouveaute_2025_beauval_rhinopitheque-755x500.png';
                }

        })
}

pokemonButton.addEventListener('click', pokemonDisplay);
