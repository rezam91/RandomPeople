export const listUpdater = (state, action) => {
    switch (action.type) {
        case 'add-person':
            return [...state, action.value]
        default:
            return state
    }
}