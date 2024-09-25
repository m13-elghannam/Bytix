function fun16(num,exp){
    return num**exp
}
console.log("16) " + fun16(5,5));

function fun17(arr,ind){
    for( let i in arr){
        if (arr[i] != ind) {
            continue
        }
        else if (arr[i]==ind) return i
    }
}
console.log("17) " + fun17(["hi" , "edabit" , "fgh"],"fgh"))

function fun18(arr){
    let arr2 = []
    for (i of arr) {
        arr2.push(typeof(i))
    }
    return arr2
}
console.log("18) " + fun18([1,2,"null",[]]))

function fun19(str){
    let length = 0
    for (i in str) {
        length++    
    }
    return length
}
console.log("19) " + fun19("hello world"))

function fun20(arr1){
    let arr2 = []
    for (i in arr1){
        arr2.push(Number(arr1[i]) + Number(i))
    }
    return arr2
}
console.log("20) " + fun20([1,2,3,4,5]))

function fun21(n){
    let sum = 0
    for (let i = 0 ; i <= n ; i++ ){
        if (i%2 == 0) continue
        else sum = sum + i
    }
    return sum
}
console.log("21) " + fun21(13))

function fun22(arr1){
    let arr2 = []
    for (let i of arr1){
        if (typeof(i)=="number") arr2.push(i)
        else continue
    }
    return arr2
}
console.log("22) " + fun22([1,2,3,"a","b",4]))

function fun23(n){
    let sum = 0
    for (let i = 0 ; i <= n ; i++ ){
        sum = sum + i**2
    }
    return sum
}
console.log("23) " + fun23(3))

function fun24(str){
    let arr = []
    for (let i of str){
        if (i == 1) arr.push(true)
        else arr.push(false)
    }
    return arr
}
console.log("24) " + fun24("100101"))

function fun25(n){
    let arr = []
    for ( let i =1 ; i<=10 ; i++){
        arr.push(n*i + 1)
    }
    return arr
}
console.log("25) " + fun25(7))

function fun26(m,n,s){
    let result = []
    let str
    for (let i = 0 ; i < n ; i++){
        str = ""
        for (let j = 0 ; j < m ; j++){
            if (s) str += s
            else str += "#"
        }
        result.push(str)
    }
    return result
}
console.log("26) " + fun26(3,5))

function fun27(str,arr){
    let x = true
    for(let i of arr){
        for(let j of i){
            if (str == j) {
                x = false 
                break
            } 
        }
        if (x == false) break
    }
    return x
}
console.log("27) " + fun27("r",["rock","paper","scissors"]))

function fun28(arr,str){
    let x = 0
    for (let i of arr){
        if (i.includes(str)) x++
        else continue
    }
    return x
}
console.log("28) " + fun28(["sep 22","sep 20","oct 15"] , "sep"))

console.log("29) can't solve")

function fun30(num){
    let arr=[]
    for (let i = 1 ; i <= num ; i++) {
        if (num%i == 0) arr.push(i)
        else continue
    }
    return arr
}
console.log("30) " + fun30(12))