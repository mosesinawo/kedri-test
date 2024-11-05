import { ConfirmTransactionScreen, HomeScreen, SelectBankScreen, SendMoneyScreen, SuccessScreen } from "../screens";
import SignInScreen from "../screens/SignInScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./navigation.types";


const Stack = createStackNavigator<RootStackParamList>();

const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="SignInScreen" component={SignInScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SelectBankScreen" component={SelectBankScreen} />
            <Stack.Screen name="SendMoneyScreen" component={SendMoneyScreen} />
            <Stack.Screen name="ConfirmTransactionScreen" component={ConfirmTransactionScreen} />
            <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
        </Stack.Navigator>
    );
}

export default MainNavigator;