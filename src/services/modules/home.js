import service from "..";

export default {
    getHomeGoodPriceData(){
        return service.get({
            url:"/home/goodprice"
        })
    },
    getHomeHighScoreData(){
        return service.get({
            url:"/home/highscore"
        })
    },
    getHomeDiscountData(){
        return service.get({
            url:"/home/discount"
        })
    },
    getHomeHotRecommendData(){
        return service.get({
            url:"/home/hotrecommenddest"
        })
    },
    getHomeLongforData(){
        return service.get({
            url:"/home/longfor"
        })
    },
    getHomePlusData(){
        return service.get({
            url:"/home/plus"
        })
    },
}