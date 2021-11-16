const INITIAL_STATE = {
    activeVideo: false,
    playlist: [
        {
            id: 1,
            title: 'Como programar em PHP',
            likes: 570
        },
        {
            id: 2,
            title: 'Como ser sênior',
            likes: 1250
        },
        {
            id: 3,
            title: 'Como ser sênior',
            likes: 1250
        }
    ]
}

export default function video(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'TOGGLE_VIDEO':
            return {
                ...state, activeVideo: action.id
            }
        default:
            return {
                ...state
            }
    }
}