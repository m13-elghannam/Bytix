function fun31(d){
    if (d*10 >= 100){
        return d*10
    }
    else return 100
}
console.log("31) " + fun31(15))

function fun32(arr,h){
    let x = true
    for(let i of arr){
        if (h >= i) {
            continue
        }
        else {
            x=false
            break
        }
    }
    return x
}
console.log("32) " + fun32([1,2,3,4,5],5))

function fun33(arr){
    for (let i in arr) {
        if (arr[i]%2 == 0) arr[i]--
        else arr[i]++
    }
    return arr
}
console.log("33) " + fun33([1,2,3,4,5]))

function fun34(b){
    let arr = [1,0]
    return arr[b]
}
console.log("34) " + fun34(0))

function fun35(name,num){
    if (num == 1) return "hello " + name
    else return "bye" + name
}
console.log("35) " + fun35("alon",1))

function fun36(arr){
    let x = arr.length - 2 
    if (arr.length == 0) {
        return "no users online"
    }
    else if (arr.length == 1) {
        return "user1 online"
    }
    else if (arr.length == 2) {
        return "user2 online"
    }
    else if (arr.length > 2) {
        return ("user1, user 2 and " + x + " more users online")
    }
}
console.log("36) " + fun36(["muhammad","mostafa","farag","mostafa","muhammad","ibrahim","ismail","elghannam"]))

function fun37(arr){
    let x = true
    for(let i of arr){
        if (arr[0] == i) continue
        else {
            x = false
            break
        }
    }
    return x
}
console.log("37) " + fun37(["#","#","#"]))

function fun38(str){
    let result = ""
    for(let i in str){
        if (str[i] === "a") {
            result += "4"
        }
        else if (str[i] === "e") {
            result += "3"
        }
        else if (str[i] === "i") {
            result += "1"
        }
        else if (str[i] === "o") {
            result += "0"
        }
        else if (str[i] === "s") {
            result += "5"
        }
        else {
            result += str[i]
        }
    }
    return result
}
console.log("38) " + fun38("javascript is cool"))

console.log("39) we didn't take math object")

function fun40(arr){
    let sum = 0
    for(let i of arr){
        for ( let j in i){
            if (Number(j)%2 == 0) sum += Number(j)
        }
    }
    return sum
}
console.log("40) " + fun40([[1,0,2],[5,5,7],[9,4,3]]))

function fun41(str){
    let result = ""
    for ( let i of str) {
        if (i=="a"||i=="e"||i=="i"||i=="o"||i=="u") result += i 
        else continue
    }
    for ( let i of str) {
        if (i=="a"||i=="e"||i=="i"||i=="o"||i=="u") continue
        else result +=i
    }
    return result
}
console.log("41) " + fun41("Hello!"))

function fun42(str){
    let result = ""
    for (let i = str.length - 1 ; i>=0 ; i--){
        if (str[i] == "A") result += "U"
        else if (str[i] == "U") result += "A"
        else if (str[i] == "G") result += "C"
        else if (str[i] == "C") result += "G"
    }
    return result
}
console.log("42) " + fun42("UCUCG"))

console.log("43) can't solve")

function fun44(arr){
    let x
    let frst = arr[0]
    let scnd = arr[1]

    if (frst > scnd) {
        x = "deccreasing"
        for(let i of arr) {
            if (arr[0]>i || arr[0]==arr[0]) continue
            else {
                x = "neither"
                break
            }
        }
    }
    else if (frst < scnd) {
        x = "increasing"
        for (let i in arr) {
            if (arr[0]<i || arr[0]==arr[0]) continue
            else {
                x = "neigther"
                break
            }
        }
    }
    else {
        x = "neigther"
    }
    return x
}
console.log("44) " + fun44([1,2,3]))

console.log("39) we didn't take string methods")