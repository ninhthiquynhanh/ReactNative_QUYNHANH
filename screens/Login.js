import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [username, setUsername] = useState("QuynhAnh");
  const [password, setPassword] = useState("0398994340");
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);

    if (username === "QuynhAnh" && password === "0398994340") {
      console.log("Login successful, navigating to 'Product'");
      navigation.navigate('Product');
    } else {
      console.log("Login failed");
      alert("Đăng nhập không thành công- vui lòng nhập lại");
    }
  };

  const handleRegister = () => {
    // Add logic for registration here if needed
    navigation.navigate('Register');
  };

  return (
   
    <ImageBackground
      source={require('../assets/tulip.jpg')}
      style={styles.backgroundImage}
      >
      <View style={styles.container}>
        
        <Text style={styles.title}>Đăng nhập</Text>
        

        <TextInput
          style={styles.input}
          placeholder="Tên người dùng"
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, { backgroundColor: "brown" }]} onPress={handleLogin}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, { backgroundColor: "gray" }]} onPress={handleRegister}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>
          
        </View>
        
        <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Quên mật khẩu?</Text>
        </TouchableOpacity>

      </View>
      
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or "stretch"
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 29,
    fontWeight: "bold",
    marginBottom: 21,
    color: "brown", // Text color on top of the image
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "brown",
    borderWidth: 3,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    padding: 14,
    borderRadius: 10,
    flex: 1,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default LoginScreen;
