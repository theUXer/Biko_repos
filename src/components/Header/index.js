import React from 'react'
import Icon from '../../helpers/Icon'

import { Container, Button } from './styles'

export default function Header({ home, onPress }) {
    return (
        <Container >
            {home ? 
                <Button onPress={onPress}> 
                    <Icon name='menu' size={30} />
                </Button> 
                : <Button onPress={onPress}>
                    <Icon name='arrow-back' size={30} />
                </Button>
            }
        </Container>
    )
}
