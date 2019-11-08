import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
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
    },
    viewImage: {
        width: 150,
        height: 150,
        flexDirection: 'row'
    },
    circle: {
        width: 30,
        height: 30,
        marginLeft: -45,
        borderRadius: 25,
        alignItems: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#ab0993'
    }
});

export default styles