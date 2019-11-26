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