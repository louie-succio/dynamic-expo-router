import { Link } from "expo-router";
import { Text } from "react-native-web";

export default function MainIndex() {
  return <Link href="/dynamic/123/details"><Text style={{ color: "blue" }}>Dynamic Details 123</Text></Link>
}