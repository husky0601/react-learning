// createStore用来专门生产state和dispatch的集合
// createStore接受两个参数：state表示应用程序的状态，stateChanger描述应用程序状态会根据action发生什么变化
// 最后返回一个对象，其包含两个方法：getState将state参数返回，dispatch用于修改数据
export function createStore(state, stateChanger) {
    const getState = () => state
    const dispatch = (action) => stateChanger(state, action)
    return { getState, dispatch }
}

