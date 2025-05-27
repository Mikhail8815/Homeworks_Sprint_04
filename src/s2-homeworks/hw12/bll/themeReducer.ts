type initStateType = {
    themeId: number
}
const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsTypes): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID' : {
            return {...state, themeId: action.id}
        }
        // дописать
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID' as const, id }) as const // fix any
 export type ChangeThemeIdType = ReturnType<typeof changeThemeId>
export type ActionsTypes = ChangeThemeIdType