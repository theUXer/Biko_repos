import React from 'react'

import { Perfil } from '../../helpers/Images'
import Icon from '../../helpers/Icon'

import { ContainerImage, Image, Circle } from './styles'

export default function ImageInput({ source, onPress }) {
    return (    
        <ContainerImage>
            <Image source={source || Perfil} />
            <Circle onPress={onPress}>
                <Icon name='add' />
            </Circle>
        </ContainerImage>

    )
}