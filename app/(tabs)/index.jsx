import React, {useCallback, useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';
import * as SQLite from "expo-sqlite";

const TabIndex = () => {

	const [userName, setUserName] = useState('');

	const avatarUrl = {
		avatar1: "https://plus.unsplash.com/premium_photo-1731404830883-67fffdba8339?w=500&auto=format&fit=crop&q=60",
		avatar2: "https://images.unsplash.com/photo-1615946027884-5b6623222bf4?w=500&auto=format&fit=crop&q=60",
		avatar3: "https://plus.unsplash.com/premium_photo-1732333561909-a1643049dd4a?w=500&auto=format&fit=crop&q=60",
		avatar4: "https://images.unsplash.com/photo-1558624232-75ee22af7e67?w=500&auto=format&fit=crop&q=60",
	}

	const [avatarImageUrl, setAvatarImageUrl] = useState(avatarUrl.avatar1);


	const loadData = useCallback(async () => {
		try {
			const db = await SQLite.openDatabaseAsync('cprg303');
			const firstRow = await db.getFirstAsync('SELECT * FROM UserPreferences');
			setUserName(firstRow.userName);
			setAvatarImageUrl(avatarUrl[firstRow.defaultAvatar]);
		} catch (error) {
			console.error(error)
		}
	}, [])

	useEffect(() => {
		loadData();
	}, [loadData])

	const upcomingItems = [
		{
			title: "CPRG303 Mobile Application Development",
			date: "Thursday, August 29, 2024 / 3 hours",
			imgSrc: "https://cdn.sanity.io/images/ssqh4ksj/production/c734dd394de943820a25b4b96eace0855ab44749-2016x1344.png?w=1170&h=780&auto=format",
		},
		{
			title: "CPRG307 Web Application Development",
			date: "Thursday, August 29, 2024 / 3 hours",
			imgSrc: "https://cdn.sanity.io/images/ssqh4ksj/production/c734dd394de943820a25b4b96eace0855ab44749-2016x1344.png?w=1170&h=780&auto=format",
		},
		{
			title: "CPRG307 Web Application Development",
			date: "Thursday, August 29, 2024 / 3 hours",
			imgSrc: "https://cdn.sanity.io/images/ssqh4ksj/production/c734dd394de943820a25b4b96eace0855ab44749-2016x1344.png?w=1170&h=780&auto=format",
		},
		{
			title: "CPRG307 Web Application Development",
			date: "Thursday, August 29, 2024 / 3 hours",
			imgSrc: "https://cdn.sanity.io/images/ssqh4ksj/production/c734dd394de943820a25b4b96eace0855ab44749-2016x1344.png?w=1170&h=780&auto=format",
		},
	];

	return (
		<ScrollView style={styles.container}>
			<View style={styles.profileContainer}>
				<View style={styles.profile}>
					<Image
						source={{ uri: avatarImageUrl }}
						style={styles.profileImage}
					/>
					<View style={styles.profileText}>
						<Text style={styles.profileGreeting}>Good Morning,</Text>
						<Text style={styles.profileName}>{userName}</Text>
					</View>
				</View>
			</View>

			<View style={styles.upcomingContainer}>
				<Text style={styles.upcomingTitle}>What's Up Next</Text>
				<FlatList
					data={upcomingItems}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => (
						<View style={styles.upcomingItem}>
							<Image source={{ uri: item.imgSrc }} style={styles.upcomingImage} />
							<View style={styles.upcomingTextContainer}>
								<Text style={styles.upcomingDate}>{item.date}</Text>
								<Text style={styles.upcomingTitleText}>{item.title}</Text>
							</View>
						</View>
					)}
					scrollEnabled={false} // FlatList 스크롤 비활성화
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f7f7f7',
	},
	profileContainer: {
		paddingTop: 36,
	},
	profile: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	profileImage: {
		width: 48,
		height: 48,
		borderRadius: 24,
	},
	profileText: {
		marginLeft: 16,
	},
	profileGreeting: {
		fontSize: 14,
		fontWeight: '500',
	},
	profileName: {
		fontSize: 14,
		color: '#6b6b6b',
	},
	upcomingContainer: {
		marginTop: 24,
		backgroundColor: '#f5f5f5',
		paddingBottom: 56,
	},
	upcomingTitle: {
		fontSize: 24,
		fontWeight: '600',
		marginHorizontal: 16,
		marginBottom: 8,
	},
	upcomingItem: {
		backgroundColor: '#ffffff',
		borderRadius: 20,
		marginVertical: 20,
		marginHorizontal: 32,
		elevation: 4,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 10,
	},
	upcomingImage: {
		width: '100%',
		height: 200,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		resizeMode: 'cover',
	},
	upcomingTextContainer: {
		padding: 16,
	},
	upcomingDate: {
		fontSize: 12,
		color: '#757575',
	},
	upcomingTitleText: {
		fontSize: 16,
		fontWeight: '500',
		marginTop: 8,
	},
});

export default TabIndex;
