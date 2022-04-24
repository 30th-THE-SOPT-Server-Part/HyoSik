// Promise

const condition: boolean = true;

const promise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('성공');
    } else {
        reject(new Error('실패'));
    }
});

promise
    .then((resolveData): void => {
        // resolve는 then으로 받아 옴
        console.log(resolveData);
    })
    .catch(error => console.log(error));


// Promise Chaining

const restaurant = (callback: () => void, time: number) => {
    // () => void는 argument가 없고 return 값도 없는 함수의 타입 (callback)
    setTimeout(callback, time);
};

const order = (): Promise<string> => {
    // Promise의 resolve에서 string 값을 반환하기 때문에 Promise<string> 타입
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황 - 음식 주문]');
            resolve('음식 주문 시작');
        }, 1000);
    });
};

const cook = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황 - 음식 조리]');
            resolve(`${progress} -> 음식 조리 중`);
        }, 2000);
    });
};

const serving = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황 - 음식 서빙]');
            resolve(`${progress} -> 음식 서빙 중`);
        }, 2500);
    });
};

const eat = (progress: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        restaurant(() => {
            console.log('[레스토랑 진행 상황 - 음식 먹기]');
            resolve(`${progress} -> 음식 먹는 중`);
        }, 3000);
    });
};

order()
    .then(progress => cook(progress))
    .then(progress => serving(progress))
    .then(progress => eat(progress))
    .then(progress => console.log(progress));

// 여러 개의 Promise, 하나의 catch
Promise.resolve(123)
    .then(res => {
        throw new Error('에러 발생!');
        return 456
    })
    .then(res => {
        console.log(res); // 절대 실행되지 않음
        return Promise.resolve(789)
    })
    .catch(err => {
        console.log(err.message);
    });