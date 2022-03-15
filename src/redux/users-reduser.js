


let initialState = {
	users: [
		{id: 1, fullName: 'Dmitry K', status: 'Люблю этот Мир', location: {city: 'Minsk', country: 'Belarus'}},
		{id: 2, fullName: 'Andry Sh', status: 'Хочу кушать', location: {city: 'Minsk', country: 'Belarus'}},
		{id: 3, fullName: 'Ирина', status: 'Замужем', location: {city: 'Гродно', country: 'Belarus'}},
		{id: 4, fullName: 'Kiril', status: 'I\'am the BOSS', location: {city: 'Moscow', country: 'Rassia'}},
	]
}

const usersReducer = (state = initialState, action) => {


	switch (action.type) {

		case : {
			return {

			}
		}

		default: return state

	}
}