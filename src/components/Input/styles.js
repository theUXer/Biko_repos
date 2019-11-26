import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { bikoColor } from '../../helpers/Colors'

export const TextInput = styled.TextInput.attrs({
    placeholderTextColor: bikoColor.white
})`
    width: 80%;
    font-size: 20px;
    padding: 3px 5px;
    margin-bottom: 10px;
    color: ${bikoColor.white};
    border-bottom-color: ${bikoColor.white};
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
`

export const Text = styled.Text`
    color: ${bikoColor.white};
`

