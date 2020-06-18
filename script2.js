const fetch = require('node-fetch')

const getPokemonPromise = fetch => {
    return fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(data => {
            const { count, results } = data
            return {
                count,
                results
            }
        })
}

const getPokemon = async (fetch) => {
    const getRequest = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await getRequest.json()
    const { count, results } = data
    return {
        count,
        results
    }

}

module.exports = {
    getPokemon,
    getPokemonPromise
}
