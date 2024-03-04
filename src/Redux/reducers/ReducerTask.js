const GlobalState=[
    /*{
        id:0,
        name:"",
        check:false,
    }*/
]

const Reducer=(state=GlobalState,action)=>{
    switch(action.type){
        case "ADD": return [...state,action.payload];
        case "DELETE": return state.filter(e=>e.id!==action.payload );
        case "CHECK":return state.map(e=>e.id==action.payload ? {...e,check:!e.check}:e);
        default:return state;
    }
}
export default Reducer;