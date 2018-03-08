// 转化字符串的第一个字母为大写
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

var string = 'door'
console.log(capitalizeFirstLetter(string))