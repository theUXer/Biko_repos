import styled from 'styled-components/native'
import { bikoColor } from '../../helpers/Colors'

export const Container = styled.View`
    width: 100%;
    height: 60px;
    padding: 0 20px;
    justify-content: center;
    background-color: ${bikoColor.primary};
`

export const Button = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`
