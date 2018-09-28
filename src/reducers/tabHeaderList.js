import { handleActions } from 'redux-actions'

const tabList = JSON.parse(sessionStorage.getItem('tabList'));

const initialState = {
  list: tabList ? tabList.list : [],
  activeKey: tabList ? tabList.activeKey : '',
}
const tabListResult = handleActions({
  'requestTabList' (state, action) {
    return { ...state, loading: false }
  },
  'updateTabList' (state, action) {
    const data = action.payload
    const findList = state.list.find(tab => tab.key === data.key);
    const list = findList === undefined ? [...state.list, data] : state.list;
    sessionStorage.setItem('tabList', JSON.stringify({ list, activeKey: data.key, loading: false }));
    return { list, activeKey: data.key, loading: false }
  },
  'updateTabChecked' (state, action) {
    const { activeKey } = action.payload;
    sessionStorage.setItem('tabList', JSON.stringify({ ...state, activeKey, loading: false }));
    return { ...state, activeKey, loading: false }
  },
  'deleteTabFromList' (state, action) {
    const { targetKey } = action.payload
    const list = []
    let delIndex = 0
    let { activeKey } = state
    state.list.map((tab, index) => {
      tab.key === targetKey ? delIndex = index : list.push(tab);
    });
    if (state.activeKey === targetKey) {
      // eslint-disable-next-line no-nested-ternary
      activeKey = list[delIndex] ? list[delIndex].key :
        (list[delIndex - 1] ? list[delIndex - 1].key : '');
    }
    sessionStorage.setItem('tabList', JSON.stringify({ list, activeKey, loading: false }));
    return { list, activeKey, loading: false }
  },
}, initialState)

//export { tabListResult as default }
export default tabListResult;