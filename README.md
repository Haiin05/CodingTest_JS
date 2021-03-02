# CodingTest_JS

# Java Script level 1

## 수박수박수

### 문제

> 길이가 n이고, 수박수박수박수....와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 수박수박을 리턴하고 3이라면 수박수를 리턴하면 됩니다.

### 제한 조건

n은 길이 10,000이하인 자연수입니다.

### 입출력 예

|  n  |   return   |
| :-: | :--------: |
|  3  |  "수박수"  |
|  4  | "수박수박" |

---

## 같은 숫자는 싫어

### 문제

> 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,
> arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
> arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
> 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

### 제한 조건

- 배열 arr의 크기 : 1,000,000 이하의 자연수
- 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

### 입출력 예

|          arr          |  return   |
| :-------------------: | :-------: |
| [1, 1, 3, 3, 0, 1, 1] | [1,3,0,1] |
|    [4, 4, 4, 3, 3]    |   [4,3]   |

---

## 평균 구하기

### 문제

> 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

### 제한 조건

- arr은 길이 1 이상, 100 이하인 배열입니다.
- arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.

### 입출력 예

|    arr    | return |
| :-------: | :----: |
| [1,2,3,4] |  2.5   |
|  [5, 5]   |   5    |

---

## 신규 아이디 추천

### 문제

[프로그래머스 가서 보기](https://programmers.co.kr/learn/courses/30/lessons/72410)

---

## 문자열 다루기 기본

### 문제

[프로그래머스 가서 보기](https://programmers.co.kr/learn/courses/30/lessons/12918)

> 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 a234이면 False를 리턴하고 1234라면 True를 리턴하면 됩니다.

### 제한 조건

s는 길이 1 이상, 길이 8 이하인 문자열입니다.

### 입출력 예

|   s    | return |
| :----: | :----: |
| "a234" | false  |
| "1234" |  true  |

---

## 두 개 뽑아서 더하기

### 문제

[프로그래머스 가서 보기](https://programmers.co.kr/learn/courses/30/lessons/68644)

> 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

### 제한 조건

numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.

### 입출력 예

|   numbers   |    return     |
| :---------: | :-----------: |
| [2,1,3,4,1] | [2,3,4,5,6,7] |
|  [5,0,2,7]  | [2,5,7,9,12]  |

---

## 핸드폰 번호 가리기

### 문제

[프로그래머스 가서 보기](https://programmers.co.kr/learn/courses/30/lessons/12948)

프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 \*으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

### 제한 조건

s는 길이 4 이상, 20이하인 문자열입니다.

### 입출력 예

| phone_number  |      return      |
| :-----------: | :--------------: |
| "01033334444" | "**\*\*\***4444" |
|  "027778888"  |   "**\***8888"   |

---

## dateConvert

### 문제

format from M/D/YYYY to YYYYMMDD

---

## checkDigit

### 문제

자리수의 모든 숫자를 더해서 한 자리 숫자가 나올때 까지 더하기

---

## throwError

### 문제

throw 사용해서 error 만들기

---

## removeObj

### 문제

객체안에 property 가 있는지 확인 후 있으면 제거

---

## 알파벳숫자

### 문제

주어진 문자열에서 주어진 숫자만큼 알파벳 순서에서 전진하여 반환

### 제한 조건

- 빈 문자열은 n에 상관없이 빈 문자열을 반환합니다.
- 대문자는 대문자를 소문자는 소문자를 반환합니다.

### 입출력 예

|   s   |  n  | return |
| :---: | :-: | :----: |
| "aBc" |  1  | "bCd"  |
| "AB"  |  1  |  "BC"  |
|  ""   |  1  |   ""   |

---
