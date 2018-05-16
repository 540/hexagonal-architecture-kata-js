export default {
  authors(callback) {
    fetch('/data/authors.json')
      .then(response => response.json())
      .then(callback)
  },
  documentFiles(authorId, callback) {
    fetch(`/data/document-files-${authorId}.json`)
      .then(response => response.json())
      .then(callback)
  }
}
