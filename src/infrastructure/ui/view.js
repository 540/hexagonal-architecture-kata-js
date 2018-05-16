export default () => {
  const dom = {
    author: document.querySelector('#autor'),
    state: document.querySelector('#estado'),
    buscador: document.querySelector('#buscador'),
    botonBuscar: document.querySelector('#boton-buscar'),
    resultadosTBody: document.querySelector('#resultados tbody')
  }

  const loadAuthors = authors => {
    dom.author.innerHTML = '<option>-- Selecciona un autor --</option>'

    for (let author of authors) {
      document.querySelector(
        '#autor'
      ).innerHTML += `<option value="${author.getId()}">${author.getName()}</option>`
    }
  }

  const loadStates = states => {
    states.forEach(
      state =>
        (dom.state.innerHTML += `<option value="${state.getState()}">${state.getState()}</option>`)
    )
  }

  const loadDocumentFiles = documentFiles => {
    dom.resultadosTBody.innerHTML = ''
    documentFiles.forEach(
      documentFile =>
        (dom.resultadosTBody.innerHTML += `
      <tr>
        <td>${documentFile.getId()}</td>
        <td>${documentFile.getTitle()}</td>
        <td>${documentFile.getState()}</td>
      </tr>
    `)
    )
  }

  const onBuscar = callback => {
    dom.botonBuscar.addEventListener('click', event => {
      event.preventDefault()
      event.stopPropagation()

      callback(dom.buscador.autor.value, dom.buscador.estado.value)
    })
  }

  return {
    loadAuthors: loadAuthors,
    loadStates: loadStates,
    loadDocumentFiles: loadDocumentFiles,
    onBuscar: onBuscar
  }
}
