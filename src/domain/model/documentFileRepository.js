import DocumentFile from './documentFile'
import State from './state'

export default {
  findByAuthorId(authorId) {
    return fetch(`/data/document-files-${authorId}.json`)
      .then(response => response.json())
      .then(jsonList => {
        const documentFiles = []
        for (let json of jsonList) documentFiles.push(mapFromJson(json))
        return documentFiles
      })
  }
}

const mapFromJson = json => {
  const stateJson = json.state

  let state = State.published()
  if (stateJson === 1) {
    state = State.inReview()
  }

  return new DocumentFile(json.id, json.title, state)
}
