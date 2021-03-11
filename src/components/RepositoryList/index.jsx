import { Container } from './styles'
import RepositoryItem from '../RepositoryItem'

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

function RepositoryList() {
  return (
    <Container>
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </Container>
    )
  }

export default RepositoryList;
