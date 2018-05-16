export default class DocumentFile {
  constructor(id, title, state) {
    this.id = id
    this.title = title
    this.state = state
  }

  getId() {
    return this.id
  }

  getTitle() {
    return this.title
  }

  getState() {
    return this.state.getState()
  }

  stateEqualsTo(state) {
    return this.state.equalsTo(state)
  }
}
