import styled from 'styled-components/native'
import { bikoColor } from '../../helpers/Colors'

export const Container = styled.View`
    flex: 0.5;
    width: 90%;
    padding: 0 20px;
    align-items: center;
    border-radius: 20px;
    justify-content: center;
    background-color: rgba(0,0,0, 0.3); 
    border: 1px solid ${bikoColor.white};
`

export const Text = styled.Text`
    font-size: 20px;
    align-items: center;
    color: ${bikoColor.white};
`