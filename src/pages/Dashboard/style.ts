import styled from 'styled-components';
import { shade } from 'polished'

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 500px;
    line-height: 56px;

    margin-top: 80px;

`;

export const Button = styled.button`

    width: 210px;
    height: 70px;
    background: #04D361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #FFF;
    font-weight: bold;

    &:hover{
        background: ${shade(0.2, '#04D361')};
        transition: background-color 0.2s;
    }
`;

export const Listing = styled.div`

    

`;
