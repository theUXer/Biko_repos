import styled from 'styled-components/native'
import { bikoColor } from '../../helpers/Colors'

export const Container = styled.View`
    flex: 1;
    padding: 20px 0;
    justify-content: space-between;
    background-color: ${bikoColor.secondary};
`

export const Button = styled.TouchableOpacity`
    width: 80%; 
    height: 50px;
    align-self: center;
    align-items: center;
    justify-content: center;
`

export const Line = styled.View`
    width: 80%; 
    height: 1px;
    margin: 5px 0;
    align-self: center;
    background-color: ${bikoColor.white};
`

export const Text = styled.Text`
    width: 100%;
    font-size: 18px; 
    text-align: center;
    color: ${bikoColor.white};
`