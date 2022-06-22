import React, {ChangeEvent, useEffect} from 'react'
import styled from '@emotion/styled'
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {BasicInput} from "../components/BasicInput/BasicInput";
import {Text} from "../components/Text/Text"
import {useForm} from "react-hook-form";

const FormContainer = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 24px 40px 40px 40px;
`
const FormBlock = styled('div')`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  margin: auto;
`
const StyledRadio = styled(Radio)`
  color: #DC1832;
  &.Mui-checked {
    color: #DC1832
  },
`
const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`
const DisplayRow = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`

export const Form = () => {
    const [radioValue, setRadioValue] = React.useState('AO');
    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRadioValue((event.target as HTMLInputElement).value);
        setValue('organization',(event.target as HTMLInputElement).value )
    };
    const {handleSubmit, setValue} = useForm({
        defaultValues: {
            organization: '',
            iin:'',
            name: '',
            surname: '',
            patronymic: '',
            mail: '',
            phone: '',
            positoin: '',
            qwer: ''
        }
    });
    const onSubmit = (data: any) => {
        console.log(data);
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // @ts-ignore
        setValue(e.target.name, e.target.value)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormContainer>
                <FormBlock>
                    <Text fontWeight='500' fontSize='20px' lineHeight='28px' textAlign='center' color='#002877'>Данные
                        об организации</Text>
                    <FormControl>
                        <DisplayRow>
                            <Text>Организационно-правовая форма </Text>
                            <StyledRadioGroup
                                row
                                aria-required
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={radioValue}
                                onChange={handleRadioChange}
                            >
                                <FormControlLabel value="AO" control={<StyledRadio />} label="AO"/>
                                <FormControlLabel value="TOO" control={<StyledRadio/>} label="TOO"/>
                                <FormControlLabel value="ИП" control={<StyledRadio/>} label="ИП"/>
                            </StyledRadioGroup>
                        </DisplayRow>
                    </FormControl>

                    <BasicInput required labelText="БИН/ИИН : " variant="outlined" size="small"/>
                    <BasicInput required labelText="Полное наименование : " variant="outlined" size="small"/>

                </FormBlock>
                <FormBlock>
                    <Text fontWeight='500' fontSize='20px' lineHeight='28px' textAlign='center' color='#002877'>Данные
                        представителя</Text>
                        <BasicInput required
                            labelText="Фамилия : "
                            variant="outlined"
                            size="small"
                            name='surname'
                            onChange={(e) => handleChange(e)}
                        />
                    <BasicInput
                        required
                        labelText="Имя : "
                        variant="outlined"
                        size="small"
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                    <BasicInput
                        labelText="Отчество : "
                        variant="outlined"
                        size="small"
                        name="patronymic"
                        onChange={(e) => handleChange(e)}/>
                    <BasicInput
                        required
                        labelText="Элекстронная почта : "
                        variant="outlined"
                        size="small"
                        name="mail"
                        onChange={(e) => handleChange(e)}/>
                    <BasicInput
                        required
                        labelText="Телефон : "
                        variant="outlined"
                        size="small"
                        name="phone"
                        onChange={(e) => handleChange(e)}/>
                    <BasicInput
                        required
                        labelText="Должность : "
                        variant="outlined"
                        size="small"
                        name="position"
                        onChange={(e) => handleChange(e)}/>
                    <BasicInput
                        labelText="Основание полномочии : "
                        variant="outlined"
                        size="small"
                        name="qwe"
                        onChange={(e) => handleChange(e)}/>
                </FormBlock>
                <FormBlock>
                    <Text fontWeight='500' fontSize='20px' lineHeight='28px' textAlign='center'
                          color='#002877'>Адрес</Text>
                    <BasicInput required labelText="Населенный пункт / Район : " variant="outlined" size="small"/>
                    <BasicInput required labelText="Юридический адрес : " variant="outlined" size="small"/>
                </FormBlock>
                <FormBlock>
                    <Text fontWeight='500' fontSize='20px' lineHeight='28px' textAlign='center'
                          color='#002877'>Банк</Text>
                    <BasicInput required labelText="Банк : " variant="outlined" size="small"/>
                    <BasicInput required labelText="БИК : " variant="outlined" size="small"/>
                    <BasicInput required labelText="ИИК: " variant="outlined" size="small"/>
                    <BasicInput required labelText="Кбе: " variant="outlined" size="small"/>
                </FormBlock>
            </FormContainer>
            <input type="submit"/>
        </form>
    );
}