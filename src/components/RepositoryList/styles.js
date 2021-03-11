import styled from 'styled-components';

export const Container = styled.div`
margin: 40px;

h1 {
  margin-bottom: 16px;
}

ul {
  list-style: none;

  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
}
`;
