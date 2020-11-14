import { View } from 'native-base';
import React from 'react';
import { WebView } from 'react-native-webview';


const WebviewScreen = (props) => {
  console.log(props.navigation.state.params)
    return (
         <WebView
           source={{ uri: props.navigation.state.params.url }}
           style={{ marginTop: 20 }}
         />
      );
};
export default WebviewScreen;

