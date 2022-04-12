export{};

let name: string = "주효식";
console.log(name);

const num: number = 3;
console.log(num);

let arr: number[] = [1, 2, 3];

const strArr: Array<string> = ['hello', 'world'];

const objArr: Array<object> = [
    { item: 'value' },
    { item: 'value2' }
];

const foo = (obj: object): void => {
    console.log(obj);
}

const boo = (obj: Object): void => {
    console.log(obj);
}

// foo('hi'); // string과 같은 primitive type은 object에 할당 불가
boo('hi');

function foo2(a: number, b: number): number {
    return a + b;
}

const boo2 = (a: number, b: number): number => {
    return a + b;
}

// null과 undefined는 이름 그대로가 타입
const nullType: null = null;
const undefinedType: undefined = undefined;

// 타입 단던 (Type assertions)
let myName: any = '주효식';
let myNameLength1: number = (<string>myName).length; // angle-bracket
let myNameLength2: number = (myName as string).length; // as

// any : 어떤 타입이라도 any에 할당 가능
const unknown: any = {
    name: '채정아',
    age: 18,
    organization: 'SOPT',
    season:  [28, 29, 30]
};