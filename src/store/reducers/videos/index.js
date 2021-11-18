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
            title: 'Como implementar o Muller flow',
            likes: 9999
        },
        {
            id: 4,
            title: 'POZE DO RODO PROGRAMA EM PHP?',
            likes: 250
        },
        {
            id: 5,
            title: 'Marcelo ta casado com aquela mina?',
            likes: 71250
        }
    ]
}

export default function video(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'TOGGLE_VIDEO':
            return {
                ...state, activeVideo: action.title
            }
        default:
            return {
                ...state
            }
    }
}