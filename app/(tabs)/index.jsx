import {SafeAreaView} from 'react-native';

export default function Tab() {
	return (
		<SafeAreaView>
			<div className="py-4 sm:py-32">
				<ul role="list" className="mx-auto mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-8">
					<li className="flex items-center gap-4">
						<img alt=""
						     src="https://plus.unsplash.com/premium_photo-1731404830883-67fffdba8339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyJTIwY2hhcmFjdGVyfGVufDB8fDB8fHww"
						     className="size-12 rounded-full"/>
						<div className="text-sm/6">
							<h3 className="font-medium">Good Morning,</h3>
							<p className="text-gray-500">Michael Foster</p>
						</div>
					</li>
				</ul>

				<div className="mt-8 bg-gradient-to-t from-gray-100 pb-14">
					<div className="px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:max-w-7xl">
							<h2 className="text-2xl font-medium tracking-tight">What's Up Next</h2>
							<div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">

								<div
									className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5">
									<img alt="A crossed out European emblem"
									     src="https://cdn.sanity.io/images/ssqh4ksj/production/c734dd394de943820a25b4b96eace0855ab44749-2016x1344.png?w=1170&amp;h=780&amp;auto=format"
									     className="aspect-[3/2] w-full rounded-2xl object-cover"/>
									<div className="flex flex-1 flex-col p-8">
										<div className="text-sm/5 text-gray-700">Thursday, August 29, 2024 / 3 hours
										</div>
										<div className="mt-2 text-base/7 font-medium">
											<p>
												<span className="absolute inset-0"></span>CPRG303 Mobile Application
												Development
											</p>
										</div>
									</div>
								</div>

								<div
									className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md shadow-black/5 ring-1 ring-black/5">
									<img alt="A crossed out European emblem"
									     src="https://cdn.sanity.io/images/ssqh4ksj/production/c734dd394de943820a25b4b96eace0855ab44749-2016x1344.png?w=1170&amp;h=780&amp;auto=format"
									     className="aspect-[3/2] w-full rounded-2xl object-cover"/>
									<div className="flex flex-1 flex-col p-8">
										<div className="text-sm/5 text-gray-700">Thursday, August 29, 2024 / 3 hours
										</div>
										<div className="mt-2 text-base/7 font-medium">
											<p>
												<span className="absolute inset-0"></span>CPRG307 Web Application
												Development
											</p>
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		</SafeAreaView>
	);
}