# dx_onboadring_screen Component

The dx_onboadring_screen component for React Native that provides a customizable onboarding experience with swipe functionality and navigation buttons.

## Installation

npm i dx_onboarding_screen

## Usage

```javascript
import Onbording from 'dx_onboarding_screen';

//pass in your object of slides prop

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

// Use Onbording component
<Onbording slides={slides} />

## Example

import React from 'react';
import { View } from 'react-native';
import Onbording from '@username/onbording';

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


// how it works

[video](https://www.youtube.com/watch?v=D7NdYJf2qaI)


