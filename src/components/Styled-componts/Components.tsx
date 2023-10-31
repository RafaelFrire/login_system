import Styled from 'styled-components';


export const FormContainer = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding-top: 5em;

    p{
        color: red;
    }

`

export const Title = Styled.h1`

    margin: 15px 0px;
    font-weight: light;
    font-size: 2em;
`
    
export const Input = Styled.input`
    width: 300px;
    height: 35px;


`

export const BtnSubmit = Styled.button`
    width: 300px;
    height: 35px;
    border: none;
    margin: 25px 0;
    background-color: #3B3B3B;
    color: white;
    &:hover{
        background-color: #000000;
        color:#FF741E;
    }

`







