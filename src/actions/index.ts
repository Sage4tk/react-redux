//counter actions
export const increment = (nr:any) => {
    return {
        type: 'INCREMENT',
        payload: nr
    }
}

export const decrement = (nr:any) => {
    return {
        type: 'DECREMENT',
        payload: nr
    }
}

//log action
export const log = () => {
    return {
        type: 'SIGN_IN'
    }
}