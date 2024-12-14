import {Image, Platform, StatusBar, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

const Index = () => {
  return (
    <View className="bg-gray-50 py-24">
      <View className="mx-auto px-6">
        <Text className="text-center text-base/7 text-2xl font-semibold text-indigo-600">MyStudyLife</Text>
        <Text
          className="mx-auto mt-2 text-balance text-center text-2xl font-semibold tracking-tight text-gray-950">Select
          your profile to start</Text>
      </View>
      <View className="mt-10 grid gap-4">
        <View className="bg-white py-8 rounded-lg">
          <View className="mx-auto max-w-7xl px-6">
            <Text className="text-pretty text-xl font-semibold tracking-tight text-gray-900">Name</Text>
            <View className="relative mt-2 rounded-md shadow-sm">
              <TextInput
                className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 ring-1
                ring-inset ring-gray-300 placeholder:text-gray-400
                focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="Type your name here">
              </TextInput>
            </View>
            <Text className="mt-8 text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Choose
              Avatar
            </Text>
            <View className="mx-auto mt-4 grid grid-cols-2 grid-flow-col max-w-2xl gap-x-8 gap-y-8">
              <Image className="mx-auto size-24 rounded-full border-4 border-indigo-500/100"
                     src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"/>
              <Image className="mx-auto size-24 rounded-full"
                     src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"/>
              <Image className="mx-auto size-24 rounded-full"
                     src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"/>
              <Image className="mx-auto size-24 rounded-full"
                     src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"/>
            </View>
          </View>
        </View>
      </View>
      {/*<div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">*/}

      {/*  <div className="bg-white py-8 sm:py-32 rounded-lg">*/}
      {/*    <div className="mx-auto max-w-7xl px-6 lg:px-8">*/}
      {/*      <div className="mx-auto max-w-2xl lg:mx-0">*/}
      {/*        <h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Name</h2>*/}
      {/*        <div className="relative mt-2 rounded-md shadow-sm">*/}
      {/*          <input type="text" name="account-number" id="account-number"*/}
      {/*                 className="block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"*/}
      {/*                 placeholder="Type your name here"/>*/}
      {/*        </div>*/}
      {/*      </div>*/}


      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <a*/}
      {/*    className="inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70 mt-10 w-full sm:hidden"*/}
      {/*    href="./dashboard.html">Let's get started</a>*/}
      {/*</div>*/}
    </View>
  )
}

export default Index;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
