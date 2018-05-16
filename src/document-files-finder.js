document.addEventListener('DOMContentLoaded', function() {
  fetch('/data/authors.json')
    .then(response => response.json())
    .then(authors => {
      document.querySelector('#autor').innerHTML =
        '<option>-- Selecciona un autor --</option>'

      for (let author of authors) {
        document.querySelector('#autor').innerHTML += `<option value="${
          author.id
        }">${author.name}</option>`
      }
    })

  document.querySelector('#estado').innerHTML =
    '<option>-- Selecciona un estado --</option>'
  ;[{ state: 0, name: 'Published' }, { state: 1, name: 'In review' }].forEach(
    state =>
      (document.querySelector('#estado').innerHTML += `<option value="${
        state.state
      }">${state.name}</option>`)
  )

  document.querySelector('#boton-buscar').addEventListener('click', event => {
    event.preventDefault()
    event.stopPropagation()

    const authorId = document.querySelector('#buscador').autor.value
    const state = document.querySelector('#buscador').estado.value

    document.querySelector('#resultados tbody').innerHTML = ''

    fetch(`/data/document-files-${authorId}.json`)
      .then(response => response.json())
      .then(documentFiles => {
        for (let documentFile of documentFiles) {
          if (documentFile.state === parseInt(state))
            document.querySelector('#resultados tbody').innerHTML += `<tr><td>${
              documentFile.id
            }</td><td>${documentFile.title}</td><td>${documentFile.state}</td>`
        }
      })
  })
})
