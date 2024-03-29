import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableHighlight,
  Pressable,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import SignUp from "../welcomePage/signUpPopUp/signUp";
import ForgotPassword from "../forgotPassword/forgotPassword";

export default function loginPopUp(props) {
  const { modalVisible, setModalVisible } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpPopUp, setsignUpPopUp] = useState(false);
  const [forgotPasswordPopUp, setForgotPasswordPopUp] = useState(false)

  const handleSubmit = () => {
    // Do something with the username and password
    setModalVisible(!modalVisible);
    setEmail("");
    setPassword("");
    window.alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <View
      style={[
        styles.loginModal,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible = !modalVisible;
        }}
        style={{ zIndex: 1 }}
      >
        <ForgotPassword modalVisible={forgotPasswordPopUp} setModalVisible={setForgotPasswordPopUp} /> 
        <SignUp modalVisible={signUpPopUp} setModalVisible={setsignUpPopUp} />
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableWithoutFeedback
              hitSlop={{ top: 170, bottom: 170, left: 170, right: 170 }}
            >
              <TouchableHighlight
                style={{ marginLeft: 10, marginTop: 13 }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={[styles.exit, { fontSize: 16 }]}>X</Text>
              </TouchableHighlight>
            </TouchableWithoutFeedback>
            <Text
              style={[
                styles.modalText,
                {
                  fontFamily: "K2D_600SemiBold",
                  textAlign: "center",
                  fontSize: 30,
                },
              ]}
            >
              Login
            </Text>
            <View>
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                style={styles.input}
              />
              <TouchableHighlight
                onPress={handleSubmit}
                style={[styles.button, { backgroundColor: "#FAEDCD" }]}
              >
                <Text
                  style={[
                    styles.buttontext,
                    {
                      fontFamily: "K2D_400Regular",
                      textAlign: "center",
                      fontSize: 15,
                    },
                  ]}
                >
                  Submit
                </Text>
              </TouchableHighlight>
              <View
                style={{ display: "flex", flexDirection: "row", marginTop: 35 }}
              >
                <Text>Don't have an account yet? </Text>
                <TouchableHighlight
                  onPress={() => {
                    setsignUpPopUp(!signUpPopUp);
                  }}
                >
                  <Text style={{ color: "#82B77D" }}>Sign Up</Text>
                </TouchableHighlight>
              </View>
              <View style={{ marginTop: 23 }}>
                <TouchableHighlight onPress={()=>setForgotPasswordPopUp(!forgotPasswordPopUp)}>
                  <Text style={{ color: "#82B77D" }}>
                    Forgot your password?
                  </Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
