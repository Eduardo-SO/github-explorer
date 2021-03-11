import styled from 'styled-components';

export const Container = styled.li`
display: flex;
flex-direction: column;
justify-content: space-between;

border: 1px solid rgba(88, 166, 255, 0.2);
border-radius: 4px;
padding: 20px;

p {
  margin-top: 8px;
  color: #8b949e;
  font-size: 14px;
  line-height: 150%;
}

a {
  display: inline-block;
  margin-top: 16px;
  text-decoration: none;
  color: #58a6ff;
}
`;
