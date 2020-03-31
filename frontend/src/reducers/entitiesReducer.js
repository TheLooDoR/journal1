import {GET_DEPARTMENTS, GET_GROUPS, GET_SUBJECT_TYPES, GET_SUBJECTS} from "../actions";

const initialState =  {
    departments: [],
    groups: [],
    subjectTypes: [],
    subjects: []
}

export default (state = initialState , action ) => {
    switch (action.type) {
        case GET_GROUPS:
            return {
                ...state,
                groups: action.payload
            }
        case GET_SUBJECT_TYPES:
            return {
                ...state,
                subjectTypes: action.payload
            }
        case GET_SUBJECTS:
            return {
                ...state,
                subjects: action.payload
            }
        case GET_DEPARTMENTS:
            return {
                ...state,
                departments: action.payload
            }
        default:
            return state
    }
}