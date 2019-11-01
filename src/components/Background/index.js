import React from 'react'
import { View } from 'react-native'

export default function Background({children}, ...props ) {
    return (
        <View 
            style={{ 
                flex: 1,
                alignItems: 'center',
                backgroundColor: '#fff',
                justifyContent: 'center'}} >
            {children}
        </View>
    )
}
