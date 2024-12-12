import * as Icons from "react-native-heroicons/solid";
import {Tabs} from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs screenOptions={{
			tabBarActiveTintColor: 'blue',
			headerShown          : false,
			tabBarLabelStyle     : {
				fontSize: 12,
				padding : 5
			},
			tabBarStyle          : {
				paddingTop: 8,
				minHeight : 60
			}
		}}>
			<Tabs.Screen
				name="index"
				options={{
					title     : 'Home',
					tabBarIcon: ({color}) => <Icons.HomeIcon size={28} name="index" color={color}/>
				}}
				styles={{padding: 20}}
			/>
			<Tabs.Screen
				name="history"
				options={{
					title     : 'History',
					tabBarIcon: ({color}) => <Icons.DocumentTextIcon size={28} name="history" color={color}/>
				}}
			/>
			<Tabs.Screen
				name="timer"
				options={{
					title     : 'Timer',
					tabBarIcon: ({color}) => <Icons.ClockIcon size={28} name="timer" color={color}/>
				}}
			/>
			<Tabs.Screen
				name="calendar"

				options={{
					title     : 'Calendar',
					tabBarIcon: ({color}) => <Icons.CalendarIcon size={28} name="calendar" color={color}/>
				}}
			/>
		</Tabs>
	);
}
