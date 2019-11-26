import styled from 'styled-components/native';
import { bikoColor } from '../../helpers/Colors'

export const Touchable = styled.TouchableOpacity`
    width: 100px;
    height: 50px;
    margin-left: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${bikoColor.primary};
    border-top-left-radius: ${props => props.left ? 0 : 50};
    border-top-right-radius: ${props => props.right ? 0 : 50};
    border-bottom-left-radius: ${props => props.left ? 0 : 50};
    border-bottom-right-radius: ${props => props.right ? 0 : 50};
`

export const Text = styled.Text`
    color: ${bikoColor.white};
`

