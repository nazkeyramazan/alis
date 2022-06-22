import React, {FC} from 'react'
import {TextField} from "@mui/material";
import styled from "@emotion/styled";
import {Text} from '../Text/Text'
import {Icon} from "../IconComponent/Icon";
import {TextFieldProps} from "@mui/material/TextField/TextField";

const AlisInput = styled('div')`
  display: flex;
  flex-direction: row;
`
const AlisLabel = styled('div')<BasicInputProps>`
  display: flex;
  margin:0;
  padding: 0;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  width: ${props=>props.labelWidth}
`
type BasicInputProps = {
    labelWidth?: string
    labelText?: string
}

export const BasicInput: FC<BasicInputProps & TextFieldProps> = ({labelWidth,labelText, label ,...props}) => {
    return (
        <AlisInput>
            <AlisLabel labelWidth={labelWidth}>
                {props.required ?<Icon type='Required'/>: ''}
                <Text> {labelText}</Text>
                {props.required ?'': <Text color='rgba(0, 0, 0, 0.25)'>(необязательный)</Text>}
            </AlisLabel>


            <TextField {...props}/>
        </AlisInput>
    )
}
