import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground, StatusBar, Linking } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');

const Onbording = ({ slides: customSlides }) => {
  const navigation = useNavigation();

  const [index, setIndex] = useState(0);
  const swiperRef = useRef(null);
  const slides = customSlides || getDefaultSlides(); // Use custom slides or default ones

  const handleIndexChanged = (newIndex) => {
    setIndex(newIndex);
  };

  const handleDotPress = (dotIndex) => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(dotIndex - index, true);
    }
  };

  const handleButtonPress = (buttonText) => {
    if (buttonText === "Next") {
      if (swiperRef.current) {
        const newIndex = (index + 1) % slides.length;
        swiperRef.current.scrollBy(1, true);
        setIndex(newIndex);
      }
    } else if (buttonText === "Learn More") {
      // Navigate to another screen (example: Login screen)
      // Replace with your navigation logic
      // navigation.navigate('LoginScreen');
      Linking.openURL('https://eventform-two.vercel.app/');
    } else if (buttonText === "Login") {
      // Navigate to another screen (example: Login screen)
      // Replace with your navigation logic
      navigation.navigate('Login');
      console.log("Navigate to Login Screen");
    }
  };

  function getDefaultSlides() {
    return [
      {
        title: "What is SK!P?",
        description: "Imagine walking into a conference, skipping the long registration lines, and instantly connecting with like-minded professionals—all with just a tap on your phone. Sounds like a dream? Welcome to Sk!p, where we make networking a breeze!",
        image: require("./assets/slide2.jpg"),
        buttonText: "Next",
      },
      {
        title: "How to get you started!",
        description: "Signing up for one of our events is quickest way to get you onboard, you can do this by warpping to the moxie5 events portal, tap the button below to open the portal. Don't forget to copy your credentials.",
        image: require("./assets/images/slide.jpg"),
        buttonText: "Learn More",
      },
      {
        title: "Start Here",
        description: "If you don't have an account already, head over to our events portal following the previous slide, and sign-up for access to Sk!p.",
        image: require("./assets/images/rasta.jpg"),
        buttonText: "Login",
      },
    ];
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Swiper
        ref={swiperRef}
        loop={false}
        showsPagination={false} // Disable built-in pagination
        onIndexChanged={handleIndexChanged}
      >
        {slides.map((slide, i) => (
          <ImageBackground key={i} source={slide.image} style={styles.imageBackground}>
            <View style={styles.overlay}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{slide.title}</Text>
                <Text style={styles.description}>{slide.description}</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => handleButtonPress(slide.buttonText)}
                >
                  <Text style={styles.buttonText}>
                    {slide.buttonText}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        ))}
      </Swiper>
      <CustomPagination
        index={index}
        onDotPress={handleDotPress}
        total={slides.length}
      />
    </View>
  );
};

const CustomPagination = ({ index, onDotPress, total }) => {
  return (
    <View style={styles.paginationContainer}>
      {Array.from({ length: total }).map((_, i) => (
        <TouchableOpacity
          key={i}
          style={[styles.dot, i === index && styles.activeDot]}
          onPress={() => onDotPress(i)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
  },
  textContainer: {
    position: 'absolute',
    bottom: 150,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: "90%",
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
    fontWeight: '900',
  },
  description: {
    fontSize: 18,
    textAlign: 'left',
    color: 'white',
    marginBottom: 20,
    width: "100%",
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 30,
    right: 30,
  },
  button: {
    backgroundColor: '#92e8f9',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  dot: {
    backgroundColor: 'gray',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#92e8f9',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Onbording;
