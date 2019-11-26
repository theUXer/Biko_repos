import React from 'react'
import styled from 'styled-components/native'
import { bikoColor } from '../../helpers/Colors'

const Background = styled.ImageBackground.attrs({
    resizeMode: 'cover'
})`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color || bikoColor.secondary};
`

export default Background