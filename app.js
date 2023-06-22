fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
        const cards = document.getElementById('cards');
        data.results.forEach(result => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                        <img src="${result.picture.large}" alt="Photo de profil">
                        <h2>Nom: ${result.name.title} ${result.name.first} ${result.name.last}</h2>
                        <p>Email: ${result.email}</p>
                    `;
            cards.appendChild(card);
        });
    })
    .catch(error => console.error(error));