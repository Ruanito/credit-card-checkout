import React from 'react'
import { Title } from '../atoms/Title';
import CardForm from '../organisms/CardForm';

const NewCard = () => {
  return (
    <>
        <Title>Add new card</Title>
        <CardForm />
    </>
  )
}

export default NewCard;
