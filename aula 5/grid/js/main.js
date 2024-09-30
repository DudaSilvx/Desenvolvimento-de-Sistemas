const url = "https://hp-api.onrender.com/api/characters";


fetch(url)
    .then((response) => response.json()) /* se der certo faz esse comando */
    .then((json) => console.log(json))
    .catch((error) => console.log(error)); /* se der erro faz esse */
