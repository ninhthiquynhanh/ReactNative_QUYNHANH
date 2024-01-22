import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    if (username && password && confirmPassword && password === confirmPassword) {
      // Perform registration logic here
      console.log("Registration successful");
      // Navigate to another screen if needed
      navigation.navigate('Product');
    } else {
      alert("Vui lòng nhập đầy đủ thông tin và đảm bảo mật khẩu trùng khớp.");
    }
  };

  return (
    <ImageBackground
      source={require('../assets/tulip.jpg')}
      style={styles.backgroundImage}
      >
      <View style={styles.container}>
        <Text style={styles.title}>Đăng ký</Text>

        <TextInput
          style={styles.input}
          placeholder="Số điện thoại"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
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

        <TextInput
          style={styles.input}
          placeholder="Xác nhận mật khẩu"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Đã có tài khoản? Đăng nhập ngay</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background for better readability
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    color: "brown", // Text color on top of the image
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "brown",
    borderWidth: 3,
    marginBottom: 13,
    padding: 10,
    backgroundColor: "white", // White background for input fields
  },
  button: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius:10,
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    color: "black",
    fontSize: 16,
  },
});

export default RegisterScreen;
