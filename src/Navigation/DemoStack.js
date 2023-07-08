import { NavigationContainer } from "@react-navigation/native";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

function DemoStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DemoStack;
