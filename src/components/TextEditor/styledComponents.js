import styled from 'styled-components'

export const EditItem = styled.li`
  list-style: none;
  padding: 10px;
`

export const BoldButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: ${props => props.color};
  width: 25px;
  height: 25px;
  border-radius: 5px;
`

export const ItalicButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: ${props => props.color};
  width: 25px;
  height: 25px;
  border-radius: 5px;
`
export const UnderlineButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 18px;
  color: ${props => props.color};
  width: 25px;
  height: 25px;
  border-radius: 5px;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 30vh;
  border: none;
  outline: none;
  line-height: 20px;
  background-color: #484849;
  color: white;
  font-weight: ${props => props.fontWeight};
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  @media screen and (min-width: 576px) {
    height: 50vh;
  }
`
