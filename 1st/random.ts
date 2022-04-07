// 과제 조건
// 1. Member, Dinner interface 만들고 타입 지정하기
// 2. organize 내부 로직 채우기
export{};

interface member {
    name: string;
    group: string;
};

interface dinner {
    member: member[];
    shuffle: Function;
    organize: Function;
};

const dinner: dinner = {
    member: [
        {
            name: '주효식',
            group: 'ob'
        },
        {
            name: '이동현',
            group: 'yb'
        },
        {
            name: '김경린',
            group: 'yb'
        },
        {
            name: '유송경',
            group: 'yb'
        },
        {
            name: '박진수',
            group: 'ob'
        }
    ],
    shuffle(array: member[]) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array: member[]) {
        let dinnerMember: member[] = this.shuffle(array);
        // ob, yb에 명시적으로 타입 지정하니까 에러 발생... 어디서 타입 지정하고 어디서 지정하면 안되는지 확실히 모르겠음
        const ob = dinnerMember.find(selected => selected.group === "ob");
        const yb = dinnerMember.find(selected => selected.group === "yb");
        console.log(`오늘의 저녁 식사 멤버는 ${ob?.name}, ${yb?.name}`);
    }
};

dinner.organize(dinner.member);