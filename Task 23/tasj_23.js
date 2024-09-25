function fun46(a){
    return (a-2)*180
}
console.log("46) " + fun46(3))

function fun47(name){
    let x = "Edabit"
    let result = name + " " + x
    return result
}
console.log("47) " + fun47("Muhammad"))

function fun48(arr){
    for(let i in arr){
        arr[i] = arr[i]*-1
    }
    return arr
}
console.log("48) " + fun48([1,-2,3]))

function fun49(a,o,b){
    if(o === "+") return a + b;
    else if(o === "-") return a - b;
    else if(o === "*") return a * b;
    else if(o === "/" && b === 0) return "null";
    else if(o === "/") return a / b;
    else return "null"
}
console.log("49) " + fun49(7,"+",6))

function fun50(num1,num2){
    let x = 0
    for(let i = num1 ; (i/num2)%1 != 0 ; i--) x++
    return x
}
console.log("50) " + fun50(13,5))

function fun51(f,d,n){
    let result = ""
    for (let i = 0 ; i < n ; i++) {
        if (i == n-1) result += String(f) 
        else result += String(f) + ", "
        f += d
    }
    return result
}
console.log("51) " + fun51(1,2,5))

function fun52(str){
    let result = ""
    for(let i in str){
        if (str[i] === "4") {
            result += "A"
        }
        else if (str[i] === "5") {
            result += "S"
        }
        else if (str[i] === "0") {
            result += "O"
        }
        else if (str[i] === "1") {
            result += "I"
        }
        else {
            result += str[i]
        }
    }
    return result
}
console.log("52) " + fun52("MUB45H1R"))

function fun53(l,i){
    let a = 0
    let result = ""
    for (let x of l){
        for (let y of x){
            a++
            if (i.includes(a)) result += y
        }
    }
    return result
}
console.log("53) " + fun53([["m","u","b"],["a","s",'h'],["i","r","x"]],[1,3,5,8]))

function fun54(str){
    let result = ""
    for (let i = str.length - 1 ; i >= 0 ; i--) {
        result += str[i]
    }
    return result
}
console.log("54) " + fun54("abc"))

console.log("55) can't understand")

function fun56(num){
    let x = true
    if (num >= 0){
        for (let i of String(num)){
            if (String(num)[0] == i) continue
            else x = false
            break
        }
    }
    else x = false
    return x
}
console.log("56) " + fun56(66))

function fun57(arr){
    return function fun57_2(num){
        let result = []
        for (let i of arr){
            result.push(i*num)
        }
        return result
    }
}
console.log("57) " + fun57([1,2,3])(2))

function fun58(arr){
    for (let i of arr) {
        if (!arr.includes(-i)) return i
    }
}
console.log("58) " + fun58([1,-1,2,-2,3]))

function fun59(arr){
    let sum = 0
    for ( let i of arr) {
        for (let j of i) {
            if (j == "#") sum += 5
            else if (j == "O") sum += 3
            else if (j == "X") sum += 1
            else if (j == "!") sum -= 1
            else if (j == "!!") sum -= 3
            else if (j == "!!!") sum -= 5
        }
    }
    if ( sum >= 0 ) return sum
    else return 0
}
console.log("59) " + fun59([["#","!"],["!!","X"]]))

console.log("60) can't understand")