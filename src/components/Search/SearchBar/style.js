import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 50%;
`;

export const SearchInput = styled.input`
  border: none;
  border-radius: 0.5rem;
  font-size: 1.15rem;
  padding: 0.25rem 0.5rem;
  text-align: center;
  transition: 0.2s;
  width: 100%;

  &:focus {
    background: #ded6ff;
    outline: none;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchButton = styled.input`
  background: ${props => (props.primary ? '#6642f5' : 'transparent')};
  border: 2px solid #6642f5;
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: ${props => (props.primary ? '#ffffff' : '#6642f5')};
  cursor: pointer;
  font-family: sans-serif;
  font-size: 1.15rem;
  font-weight: bold;
  margin: 0.75rem 0.5rem;
  text-transform: uppercase;
  transition: 0.2s;

  &:hover {
    background: ${props => props.primary && '#8063f2'};
    border-color: #8063f2;
    color: ${props => !props.primary && '#8063f2'};
  }
`;
