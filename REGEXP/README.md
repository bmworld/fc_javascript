# 정규표현식 (RegExp)

정규식, Regyular Expression


## 역할

- 문자 검색 (search)
- 문자 대체 (replace)
- 문자 추출 (extract)

## 테스트 사이트

https://regexr.com
(자바스크립트에서만 작동하는 regexr일 수 있다. 테스트 필요)


## 정규식 생성

```js
//생성자 방식
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi')


// 리터럴 방식
/표현/옵션
/[a-z]/gi
```




## 예제 뭄ㄴ자

```js
const str = `
010-1231-4123
thehgello@gmail.com
https://www.omdbapi.com/?apikey=89e04afa&s=frozen'
The quick brown fox jumps theGold
`
```


## 메소드

메소드 | 문법 | 설명
--|--|--
test | `정규식.test(문자열)` | 일치 여부 (boolean 반환)
match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array)
replace | `문자열.replace(정규식)` | 일치하는 문자를 대체


## 플래그 (옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(global)
i | 영어 대소문자 구분않고 일치 검색(ignore case)
m | 여러 줄(줄바꿈 /n) 인식 후 일치 검색(multi line)



## 패턴(표현)

패턴 | 설명
--|--
^ab | 줄(Line) '시작'에 있는 ab와 일치
ab$ | 줄(Line) '끝'에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a 또는 b와 일치
ab? | 물음표 바로 앞 문자(b)가 없거나 b와 일치

{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하 연속 일치