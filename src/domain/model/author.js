export default class Author {
  constructor(id, name) {
    this.id = id
    this.name = name
  }

  static fromJson(json) {
    return new Author(json.id, json.name)
  }

  getId() {
    return this.id
  }

  getName() {
    return this.name
  }
}
