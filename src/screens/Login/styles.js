import { StyleSheet } from 'react-native'
import { bikoColor } from '../../helpers/Colors'
import styled from 'styled-components/native'

export const Container = styled.KeyboardAvoidingView` 
    width: 100%; 
    flex-grow: 0.5; 
    align-items: center;
    justify-content: space-evenly;
`

export const Row = styled.View` 
    margin-bottom: 5px;
    flex-direction: row;
`

export const Image = styled.Image` 
    width: 200px;
    height: 200px;
    border-radius: 100px;
`

const styles = StyleSheet.create({
    buttonRight: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    buttonLeft: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    }
})

export default styles