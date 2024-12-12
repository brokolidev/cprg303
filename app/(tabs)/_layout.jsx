import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';

export default function TabLayout() {
	return (
		<Tabs screenOptions={{
			tabBarActiveTintColor: 'blue',
			headerShown          : false

		}}>
			<Tabs.Screen
				name="index"
				options={{
					title     : 'Dashboard',
					tabBarIcon: ({color}) => <FontAwesome size={28} name="index" color={color}/>
				}}
			/>
			<Tabs.Screen
				name="settings"
				options={{
					title     : 'Settings',
					tabBarIcon: ({color}) => <FontAwesome size={28} name="cog" color={color}/>
				}}
			/>
		</Tabs>
	);
}