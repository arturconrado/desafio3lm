import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
    color: #3a3a3a;
    max-width: 500px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form`
  
  max-width: 700px;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
    
  input {
    
    height: 40px;
    margin-top: 40px;
    border-radius: 5px 0 0 5px;
    border: 0;
    
  }
  textarea{
    margin-top: 40px;
    height: 55px;
  }

`;
