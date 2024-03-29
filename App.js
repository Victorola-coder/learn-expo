import { Text, View, Image, TouchableOpacity } from 'react-native';
import searchbar from './assets/images/searchbar.png';
import chat from './assets/images/onboard_2.png';
import Group from './assets/images/Group.png';
export default function App() {
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: '#FFFFFF',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          height: '50%',
          justifyContent: 'center',
          marginTop: '25%',
        }}
      >
        <Image source={searchbar} style={{}} />
      </View>

      <View style={{ marginTop: '5%' }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 24,
            color: '#0C2A23',
          }}
        >
          One bar with
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}>
          Endless Possibilities
        </Text>
      </View>
      <View></View>
      <View style={{ marginTop: '7%', width: '95%', marginLeft: '2.5%' }}>
        <Text style={{ textAlign: 'center', fontSize: 17, color: '#818791' }}>
          Simple and blazingly fast: he will transform how you search and find
          information in your everyday life.
        </Text>
      </View>
      <View
        style={{
          width: '50%',
          height: '3%',
          alignItems: 'center',

          marginLeft: '25%',
          justifyContent: 'center',
          marginTop: '20%',
        }}
      >
        <Image source={Group} style={{ width: 157, height: 14 }} />
      </View>
      <View>
        <TouchableOpacity
          style={{
            marginTop: '3%',
            backgroundColor: '#3CD3AD',
            width: '90%',
            height: '22%',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '5%',
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 14, color: '#FFFFFF' }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
