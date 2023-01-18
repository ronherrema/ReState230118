import React, { useState } from "react"
import { Text, View, Button } from "react-native"
import { useReState } from "@raulpesilva/re-state"

export default function HomeScreen() {
  const [bgc, setBgc] = useState("#fff")
  const [rsbgc] = useReState("rsbgc", "#fff")
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
      <Text style={{ fontSize: 28, margin: 20 }}>Home</Text>
    </View>
  )
}
