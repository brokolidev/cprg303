import {Text, View} from "react-native";

const Index = () => {
	return (
		<View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
			<Text style={{fontSize: 25, backgroundColor: "yellow"}}>
				This is a parent component
			</Text>
			<Custom_text/>
		</View>
	);
};

export default Index;

const Custom_text = () => {
	return (
		<View>
			<Text style={{fontSize: 25, backgroundColor: "green"}}>This is a child component</Text>
		</View>
	);
};

