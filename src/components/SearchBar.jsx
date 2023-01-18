import styled from '@emotion/styled';
import {FaSearch} from 'react-icons/fa'; 

const SearchBar = () => {
    const Form = styled.form`
        align-self: center; 
        display: flex; 
        
        @media(min-width: 455px){
        width: 70%; 
        }
        @media(min-width: 900px){
        width: 60%; 
        }
  `;

    const Input = styled.input`
        font-family: 'Quicksand', sans-serif;
        width: 100%; 
        outline: none; 
        padding: 15px; 
        border: none;
        border-radius: 7px 0 0 7px; 

        &:focus{
        color: black; 
        }
    `;

    const ButtonSubmit = styled.button`
        display: flex; 
        justify-content: center; 
        align-items: center; 
        border-radius: 0 7px 7px 0; 
        background-color: #4034AA; 
        color: #FFF; 
        border: none; 
        padding: 15px; 
        font-size: 16px; 
        font-weight: 700; 

        &:hover{
        background-color: #342B87; 
        }
    `;

    return (
        <Form>
            <Input type="search" placeholder="Buscar pokemon" />
            <ButtonSubmit type="submit"> <FaSearch /> </ButtonSubmit>
        </Form>
    ); 
}

export default SearchBar; 