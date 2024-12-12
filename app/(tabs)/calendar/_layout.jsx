import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router/build'

const Layout = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{title: 'calendar', headerShown: false}} />
        <Stack.Screen
            name='add-new'
            options={{
                title: 'Add New Event',
                presentation: 'modal',
                headerShown: true,
                headerTitleAlign: 'center'
            }} />
    </Stack>
  )
}

export default Layout
