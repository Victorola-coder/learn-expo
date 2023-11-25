import { View, Image } from 'react-native';
import splash from '../assets/images/splash.png';

export default function Splash() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#3CD3AD',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={splash} style={{ width: 100, height: 100 }} />
    </View>
  );
}
