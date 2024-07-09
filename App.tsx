import React from 'react';
import { View } from 'react-native';
import Onbording from './Onbording';

const App = () => {
  const slides = [
    {
      title: "Welcome to Onbording!",
      description: "This is the first slide.",
      image: require('./assets/slide1.jpg'),
      buttonText: "Next"
    },
    {
      title: "Learn More",
      description: "This is the second slide.",
      image: require('./assets/slide2.jpg'),
      buttonText: "Learn More"
    },
    {
      title: "Get Started",
      description: "This is the third slide.",
      image: require('./assets/slide3.jpg'),
      buttonText: "Login"
    }
  ];

  return (
    <View style={{ flex: 1 }}>
      <Onbording slides={slides} />
    </View>
  );
};

export default App;
