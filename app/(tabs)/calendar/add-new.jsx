"use client"

import { View, Text, TextInput, Pressable, Button, TouchableOpacity, Alert } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { addEvent } from '../../../services/event-service'

const AddNewEvent = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());


    /**@enum */
    const dates = Object.freeze({
        START: 1,
        END: 2,
    })

    /**@enum */
    const pickerTypes = Object.freeze({
        DATE: 'date',
        TIME: 'time'
    })

    /**
     * 
     * @param {*} selectedDate 
     * @param {dates} dateFor 
     */
    const setSelectedDate = (selectedDate, dateFor, mode) => {
        
        //check the mode of the picker. if it is the date, and the time is moving, ignore the time, and set the date
        //if it is the time, ignore the date and set the time
        switch (mode) {
        case pickerTypes.DATE:
            setForDate(selectedDate, dateFor)
            break;
        case pickerTypes.TIME:
            setForTime(selectedDate, dateFor)
            break;
        }

        //lastly, ensure the end isn't before the start.
        if (start > end) {
            setEnd(start)
        }
    }

    /**
     * 
     * @param {Date} date 
     * @param {dates} dateFor 
     */
    const setForDate = (date, dateFor) => {
        //take the old date, and force the new date in.
        let dateToModify = null;
        let dateSetter = null;

        if (dateFor == dates.START) {
            dateToModify = new Date(start);
            dateSetter = setStart;
        } else {
            dateToModify = new Date(end);
            dateSetter = setEnd;
        }

        //take the date to modify, and force the new date
        dateToModify.setDate(date.getDate());
        dateToModify.setMonth(date.getMonth());
        dateToModify.setFullYear(date.getFullYear());

        //finally, update the date
        dateSetter(dateToModify);

        console.log("Date set to: ", dateToModify);
    }

    /**
     * 
     * @param {Date} time 
     * @param {dates} dateFor 
     */
    const setForTime = (time, dateFor) => {
        //take the old date, and force the new date in.
        let dateToModify = null;
        let dateSetter = null;

        if (dateFor == dates.START) {
            dateToModify = new Date(start);
            dateSetter = setStart;
        } else {
            dateToModify = new Date(end);
            dateSetter = setEnd;
        }

        //take the date to modify, and force the new date
        dateToModify.setHours(time.getHours());
        dateToModify.setMinutes(time.getMinutes());

        //finally, update the date
        dateSetter(dateToModify);

        console.log("Time set to: ", dateToModify);
    }


    const addNew = () => {
        const startStripped = new Date(start)
        const endStripped = new Date(end)

        //stip out the seconds and milliseconds. they are unneeded.
        startStripped.setSeconds(0);
        startStripped.setMilliseconds(0);
        endStripped.setSeconds(0);
        endStripped.setMilliseconds(0);

        //ensure the minutes are either 0 or 30
        const startMinutes = startStripped.getMinutes() < 15 ? 0 : startStripped.getMinutes() < 45 ? 30 : 0;
        const endMinutes = endStripped.getMinutes() < 15 ? 0 : endStripped.getMinutes() < 45 ? 30 : 0;

        if (startMinutes == 0 && startStripped.getMinutes() >= 45) {
            startStripped.setHours(startStripped.getHours() + 1);
        }

        if (endMinutes == 0 && endStripped.getMinutes >= 45) {
            endStripped.setHours(endStripped.getHours() + 1);
        }

        startStripped.setMinutes(startMinutes);
        endStripped.setMinutes(endMinutes);

        //ensure there is a valid title
        if (!title) {
            Alert.alert("Invalid Data", "The title must be filled in.")
            return;
        }


        //get a random picture
        const randomSeed = (Math.random() * 100).toString().replaceAll(".", "");

        const eventImage = `https://picsum.photos/seed/${randomSeed}/200/300`

        //add the new event to the database
        addEvent({
            start: startStripped,
            end: endStripped,
            title: title,
            imgSrc: eventImage,
            description: description,
        })
            .then(response => {
                console.log(response.lastInsertRowId);
                Alert.alert("Success", "Event created successfully!");
            })
            .catch(err => {
                Alert.alert("ERROR", "An error occurred while creating the event: " + err)
            })
    }

    return (
        <View className="p-3 flex-1 items-center flex-col gap-7">
        
            {/* Event title */}
            <View className="w-5/6 flex flex-col items-center">
                <Text className="text-lg font-semibold">Event Title:</Text>
                <TextInput
                    className="border shadow-md rounded-lg p-3 w-full"
                    onChangeText={(text) => setTitle(text)}
                />
            </View>
            
            {/* Event description */}
            <View className="w-5/6 flex flex-col items-center">
                <Text className="text-lg font-semibold">Event Description:</Text>
                <TextInput
                    className="border shadow-md rounded-lg p-3 w-full"
                    onChangeText={(text) => setDescription(text)}
                />
            </View>
            
            {/* Event start */}
            <View className="w-5/6 flex gap-3 flex-col items-center border-b border-gray-300 pb-2">
                <Text className="text-lg font-semibold">Event Start:</Text>
                <View className="flex flex-row gap-5">
                    <DateTimePicker
                        value={start}
                        mode={pickerTypes.DATE}
                        onChange={(event, selectedDate) => setSelectedDate(selectedDate, dates.START, pickerTypes.DATE)}
                    />
                    <DateTimePicker
                        value={start}
                        mode={pickerTypes.TIME}
                        minuteInterval={30}
                        onChange={(event, selectedDate) => setSelectedDate(selectedDate, dates.START, pickerTypes.TIME)}
                    />
                </View>

            </View>

            {/* Event end */}
            <View className="w-5/6 flex flex-col gap-3 items-center border-b border-gray-300 pb-2">
                <Text className="text-lg font-semibold">Event End:</Text>
                <View className="flex flex-row gap-3">
                    <DateTimePicker
                        value={end}
                        mode={pickerTypes.DATE}
                        onChange={(event, selectedDate) => setSelectedDate(selectedDate, dates.END, pickerTypes.DATE)}
                    />
                    <DateTimePicker
                        value={end}
                        mode={pickerTypes.TIME}
                        minuteInterval={30}
                        onChange={(event, selectedDate) => setSelectedDate(selectedDate, dates.END, pickerTypes.TIME)}
                    />
                </View>

            </View>

            <View>
                {/* pressables don't work here */}
                <Button title='Add Event' onPress={addNew}></Button>
            </View>
        </View>
  )
}

export default AddNewEvent
