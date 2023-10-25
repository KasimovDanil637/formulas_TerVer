const noPlK = document.getElementById('no-pl-k')
const wiPlK = document.getElementById('wi-pl-k')
const noPlN = document.getElementById('no-pl-n')
const wiPlN = document.getElementById('wi-pl-n')
const noPlA = document.getElementById('no-pl-a')
const wiPlA = document.getElementById('wi-pl-a')
const noPlEq = document.getElementById('no-pl-eq')
const wiPlEq = document.getElementById('wi-pl-eq')

const noPerN = document.getElementById('no-per-n')
const wiPerK = document.getElementById('wi-per-k')
const wiPerN = document.getElementById('wi-per-n')
const noPerA = document.getElementById('no-per-a')
const wiPerA = document.getElementById('wi-per-a')
const noPerEq = document.getElementById('no-per-eq')
const wiPerEq = document.getElementById('wi-per-eq')

const noComK = document.getElementById('no-com-k')
const wiComK = document.getElementById('wi-com-k')
const noComN = document.getElementById('no-com-n')
const wiComN = document.getElementById('wi-com-n')
const noComA = document.getElementById('no-com-a')
const wiComA = document.getElementById('wi-com-a')
const noComEq = document.getElementById('no-com-eq')
const wiComEq = document.getElementById('wi-com-eq')

const leftUpK = document.getElementById('up-k')
const leftUpM = document.getElementById('up-m')
const leftDownK = document.getElementById('down-k')
const leftDownN = document.getElementById('down-n')
const leftEq = document.getElementById('left-eq')
const leftAnswer = document.getElementById('left-answer')

const rightUpLeftR = document.getElementById('up-left-r')
const rightUpLeftM = document.getElementById('up-left-m')
const rightUpRightK = document.getElementById('up-left-k')
const rightUpRightN = document.getElementById('up-left-n')
const rightUpRightR = document.getElementById('up-right-r')
const rightUpRightM = document.getElementById('up-right-m')
const downRightK = document.getElementById('down-right-k')
const downRightN = document.getElementById('down-right-n')
const rightEq = document.getElementById('right-eq')
const rightAnswer = document.getElementById('right-a')
noPl()
wiPl()
noPer()
wiPer()
noCom()
wiCom()
left()
double()
right()
function noPl(){
    noPlEq.addEventListener('click', () => {
        let k = Number(noPlK.value)
        let n = Number(noPlN.value)
        let nF = 1;
        let f = 1;
        if (k <= n && k >= 0 && n >= 0) {
            nF = fact(n)
            f = fact(n-k)
            noPlA.value = nF / f
        } else {
            alert("Error: k <= n, k >= 0, n >= 0")
        }
    })
}
function wiPl(){
    wiPlEq.addEventListener('click', () => {
        let k = Number(wiPlK.value)
        let n = Number(wiPlN.value)
        let f = 1
        if (k >= 0 && n >= 0) {
            for (let i = 1; i <= k; i++) {
                f *= n
            }
        } else {
            alert("Error: k >= 0, n >= 0")
        }
        wiPlA.value = f
    })
}
function noPer(){
    noPerEq.addEventListener('click', () => {
        let n = Number(noPerN.value)
        if(n >= 0) {
            noPerA.value = fact(n)
        } else {
            alert("Error: n >= 0")
        }
    })
}
function wiPer(){
    wiPerEq.addEventListener('click', () =>{
        let array = wiPerK.value.split(',')
        let n = Number(wiPerN.value)
        let sum = 0;
        for (let i = 0; i < array.length; i++){
            if (array[i] >= 0) {
                sum += Number(array[i])
            } else {
                alert("Error: ... >= 0")
                return
            }
        }
        if (sum === n && n >= 0){
            let nF = fact(n)
            let p = 1
            for (let i = 0; i < array.length; i++){
                p *= fact(array[i])
            }
            wiPerA.value = nF / p
        } else {
            alert("Error: n >= 0")
        }
    })
}
function noCom() {
    noComEq.addEventListener('click', () =>{
        let n = Number(noComN.value)
        let k = Number(noComK.value)
        if (k <= n && k >= 0 && n >= 0) {
            let nF = fact(n)
            let kF = fact(k)
            let nkF = fact(n - k)
            noComA.value = nF / (kF * nkF)
        } else {
            alert("Error: k <= n, k >= 0, n >= 0 ")
        }
    })
}
function c(k,n){
    let nF = fact(n)
    let kF = fact(k)
    let nkF = fact(n - k)
    return  nF / (kF * nkF)
}
function wiCom(){
    wiComEq.addEventListener('click', () => {
        let n = Number(wiComN.value)
        let k = Number(wiComK.value)
        if (n >= 0 && k >= 0) {
            let uF = fact(k + n - 1)
            let dfo = fact(n - 1)
            let kf = fact(k)
            wiComA.value = uF / (dfo * kf)
        } else {
            alert("Error: n >= 0, k >= 0")
        }
    })
}
function fact(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * fact( num - 1 ); }
}
function double(){
    leftUpK.addEventListener('input',() => {
        leftDownK.value = leftUpK.value
    })
    leftDownK.addEventListener('input',() => {
        leftUpK.value = leftDownK.value
    })
    rightUpLeftR.addEventListener('input', () => {
        rightUpRightR.value = rightUpLeftR.value
    })
    rightUpRightR.addEventListener('input', () => {
        rightUpLeftR.value = rightUpRightR.value
    })
    rightUpRightK.addEventListener('input', ()=>{
        downRightK.value = rightUpRightK.value
    })
    downRightK.addEventListener('input', ()=>{
        rightUpRightK.value = downRightK.value
    })
    rightUpRightN.addEventListener('input',() => {
        downRightN.value = rightUpRightN.value
    })
    downRightN.addEventListener('input', () => {
        rightUpRightN.value = downRightN.value
    })
    rightUpLeftM.addEventListener('input', () => {
        rightUpRightM.value = rightUpLeftM.value
    })
    rightUpRightM.addEventListener('input', () => {
        rightUpLeftM.value = rightUpRightM.value
    })

}
function left(){
    leftEq.addEventListener('click', () => {
        let k = Number(leftUpK.value)
        let n = Number(leftDownN.value)
        let m = Number(leftUpM.value)
        if (k < m && k < n && k >= 0 && n >= 0 && m >= 0 && n >= m){
            leftAnswer.value = c(k,m) / c(k,n)
        } else {
            alert("Error: k < m, k < n, k >= 0, n >= 0, m >= 0, n >= m")
        }
    })
}
function right(){
    rightEq.addEventListener('click',()=>{
        let k = Number(downRightK.value)
        let n = Number(downRightN.value)
        let m = Number(rightUpRightM.value)
        let r = Number(rightUpRightR.value)
        if (k < n && r < m && k < m && k >= 0 && n >= 0 && m >= 0 && r >= 0 && n >= m && k >= r){
            rightAnswer.value = (c(r,m) * c((k-r),(n-m))) / c(k,n)
        } else {
            alert("Error: k < n, r < m, k < m, k >= 0,  n >= 0, m >= 0, r >= 0, n >= m, k >= r")
        }
    })
}
