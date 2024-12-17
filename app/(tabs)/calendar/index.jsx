"use client"

import { View, Text, ScrollView, Pressable, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PlusIcon } from 'react-native-heroicons/solid'
import { router } from 'expo-router/build'
import "../../../global.css";
import { getEvents } from '../../../services/event-service'
import CalendarCell from '../../../components/calendar-cell'

const Calendar = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //keep it in 24 hour time
    const hours = Array.from({ length: 24 }, (_, i) => i);

    const [scrollTimeout, setScrollTimeout] = useState(null);
    const [showAddBtn, setShowAddBtn] = useState(true);
    const [events, setEvents] = useState([]);

    const handleScroll = () => {

        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }

        const timeout = setTimeout(() => {
            console.log('not scrolling...');
            setShowAddBtn(true);
        }, 1000);

        setScrollTimeout(timeout);
        setShowAddBtn(false);
    }

    const getDateTimeInCurrentWeek = (dayOfWeek, hour, top = true) => {
        const currentDate = new Date(Date.now());

        //reset everything that isn't needed
        currentDate.setHours(hour);
        currentDate.setMinutes(top ? 0 : 59); //set it either to the beginning or end of the hour
        currentDate.setSeconds(0);
        currentDate.setMilliseconds(0);


        const currentDay = currentDate.getDay();

        //move to the beginning of the week, then add the dayOfWeek passed in.
        const diff = (currentDate.getDate() - currentDay + dayOfWeek)
        currentDate.setDate(diff)

        return new Date(currentDate)
    }

    const getEventsForTime = (dayIndex, hour) => {
        
        const items = events.filter(event => {
            return new Date(event.start) < getDateTimeInCurrentWeek(dayIndex, hour, false)
            && new Date(event.end) > getDateTimeInCurrentWeek(dayIndex, hour)
        })

        return items.map(item => {
            return {
                start: new Date(item.start),
                end: new Date(item.end),
                ...(item)
            }
        });
    }

    useEffect(() => {
        //this stops lots of fetches, but there still will be a few.
        if (events.length == 0 || showAddBtn) {
            console.log("fetching events...")
            getEvents()
                .then(response => {
                    setEvents((response ?? []));
                    console.log(events.length);
                })
        }
    }, [showAddBtn])

    return (
        <SafeAreaView className="flex-1">
            <View>
                <Text className="text-center font-bold pt-5 text-xl border-b border-gray-600">Calendar View</Text>
            </View>

            {/* The calendar */}
            <ScrollView horizontal onScroll={handleScroll} scrollEventThrottle={100}>
                <View>

                    {/* Header row */}
                    <View className="border-b border-gray-200 flex-row">
                        <View className="bg-gray-300 border-r border-gray-200 w-16"></View>
                        {
                            days.map((day, index) => (
                                <View key={index} className="border-r border-gray-200 w-32 pt-2">
                                    <Text className="text-center font-bold">{day}</Text>
                                </View>
                            ))
                        }
                    </View>


                    <ScrollView onScroll={handleScroll} scrollEventThrottle={100}>

                        {
                            events.length > 0
                            ? (
                                hours.map((hour, index) => (
                                    <View className="border-b border-gray-200 flex-row" key={index}>
                                        {/* Stores the hour of the day */}
                                        <View className="bg-gray-300 border-r border-gray-200 w-16 p-3">
                                            <Text className="text-center text-xs" >{((hour % 12) || 12).toString() + ":00"}</Text>
                                        </View>
    
    
                                        {/* map out the days, giving the full table. */}
                                        {
                                            days.map((_, dayIndex) => (
                                                <View className="border-r border-gray-200 w-32" key={dayIndex} >
    
                                                    {/* this will be split into two halves. */}
    
                                                    <CalendarCell
                                                        startTime={getDateTimeInCurrentWeek(dayIndex, hour)}
                                                        endTime={getDateTimeInCurrentWeek(dayIndex, hour, false)}
                                                        events={getEventsForTime(dayIndex, hour)}
                                                    />
                                                    
                                                </View>
                                            ))
                                        }
                                    </View>
                                ))
                            )
                            : (
                                <View className="flex">
                                    <Text className="text-2xl font-bold">Loading data...</Text>
                                </View>
                            )
                        }

                    </ScrollView>
                </View>
            </ScrollView>

            
            {
                showAddBtn &&
                <Pressable className="absolute bottom-5 right-5 bg-white border rounded-full" onPress={() => router.push("/calendar/add-new")}>
                    <PlusIcon className="size-10"/>
                </Pressable>
            }

            
        </SafeAreaView>
    )
}

export default Calendar

const styles = StyleSheet.create({
    
})
