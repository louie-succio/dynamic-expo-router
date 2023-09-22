import { Slot, usePathname } from "expo-router";
import { Text, View } from "react-native-web";

export default function MainLayout() {
  const pathname = usePathname()
  
  return <View>
    <View>
      <Text style={{ color: "green" }}>Main Layout</Text>
    </View>
    <View style={{ paddingBottom: 15 }}>
      <Text style={{ color: "green" }}>Current Path: {pathname}</Text>
    </View>
    
    <Slot/>
  </View>
}