import { useState } from 'react';

import styled from 'styled-components';
import { Button } from '../atoms/Button';
import { FormTitle } from '../atoms/FormTitle';
import InputForm from '../molecules/InputForm';

import { useNavigate } from 'react-router-dom';

const Div = styled.div`
    position: relative;
    margin: 44px 0 0;
    width: 342px;
    height: 444px;
    left: 24px;
    background: #ffffff;
    border-radius: 10px;
`;

const DivTitle = styled.div`
    position: relative;
    width: 92px;
    height: 17px;
    padding-top: 25px;
    padding-bottom: 8px;
    padding-left: 25px;
`;

const DivButton = styled.div`
    margin-top: 80px;
    margin-left: 97px;
`;

const CardForm = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const [cvv, setCvv] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data: any = {
            name: name,
            card_number: cardNumber,
            expire_date: expireDate,
            cvv: cvv
        };

        fetch(`${process.env.REACT_APP_BACKEND_URL}/card`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success: ', data);
                if (data.statusCode === 201) {
                    navigate('/');
                }
            })
            .catch(error => {
                console.log('Error: ', error);
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Div>
                    <DivTitle>
                        <FormTitle>Enter details</FormTitle>
                    </DivTitle>
                    <InputForm labelName='Name' inputType='text' value={name} setValue={setName} />
                    <InputForm labelName='Card number' inputType='tel' value={cardNumber} setValue={setCardNumber} />
                    <InputForm labelName='Expire date' inputType='text' value={expireDate} setValue={setExpireDate} />
                    <InputForm labelName='CVV' inputType='number' value={cvv} setValue={setCvv} />
                </Div>
                <DivButton>
                    <Button type='submit'>PROCEED</Button>
                </DivButton>
            </form>
        </>
    )
}

export default CardForm;
