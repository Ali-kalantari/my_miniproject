const initstate = {
    counter :0
}

const reducer = (state = initstate , action) => {
    switch(action.type) {
        case"inc":
            return{
                counter : state.counter + 1
            }
        case"dec":
            return{
                counter : state.counter -1
            }
        case"add":
            return{
                counter : state.counter + 2
            }
        case"sub":
            return{
                counter : state.counter - 2
            } 
        default :
        return state
    }
    

}
export default reducer;