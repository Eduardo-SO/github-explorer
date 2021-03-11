import { useEffect, useState } from 'react'

import { Container } from './styles'
import RepositoryItem from '../RepositoryItem'

function RepositoryList() {
  const [ repositories, setRepositories ] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
      .catch(err => err)
  }, [])

  return (
    <Container>
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
      </ul>
    </Container>
    )
  }

export default RepositoryList;
