const fetch = require('node-fetch')

const pokemonApi = require('./script2')

it('calls pokemonApi to get pokemon', () => {
    // NOTE: asynchronous test always need assertions and return
    expect.assertions(1)
    return pokemonApi.getPokemon(fetch).then(data => {
        expect(data.count).toEqual(964)
    })
})
it('calls pokemonApi to get pokemon with a promise', () => {

    expect.assertions(2)
    return pokemonApi.getPokemon(fetch).then(data => {
        expect(data.count).toEqual(964)
        expect(data.results.length).toBeGreaterThan(5)
    })
})
// NOTE: mock the database
it('getPeople returns count and results', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 964,
                results: [0, 1, 2, 3, 4, 5]
            })
        }))

    expect.assertions(4)
    return pokemonApi.getPokemonPromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1)
        expect(mockFetch).toBeCalledWith('https://pokeapi.co/api/v2/pokemon')
        expect(data.count).toEqual(964)
        expect(data.results.length).toBeGreaterThan(5)
    })
})