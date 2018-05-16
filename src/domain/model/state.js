const IN_REVIEW = 'review'
const PUBLISHED = 'published'

export default class State {
  constructor(state) {
    this.state = state
  }

  static inReview() {
    return new State(IN_REVIEW)
  }

  static published() {
    return new State(PUBLISHED)
  }

  static all() {
    return [State.inReview(), State.published()]
  }

  getState() {
    return this.state
  }

  equalsTo(state) {
    return this.state === state.getState()
  }
}
