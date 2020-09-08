import React from 'react';


import { Title, Form } from './style';

const Worker: React.FC = () => {
  return (
    <>
    <a href="/">Dashboard</a>
    <Title>Cadastro de funcionario</Title>
    <Form>
    <input name="name" placeholder="Nome" type="text"/>
    <input name="surname" placeholder="Sobrenome" type="text"/>
    <input type="text" placeholder="Date"/>
    <input name="money" placeholder="salário" type="text"/>
    <Title>Cargo</Title>
    <input type="text" placeholder="Cargo" name="function"/>
    <textarea name="description"  placeholder="Descrição"></textarea>
    </Form>
    </>
    );
};

export default Worker;