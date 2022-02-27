


let str = `
010-1231-4123.
theSecond@gmail.com
https://www.omdbapi.com/?apikey=89e04afa&s=frozen
http://localhost:1234
httsss://localhost:1234
htstsss://localhost:1234
The quick brown fox dog jumps theGold
aabbbbbggdddddd_
hxdp
동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세
d`

// const regexp = new RegExp('the', 'gi');
//g flag(옵션)를 사용하면, 검색된 문장을 'ARRAY'로 만들어준다
//***i는 array로 반환하지 않는다 (대소문자 구분만 가능케하는 옵션)
// console.log(str.match(regexp));


const regexp_literalMethod = /the/g;
// console.log(str.match(regexp_literalMethod));


const regexp = /theGold/gi;
// console.log(regexp.test(str));
// console.log(str.replace(regexp, '바뀐 부분이다')) // 원본데이터를 손상시키지 않는다.
// console.log(str)

// str = str.replace(regexp, '바뀐 부분이다');


// console.log(str.match(/\.$/gim)) 
// $ : 문자가 끝나는 위치까지 찾는다


// console.log(str.match(/h..p/g)) // h(임의의문자)(임의의문자)p
// console.log(str.match(/fox|dog/g)) //
// console.log(str.match(/fox|dog/)) // g플래그가 없을 경우, 둘 중 먼저 찾아지는 것만 찾음
// console.log(str.match(/dog|fox/)) //


// console.log(str.match(/htt?p?/g)) //




// console.log(str.match(/d{2,5}/g)) // 2개 이상 5개 이하 연속 일치
// console.log(str.match(/\b\w{2,3}\b/g))
// \w : 숫자 영어 알파벳 을 모두 검색
// \b : 숫자, 영어, 알파벳을 제외한 것을 '경계'로 만들어준다 --> 010-234 <==여기서는 하이픈(-)


// console.log(str.match(/\bf\w{1,}\b/g)); // 소문자 f로 시작하는 모든 단어
// console.log(str.match(/\d{1,}/g)); //숫자 덩어리만



// const h = `  the hello world    !

// `
// console.log(h.replace(/\s/g, "")); //숫자 덩어리만


  
// console.log(str.match(/.{1,}(?=@)/g)); // 앞쪽일치패턴 -> @ 골뱅이 앞쪽을 매칭
console.log(str.match(/(?<=@).{1,}/g));