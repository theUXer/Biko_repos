import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    buttonRight: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    buttonLeft: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    },
    content: {
        flexGrow: 0.5, 
        width: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-evenly'
    }
});

export default styles