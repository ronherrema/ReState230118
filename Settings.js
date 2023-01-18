import React, { useState } from "react"
import { Button, Text, View } from "react-native"
import { useReState } from "@raulpesilva/re-state"

export default function SettingsScreen() {
  const [bgc, setBgc] = useState("#fff")
  const [rsbgc, setRsbgc] = useReState("rsbgc", "#fff")
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: bgc,
          borderWidth: 1,
          margin: 20,
        }}
      ></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: rsbgc,
          borderWidth: 1,
          margin: 20,
        }}
      ></View>
      <Text style={{ fontSize: 28, margin: 20 }}>Settings</Text>
      <Button title="Red (useState)" onPress={() => setBgc("#ff7777")}></Button>
      <Button
        title="Green (useReState)"
        onPress={() => setRsbgc("#77ff77")}
      ></Button>
      <Button title="White (useState)" onPress={() => setBgc("#fff")}></Button>
      <Button
        title="White (useReState)"
        onPress={() => setRsbgc("#fff")}
      ></Button>
    </View>
  )
}
