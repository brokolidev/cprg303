"use client"

import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { PlusIcon } from 'react-native-heroicons/solid'
import { router } from 'expo-router/build'
import tw from 'twrnc'

const calendar = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const hours = Array.from({ length: 24 }, (_, i) => ((i % 12) || 12).toString() + ":00")

    const [scrollTimeout, setScrollTimeout] = useState(null)
    const [showAddBtn, setShowAddBtn] = useState(true)

    const handleScroll = () => {

        if (scrollTimeout) {
            clearTimeout(scrollTimeout)
        }

        const timeout = setTimeout(() => {
            console.log('not scrolling...')
            setShowAddBtn(true)
        }, 1000);

        setScrollTimeout(timeout)
        setShowAddBtn(false)
    }


    return (
        <View style={tw`flex-1`}>
            <View>
                <Text style={tw`text-center font-bold pt-5 text-xl border-b border-gray-600`}>Calendar View</Text>
            </View>

            {/* The calendar */}
            <ScrollView horizontal onScroll={handleScroll} scrollEventThrottle={100}>
                <View>

                    {/* Header row */}
                    <View style={tw`border-b border-gray-200 flex-row`}>
                        <View style={tw`bg-gray-300 border-r border-gray-200 w-14`}></View>
                        {
                            days.map((day, index) => (
                                <View key={index} style={tw`border-r border-gray-200 min-w-20 pt-2`}>
                                    <Text style={tw`text-center font-bold`}>{day}</Text>
                                </View>
                            ))
                        }
                    </View>


                    <ScrollView onScroll={handleScroll} scrollEventThrottle={100}>

                        {
                            hours.map((hour, index) => (
                                <View style={tw`border-b border-gray-200 flex-row`} key={index}>
                                    {/* Stores the hour of the day */}
                                    <View style={tw`bg-gray-300 border-r border-gray-200 w-14 p-3`}>
                                        <Text style={tw`text-center text-xs`} >{hour}</Text>
                                    </View>


                                    {/* map out the days, giving the full table. */}
                                    {
                                        days.map((_, dayIndex) => (
                                            <View style={tw`border-r border-gray-200 min-w-20`} key={dayIndex} ></View>
                                        ))
                                    }
                                </View>
                            ))
                        }

                    </ScrollView>
                </View>
            </ScrollView>

            
            {
                showAddBtn &&
                <Pressable style={tw`absolute bottom-5 right-5 bg-white border rounded-full`} onPress={() => router.push("/calendar/add-new")}>
                    <PlusIcon style={tw`size-10`}/>
                </Pressable>
            }

            
        </View>
    )
}

export default calendar
