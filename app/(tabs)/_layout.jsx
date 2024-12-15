import * as Icons from "react-native-heroicons/solid";
import {Tabs} from 'expo-router';

const TabLayout = () => {
	return (
		<Tabs screenOptions={{
			tabBarActiveTintColor: '#2363eb',
			headerShown          : false,
			tabBarLabelStyle     : {
				fontSize: 12,
			},
			tabBarStyle          : {
				minHeight : 56
			}
		}}>
			<Tabs.Screen
				name="index"
				options={{
					title     : 'Home',
					tabBarIcon: ({color}) => <Icons.HomeIcon size={24} name="index" color={color}/>
				}}
			/>
			<Tabs.Screen
				name="history"
				options={{
					title     : 'History',
					tabBarIcon: ({color}) => <Icons.DocumentTextIcon size={24} name="history" color={color}/>
				}}
			/>
			<Tabs.Screen
				name="timer"
				options={{
					title     : 'Timer',
					tabBarIcon: ({color}) => <Icons.ClockIcon size={24} name="timer" color={color}/>
				}}
			/>
			<Tabs.Screen
				name="calendar"

				options={{
					title     : 'Calendar',
					tabBarIcon: ({color}) => <Icons.CalendarIcon size={24} name="calendar" color={color}/>
				}}
			/>
		</Tabs>
	);
}

export { TabLayout };
