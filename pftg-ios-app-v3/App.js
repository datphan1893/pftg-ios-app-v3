import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./pages/welcome-page/welcome";
// import SignUp from './ui/signUpPopUp/signUp';
// import LoginPopUp from './ui/loginPopUp/loginPopUp';
import GeneralFooter from "./ui/generalFooter/generalFooter";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from './pages/home-page/homePage';
import OrderPage from "./pages/order-page/orderPage";
import DealsPage from "./pages/deals-page/dealsPage";
import MorePage from "./pages/more-page/morePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: "Welcome", headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Home", headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name="Order"
          component={OrderPage}
          options={{ title: "Order", headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name="Deals"
          component={DealsPage}
          options={{ title: "Deals", headerShown:false}}
        ></Stack.Screen>
        <Stack.Screen
          name="More"
          component={MorePage}
          options={{ title: "More", headerShown:false}}
        ></Stack.Screen>
      </Stack.Navigator>
      {/* <SignUp/> */}
      {/* <LoginPopUp/> */}
      {/* <GeneralFooter/> */}
      {/* <HomePage/> */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
