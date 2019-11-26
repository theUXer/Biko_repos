import styled from 'styled-components/native'
import { bikoColor } from '../../helpers/Colors'


export const ContainerImage = styled.View`
    width: 150px;
    height: 150px;
    flex-direction: row;
`

export const Image = styled.Image.attrs({
    resizeMode:'contain'
})`
    width: 150px;
    height: 150px;
    border-radius: 350px;
`

export const Circle = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    margin-left: -45px;
    border-radius: 25px;
    align-items: center;
    align-self: flex-end;
    justify-content: center;
    background-color: ${bikoColor.primary};
`
