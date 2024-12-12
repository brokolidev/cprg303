import {View} from "react-native";
import {useEffect, useState} from "react";
import {Link, useNavigation} from "expo-router";

const Index = () => {
	const navigation = useNavigation();

	useEffect(() => {
		navigation.setOptions({headerShown: false});
	}, [navigation]);

	const [activeAvatar1, setActiveAvatar1] = useState(true);
	const [activeAvatar2, setActiveAvatar2] = useState(false);
	const [activeAvatar3, setActiveAvatar3] = useState(false);
	const [activeAvatar4, setActiveAvatar4] = useState(false);

	const [userName, setUserName] = useState("");

	function selectAvatar(e) {
		const id = e.currentTarget.id;

		setActiveAvatar1(false);
		setActiveAvatar2(false);
		setActiveAvatar3(false);
		setActiveAvatar4(false);

		switch (id) {
			case 'avatar1':
				setActiveAvatar1(true);
				break;
			case 'avatar2':
				setActiveAvatar2(true);
				break;
			case 'avatar3':
				setActiveAvatar3(true);
				break;
			case 'avatar4':
				setActiveAvatar4(true);
				break;
		}
	}

	return (
		<View>
			<div className="bg-gray-50 py-24 sm:py-32">
				<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
					<h1 className="text-center font-semibold text-indigo-600">MyStudyLife</h1>
					<p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
						Select your profile</p>
					<div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">

						<div className="bg-white py-8 sm:py-32 rounded-lg">
							<div className="mx-auto max-w-7xl px-6 lg:px-8">
								<div className="mx-auto max-w-2xl lg:mx-0">
									<h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Name</h2>
									<div className="relative mt-2 rounded-md shadow-sm">
										<input type="text" name="account-number" id="account-number"
										       className="block w-full rounded-md border-0 py-1.5 pl-4 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
										       placeholder="Type your name here"/>
									</div>
								</div>
								<div className="mx-auto max-w-2xl lg:mx-0 mt-8">
									<h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Choose
										Avatar</h2>
								</div>
								<ul role="list"
								    className="mx-auto mt-4 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6">
									<li onClick={selectAvatar} id="avatar1">
										<img
											className={`mx-auto size-24 rounded-full ${activeAvatar1 ? 'border-4 border-indigo-500/100' : ''}`}
											src="https://plus.unsplash.com/premium_photo-1731404830883-67fffdba8339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyJTIwY2hhcmFjdGVyfGVufDB8fDB8fHww"
											alt=""/>
									</li>
									<li onClick={selectAvatar} id="avatar2">
										<img
											className={`mx-auto size-24 rounded-full ${activeAvatar2 ? 'border-4 border-indigo-500/100' : ''}`}
											src="https://images.unsplash.com/photo-1615946027884-5b6623222bf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhciUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D"
											alt=""/>
									</li>
									<li onClick={selectAvatar} id="avatar3">
										<img
											className={`mx-auto size-24 rounded-full ${activeAvatar3 ? 'border-4 border-indigo-500/100' : ''}`}
											src="https://plus.unsplash.com/premium_photo-1732333561909-a1643049dd4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGF2YXRhciUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D"
											alt=""/>
									</li>
									<li onClick={selectAvatar} id="avatar4">
										<img
											className={`mx-auto size-24 rounded-full ${activeAvatar4 ? 'border-4 border-indigo-500/100' : ''}`}
											src="https://images.unsplash.com/photo-1558624232-75ee22af7e67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGF2YXRhciUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D"
											alt=""/>
									</li>
								</ul>
							</div>
						</div>

						<Link href={{pathname: '(tabs)'}}
						      className="inline-flex justify-center rounded-2xl bg-blue-600 p-4 text-base font-semibold
							text-white hover:bg-blue-500 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2
							focus-visible:outline-blue-500 active:text-white/70 mt-10 w-full sm:hidden">
							Let's get started
						</Link>
					</div>
				</div>
			</div>
		</View>
	);
};

export default Index;

