import { Slot, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DynamicLayout() {
  const { dynamicId } = useLocalSearchParams()
  
  return <View>
    <View><Text>Dynamic Layout</Text></View>
    <View style={{ paddingBottom: 15 }}><Text>Dynamic ID: { dynamicId }</Text></View>
    
    <Slot/>
  </View>
}