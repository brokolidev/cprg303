"use client"

import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'

/**
 * 
 * @param {Object} param0 
 * @param {Date} param0.startTime
 * @param {Date} param0.endTime
 * @param {Object[]} param0.events
 * @returns 
 */
const CalendarCell = ({ startTime, endTime, events }) => {

    const [first, setFirst] = useState([])
    const [second, setSecond] = useState([])

    useEffect(() => {
        //get the mid point between the start and end time.
        const mid = new Date(startTime)
        mid.setTime(mid.getTime() + (30 * 60000))

        //filter the events into the first and second, based on whether they exist in that time
        setFirst(events?.filter(event => new Date(event.start) < mid && new Date(event.end) > new Date(startTime)))
        setSecond(events?.filter(event => new Date(event.start) < new Date(endTime) && new Date(event.end) > mid))
    }, [])

    return (
        <View style={tw`flex`}>
      
            {/* First (00 - 30) */}
            <View style={tw`min-h-10 flex flex-row justify-around overflow-hidden`}>
                {
                    first.map(event =>
                        <View key={event.id} style={tw`border rounded-lg p-1 border-gray-500`}>
                            <Text style={tw`font-semibold`}>{event.title}</Text>
                            <Text>{event.description}</Text>
                        </View>
                    )
                }
            </View>
      
            {/* Second (30 - 59) */}
            <View style={tw`min-h-10 flex flex-row justify-around overflow-hidden`}>
                {
                    second.map(event =>
                        <View key={event.id} style={tw`border rounded-lg p-1 border-gray-500`}>
                            <Text style={tw`font-semibold`}>{event.title}</Text>
                            <Text>{event.description}</Text>
                        </View>
                    )
                }
            </View>

        </View>
    )
}

export default CalendarCell
