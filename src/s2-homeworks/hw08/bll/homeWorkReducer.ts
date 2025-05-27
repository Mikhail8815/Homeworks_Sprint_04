import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { //
            const sortedState = [...state]
            sortedState.sort((a, b) => {
                if (action.payload === 'up') {
                    return a.name.localeCompare(b.name); // Сортировка по имени по возрастанию
                } else {
                    return b.name.localeCompare(a.name); // Сортировка по имени по убыванию
                }
            })
            return sortedState // need to fix
        }
        case 'check': {

            return state.filter(el => el.age >= 18) // need to fix
        }
        default:
            return state
    }
}
