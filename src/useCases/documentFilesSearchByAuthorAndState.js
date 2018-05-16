import documentFileRepository from '../domain/model/documentFileRepository'
import State from '../domain/model/state'

export default {
  async execute(authorId, stateValue) {
    const allDocumentFiles = await documentFileRepository.findByAuthorId(
      authorId
    )

    return allDocumentFiles.filter(documentFile =>
      documentFile.stateEqualsTo(new State(stateValue))
    )
  }
}
