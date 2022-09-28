import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 5px 10px;
  background-color: floralwhite;
  font-size: 18px;
  border-radius: 4px;
  color: black;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    background-color: grey;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;