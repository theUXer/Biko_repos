import { View, Image, Text } from 'react-native';
import { Logo } from '../../helpers/Images'
import styles from '../Perfil/styes'
export default function Info(props) {
    <View>
        <Image
            source={Logo}
            style={styles.image}
        />
        <Text style={{
            flex: 0.7,
            width: '90%',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>Nós somos João e Danilo</Text>
    </View>
}