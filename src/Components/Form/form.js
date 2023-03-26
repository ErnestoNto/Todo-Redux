import styled from "styled-components";

export const FormContainer = styled.form`
    width: 90%;
    max-width: 700px;
    margin: 0 auto;
    padding: 12px;
    background-color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputForm = styled.input`
    padding: 1rem;
    font-size: 1.2rem;
    width: 60%;
    margin-bottom: 8px;
    border-radius: 5px;
    border: 1px solid #A664CC;
    outline: 1px solid #A664CC;
`

export const ButtonForm = styled.button`
    padding: 1rem;
    font-size: 1.4rem;
    width: 60%;
    border: 2px solid #A663CC;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all .5s ease-in-out;
    
    :hover{
        background-color: #A663CC;
        color: #fafafa;
    }
`