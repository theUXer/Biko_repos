import React from 'react'
import { Dropdown as Drop } from 'react-native-material-dropdown'
import { bikoColor } from '../../helpers/Colors'

export default function Dropdown({ label, data, onChangeText }) {
    return <Drop
        data={data}
        label={label}
        baseColor={bikoColor.white}
        textColor={bikoColor.white}
        onChangeText={onChangeText}
        containerStyle={{ width: '80%', height: 35, justifyContent: "center", margin: 0, padding: 0 }}
        selectedItemColor={bikoColor.black}
        itemTextStyle={{ color: bikoColor.white }}
    />
}