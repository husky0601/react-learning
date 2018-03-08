// 通过函数来生成action
function ActionCreate(type, ...argName){
    return function(...argName){
        let action = {type}
        if(argName.indexOf('payload') === -1) {
            argName.push('playload')
        }
        argName.forEach((arg, index) => {
            action[argName[index]] = arg[index]
            // console.log('arg[' + index + ']')
            // console.log('arg[index]',arg[index])
        })
        return action
    }
}
const ADD_DOOR = 'ADD_DOOR'
const action = ActionCreate(ADD_DOOR, 'parama')
console.log('action', action)