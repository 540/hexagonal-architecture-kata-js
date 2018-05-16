import View from './infrastructure/ui/view'
import State from './domain/model/state.js'
import authorsGetUseCase from './useCases/authorsGetUseCase'
import documentFilesSearchByAuthorAndUseCase from './useCases/documentFilesSearchByAuthorAndState'

document.addEventListener('DOMContentLoaded', async function() {
  const view = View()

  const authors = await authorsGetUseCase.execute()
  view.loadAuthors(authors)

  view.loadStates(State.all())

  view.onBuscar(async (authorId, stateValue) => {
    const documentFiles = await documentFilesSearchByAuthorAndUseCase.execute(
      authorId,
      stateValue
    )
    view.loadDocumentFiles(documentFiles)
  })
})
