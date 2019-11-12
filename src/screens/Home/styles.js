import styled from 'styled-components/native'
import { bikoColor } from '../../helpers/Colors'

export const Comments = styled.Text`
    font-size: 13px;
    color: ${bikoColor.primary};
`

export const Search = styled.TextInput`
    width: 90%; 
    height: 50px; 
    padding: 0 10px;  
    align-self: center;
`

export const Button = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    flex-direction: row;
    justify-content: center;
`

export const Image = styled.Image`
    flex: 1;
    width: auto;
    height: 200px; 
`