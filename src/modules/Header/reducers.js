

const initialBalanceState = {
    balance: 100
}

export const balanceReducer = (state = initialBalanceState, action) => {
    console.log('balance reducer', action);
    switch (action.type) {
        case BALANCE_UPDATE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};


const initialNotificationState = [];

export const notificationReducer = (state = initialNotificationState, action) => {
    console.log('notification reducer', action);
    switch (action.type) {
        case NOTIFICATION_ADD:
            return {
                ...state,
                ...action.payload
            };
        case NOTIFICATION_DELETE:
            return {
                ...state,
                ...action.payload
            };
        case NOTIFICATION_CLEAR_ALL:
            return {
                state = []
            };
        default:
            return state;
    }
};

const initialConfirmationsState = {
    toggleConfirm: true
};

export const confirmationsReducer = (state = initialConfirmationsState, action) => {
    console.log('confirmations reducer', action);
    switch (action.type) {
        case TOGGLE_CONFIRMATIONS:
            return {
                ...state,
                toggleConfirm: !state.toggleConfirm
            };
        default:
            return state;
    }
};


export const languageReducer = (state = languageConfig, action) => {
    console.log('language reducer', action);
    switch (action.type) {
        case LANGUAGE_SET_RU:
            return {
                ...state,

            };
        case LANGUAGE_SET_EN:
            return {
                ...state,
            };
        default:
            return state;
    }
};