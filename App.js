import React, {useEffect, useState, useCallback} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useRetrieveToken, useFirebaseMessage} from './firebase/index';

const App = () => {
  const {token} = useRetrieveToken();
  useFirebaseMessage();

  useEffect(() => {
    console.log('# app token: ', token);
  }, [token]);

  return (
    <SafeAreaView>
      <Text>Your App</Text>
    </SafeAreaView>
  );
};

// const useRetrieveToken = () => {

//   const [token, setToken] = useState(null);

//   const retrieveToken = useCallback(() => {
//     messaging()
//     .requestPermission()
//     .then(permission => {
//       console.log('# Fcm persmission: ', permission);
//       messaging()
//         .getToken()
//         .then(token => {
//           setToken(token)
//         })
//         .catch(error => {
//           console.log('# FCM error: ', error);
//         });
//     })
//     .catch(error => {
//       console.log('# Fcm permission error: ', error);
//     });
//   });

//   useEffect(() => {
//     retrieveToken();
//     return messaging().onTokenRefresh(new_token => {
//         setToken(new_token)
//     });
//   }, [retrieveToken]);

//   return {token};
// };

export default App;
