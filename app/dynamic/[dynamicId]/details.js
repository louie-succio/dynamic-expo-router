import { Text, View } from "react-native-web";
import { Link, useLocalSearchParams } from "expo-router";

export default function DynamicIdDetails() {
  const { dynamicId } = useLocalSearchParams()
  
  return <View>
    <Text style={{ color: "red" }}>Dynamic Details {dynamicId}</Text>
    <Link href="/dynamic"><Text style={{ color: "blue" }}>Dynamic Index</Text></Link>
  </View>
}