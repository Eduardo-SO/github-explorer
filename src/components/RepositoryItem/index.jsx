import { Container } from './styles'

function RepositoryItem({ repository }) {
  return (
    <Container>
      <strong>{repository.name}</strong>

      <p>{repository.description}</p>

      <a href={repository.link}>Acessar repositório</a>
    </Container>
    )
  }

export default RepositoryItem;
