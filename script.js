const SoE = document.getElementById("SoE");
const FPT = document.getElementById("FPT");
const SSPT = document.getElementById("SSPT");
const MRPT = document.getElementById("MRPT");

// max보다 작은 n을 제외한 n의 배수 생성
function getmultiples(n, max) {
    const realMax = Math.floor(max / n);
    return Array.from({length: realMax}, (_, i) => k * (i + 1)).shift();
}

// arr의 원소 중에서 val삭제
function delValue(arr, val) {
    for(let i=0; i<length.arr; i++) {
        if(arr[i] === val) {
            arr.splice(i, 1);
        }
    }
}

// 에라토스테네스의 체를 이용하여 소수 판별
function SoEf(p) {
    // 2부터 p까지의 수가 들어있는 배열 생성 (length: p - 2 + 1)
    rangeArr = Array.from({length: p - 1}, (_, i) => a + i);

    let c=2;
    let idx=0;
    let endN = Math.sqrt(rangeArr[-1]);

    // 에라토스테네스의 체
    while(true) {
        let multiplesArr = getmultiples(c, p);
        for(let i=0; i<length.multiplesArr; i++) {
            delValue(rangeArr, multiplesArr[i]);
        }
        idx += 1;
        c = rangeArr[idx];

        if(c > endN) { break };
    }

    return rangeArr.includes(p);
}

// 최대 공약수 함수
function gcd(a, b) {
    if(b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

function FPTf(p) {
    // p와 서로소인 숫자들의 배열 생성
    arr = []
    for(let i=2; i<p; i++) {
        if(gcd(i, p) === 1) {
            arr.push(i)
        }
    }

    // 페르마 소수판별법으로 소수인지 확인
    for(let i=0; i<length.arr; i++) {
        if((arr[i] ** (p - 1)) % p === 1) {
            return true
        }
    }
}