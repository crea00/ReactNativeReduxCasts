/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

// Only the 'root' component uses 'AppRegistry'
AppRegistry.registerComponent(appName, () => App);