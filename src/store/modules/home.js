import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "@/services/modules/home"

const homeSlice = createSlice({
    name:"home",
    initialState:{
        goodPriceInfo: {},
        highScoreInfo: {},
        discountInfo: {},
        recommendInfo: {},
        longforInfo: {},
        plusInfo: {}
    },
    reducers:{
        changeGoodPriceInfoAction(state,{payload}){
            state.goodPriceInfo = payload
        },
        changeHighScoreInfoAction(state, { payload }) {
            state.highScoreInfo = payload
        },
        changeDiscountInfoAction(state, { payload }) {
            state.discountInfo = payload
        },
        changeRecommendInfoAction(state, { payload }) {
            state.recommendInfo = payload
        },
        changeLongforInfoAction(state, { payload }) {
            state.longforInfo = payload
        },
        changePlusInfoAction(state, { payload }) {
            state.plusInfo = payload
        }
    }
})

const fetchHomeDataAction = createAsyncThunk("fetchdata",(payload,{dispatch})=>{
    api.getHomeGoodPriceData().then(res=>{
        dispatch(changeGoodPriceInfoAction(res))
    })
    api.getHomeHighScoreData().then(res=>{
        dispatch(changeHighScoreInfoAction(res))
    })
    api.getHomeDiscountData().then(res=>{
        dispatch(changeDiscountInfoAction(res))
    })
    api.getHomeHotRecommendData().then(res=>{
        dispatch(changeRecommendInfoAction(res))
    })
    api.getHomeLongforData().then(res=>{
        dispatch(changeLongforInfoAction(res))
    })
    api.getHomePlusData().then(res=>{
        dispatch(changePlusInfoAction(res))
    })
})

export default homeSlice.reducer
export const {
    changeGoodPriceInfoAction, 
    changeHighScoreInfoAction,
    changeDiscountInfoAction,
    changeRecommendInfoAction,
    changeLongforInfoAction,
    changePlusInfoAction
} = homeSlice.actions
export {
    fetchHomeDataAction
}