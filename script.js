const SoE = document.getElementById("SoE");
const FPT = document.getElementById("FPT");
const SSPT = document.getElementById("SSPT");
const MRPT = document.getElementById("MRPT");

// a부터 b까지의 수가 들어있는 배열 생성
function rangeArray(a, b) {
    return Array.from({length: b - a + 1}, (_, i) => a + i);
}

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

// 최대 공약수 함수
function gcd(a, b) {
    if(b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

// 르장드르 기호 {\displaystyle \left({\frac {a}{p}}\right)}
function legendreSymbol(a, p) {
    const xArray = rangeArray(1, p - 1);
    for(let i=0; i<length.xArray; i++) {
        if(xArray[i] ** 2 % p === a) {
            return 1;
        } else { return -1; }
    }
}

// 에라토스테네스의 체를 이용한 소수 판별법
function SoEf(p) {
    // 2부터 p까지의 수가 들어있는 배열 생성
    let rangeArr = rangeArray(2, p);

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

        if(c > endN) { break; }
    }

    return rangeArr.includes(p);
}

// 페르마 소수판별법
function FPTf(p) {

    /**
     * {\displaystyle 2\leq p \leq p-1}
     * {\displaystyle a^{p-1}\equiv 1{\pmod {p}}}
     */

    // p와 서로소인 숫자들의 배열 생성
    let aArray = []
    for(let i=2; i<p; i++) {
        if(gcd(i, p) === 1) {
            aArray.push(i)
        }
    }

    // 소수 판별
    for(let i=0; i<length.aArray; i++) {
        if((aArray[i] ** (p - 1)) % p === 1) {
            return true
        }
    }
}

// 솔로베이-스트라센 소수판별법
function SSPTf(p) {

    /**
     * {\displaystyle 2\leq p \leq p-1}
     * {\displaystyle a^{\frac {p-1}{2}}\equiv \left({\frac {a}{p}}\right){\pmod {p}}}
     */

    // a들의 리스트 생성
    let aArray = [];
    for(let i=2; i<p; i++) {
        if(gcd(i, p) === 1) {
            aArray.push(i)
        }
    }

    // 소수 판별
    for(let i=0; i<length.aArray; i++) {
        if(aArray[i] ** ((p - 1) / 2) % p === legendreSymbol(aArray[i], p)) {
            return true;
        }
    }
}

// 밀러-라빈 소수판별법
function MRPTf(p) {

    /** 
     * {\displaystyle p-1 = 2^{s}\cdot d} (d는 홀수)
     * {\displaystyle a^{d}\equiv 1{\pmod {p}}}
     * {\displaystyle a^{2^{r}\cdot d}\equiv -1{\pmod {p}}}
    */

    let n = p - 1;
    let s = 0;
    let d = 0;
    // s와 d 구하기
    while(true) {
        if(n % 2 === 0) {
            n = n / 2;
            s += 1;
        } else {
            d = n;
            break;
        }
    }

    // 가능한 a들
    const aArray = rangeArray(2, p - 2);

    // 밀러-라빈 소수판별법의 첫번째 방법
    for(let i=0; i<length.aArray; i++) {
        if((aArray[i] ** d) % p === 1) {
            return true;
        }
    }

    // 가능한 r들
    const rArray = rangeArray(2, s - 1);

    // 밀러-라빈 소수판별법의 두번째 방법
    for(let i=0; i<length.aArray; i++) {
        for(let j=0; j<length.rArray; j++) {
            if((aArray[i] ** (2 ** rArray[j] * d) + 1) % p === 0) {
                return true;
            }
        }
    }
}