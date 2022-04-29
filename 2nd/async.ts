// Async - Await

let asyncFunc1 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc1 - ${msg}`);
        }, 1000);
    });
};

let asyncFunc2 = (msg: string): Promise<string> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`asyncFunc2 - ${msg}`);
        }, 1500);
    });
};

// 함수명 - 인자 string Promise<string> 반환

let promiseMain1 = (): void => {
    asyncFunc1('server part').then((result: string) => {
        console.log(result);
        return asyncFunc2('주효식');
    }).then((result: string) => {
        console.log(result);
    });
}

promiseMain1();

const asyncMain = async(): Promise<void> => {
    let result = await asyncFunc1('server part');
    console.log(result);
    result = await asyncFunc2('주효식');
    console.log(result);
}

asyncMain();