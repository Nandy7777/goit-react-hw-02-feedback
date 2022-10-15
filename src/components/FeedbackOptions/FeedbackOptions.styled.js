import styled from 'styled-components';

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.87;
  background-color: white;
  margin-left: 15px;
  margin-bottom: 25px;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    background-color: pink
  }
`;
