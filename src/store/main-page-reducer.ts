import {BaseThunkType, InferActionsTypes} from "./configureStore";
import {projectApi} from "../components/Api/Api";

const initialState = {
    projectData: [],
    mainPageLoaderStatus: false,
    mainPageDownloadStatus: false,
    badRequestDownloadStatus: false,
}

const mainPageReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case "CHANGE_DATA_MAIN_PAGE": {
            return {...state, projectData: action.projectData}
        }
        case "CHANGE_LOADING_STATUS": {
            return {...state, mainPageLoaderStatus: action.mainPageLoaderStatus}
        }
        case "CHANGE_MAIN_PAGE_DOWNLOAD_STATUS": {
            return {...state, mainPageDownloadStatus: action.mainPageDownloadStatus}
        }
        case "CHANGE_BAD_REQUEST_DOWNLOAD_STATUS": {
            return {...state, badRequestDownloadStatus: action.badRequestDownloadStatus}
        }
        default:
            return state;
    }
}

export const actions = {
    changeDataMainPage: (projectData: JSONValue | any) => ({type: 'CHANGE_DATA_MAIN_PAGE', projectData} as const),
    changeLoadingStatus: (mainPageLoaderStatus: boolean) => ({
        type: 'CHANGE_LOADING_STATUS',
        mainPageLoaderStatus
    } as const),
    changeDownloadStatus: (mainPageDownloadStatus: boolean) => ({
        type: 'CHANGE_MAIN_PAGE_DOWNLOAD_STATUS',
        mainPageDownloadStatus
    } as const),
    changeBadRequestDownloadStatus: (badRequestDownloadStatus: boolean) => ({
        type: 'CHANGE_BAD_REQUEST_DOWNLOAD_STATUS',
        badRequestDownloadStatus
    } as const),
}

export const getDataForMainPage = (page: number): ThunkType => {
    return async (dispatch: any) => {
        dispatch(actions.changeLoadingStatus(true))
        let data = await projectApi.getDataForMainPage(page);
        if (data.error !== undefined) {
            dispatch(actions.changeBadRequestDownloadStatus(true))
            dispatch(actions.changeLoadingStatus(false))
            dispatch(actions.changeBadRequestDownloadStatus(false))
        } else {
            dispatch(actions.changeDataMainPage(data))
            dispatch(actions.changeLoadingStatus(false))
            dispatch(actions.changeDownloadStatus(true))
        }
    }
}

export default mainPageReducer;

export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes>
type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;
