let state = {
	postsPage: {
		postsData: [
			{ id: 1, message: 'Всем Прювет:)', countLikes: 10 },
			{ id: 2, message: 'Привет, как дела?', countLikes: 24 },
		],
	},
	dialogsPage: {
		dialogsData: [
			{ id: 1, name: 'Dima' },
			{ id: 2, name: 'Lesha' },
			{ id: 3, name: 'Misha' },
			{ id: 4, name: 'Kiril' },
			{ id: 5, name: 'Lena' },
			{ id: 6, name: 'Misha' },
			{ id: 7, name: 'Sasha' },
		],
		messagesData: [
			{ id: 1, message: 'Hi' },
			{ id: 2, message: 'Hello' },
			{ id: 3, message: 'How are you doing?' },
			{ id: 4, message: 'Wery Well' },
		]
	},
	frendsBar: [

		{ url: 'https://api.github.com/users/ilonaverenich' },
		{ url: 'https://api.github.com/users/lukas' },
		{ url: 'https://api.github.com/users/nitay' },
	]
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 3,
		message: postMessage,
		countLikes: 0
	}
	state.postsPage.postsData.push(newPost)
}

export default state