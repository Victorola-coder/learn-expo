import { Text, View, Image, TouchableOpacity } from 'react-native';
import robo from '../assets/images/robo.png';
import Group from '../assets/images/Group.png';
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
        <Image source={robo} style={{ width: 300, height: 270 }} />
      </View>
      <View style={{ marginTop: '5%' }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
          Steve AI
        </Text>
      </View>
      <View>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
          Chat GPT Assistant
        </Text>
      </View>
      <View style={{ marginTop: '7%', width: '95%', marginLeft: '2.5%' }}>
        <Text style={{ textAlign: 'center', fontSize: 17, color: '#818791' }}>
          Steve is an AI-powered search and content creation app that gives you
          ads-free, instant and accurate results
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
