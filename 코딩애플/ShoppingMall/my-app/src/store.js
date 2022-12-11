import {configureStore, createSlice} from '@reduxjs/toolkit'

let user = createSlice ({
    name : 'user',
    initialState : {name : 'kim', age : 20,},
    reducers : {
        changeAge(state){
            state.age += 1; 
        },
        changeAge2(state, a){
            state.age += a.payload // 이걸 꼭 써야함.
        },
    }
});
// State

export let { changeAge, changeAge2 } = user.actions;

let stock = createSlice ({
    name : 'stock',
    initialState : [10,11,12]
});

let item = createSlice({
    name : 'item',
    initialState: [
        {id : 1, name : 'white and black', count : 2},
        {id : 2, name : 'Gery Yordan', count : 1},
        {id : 3, name : 'green', count : 3},
    ],
    reducers: {
        addCount(state, i) {
            state[i.payload].count += 1
        }
    }
});
export let { addCount } = item.actions;

export default configureStore ({
    reducer: {
        user : user.reducer,
        stock : stock.reducer,
        item : item.reducer,
    }
})