import authorRepository from '../domain/model/authorRepository'

export default {
  execute() {
    return authorRepository.findAll()
  }
}
