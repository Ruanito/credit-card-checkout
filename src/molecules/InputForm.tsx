import React from 'react'
import styled from 'styled-components';
import { Input } from '../atoms/Input';
import { Label } from '../atoms/Label';

const DivInput = styled.div`
    position: relative;
    height: 46px;

    padding-top: 24px;
    padding-left: 25px;
    padding-right: 38px;
`;

type props = {
  labelName: string;
  inputType: string;
  value: string;
  setValue: any;
} 

const InputForm = ({ labelName, inputType, value, setValue }: props) => {
  return (
    <DivInput>
        <Label>{labelName}</Label>
        <Input type={inputType} value={value} onChange={(e) => setValue(e.target.value)} />
    </DivInput>
  )
}

export default InputForm;
