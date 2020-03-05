import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.05rem solid var(--mainRed);
border-color: ${props => props.cart?'var(--mainYellow)': 'var(--mainRed)'};
color: ${props => props.cart? 'var(--mainYellow)':'var(--mainRed)'};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${props => props.cart? 'var(--mainYellow)':'var(--mainRed)'};
    color: var(--mainWhite);
}
&:focus{
    outline: none;
}
`;
