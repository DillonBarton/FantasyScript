const str = 'lorem/ipsum/dolor/sit/amet/consectetur/adipiscing'

const arr = str.split('/');

const parentObj = `${arr[0]} = {}`

new Function(parentObj)
    
for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
        let newObj = `${arr[i]}.${arr[j]} = {}`
    }
}


console.log(parentObj)