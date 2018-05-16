import Author from './author'

export default {
  findAll() {
    return fetch('/data/authors.json')
      .then(response => response.json())
      .then(jsonList => {
        const authors = []
        for (let json of jsonList) authors.push(Author.fromJson(json))
        return authors
      })
  }
}
