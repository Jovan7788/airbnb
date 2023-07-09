import service from "..";

export default {
    getEntireRoomList(offset = 0, size = 20){
        return service.get({
            url:"/entire/list",
            params: {
                offset,
                size
            }
        })
    },
}