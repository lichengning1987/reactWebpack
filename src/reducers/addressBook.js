import { handleActions } from 'redux-actions'

const colorList = ['red', 'blue', 'black']

const initialState = {
  color: '#373D41'
}

const changeColorStyle = handleActions({
  'changeColor' (state, action) {
    const data = action.payload;
    console.log(data, state, 333);
    const color = colorList[Math.floor(Math.random() * 3)]
    return { color, loading: false }
  }
}, initialState)


export { changeColorStyle as default }