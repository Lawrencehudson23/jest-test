const googleDatabase = [
    'cats.com',
    'soupRecipes.com',
    'flowers.com',
    'animals.com',
    'catPictures.com',
    'myfavouritecats.com'
];


const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput)
    })

    return matches.length > 3 ? matches.slice(0, 3) : matches
}

// console.log(googleSearch('ts.com', googleDatabase))

module.exports = googleSearch