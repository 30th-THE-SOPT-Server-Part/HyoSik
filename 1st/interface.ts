export{} 

interface SOPT {
    name: string;
    age: number;
    organization: string;
    season: number[];
    isGoinMul?: boolean;
}

const sopts: SOPT[] = [
    {
        name: '주효식',
        age: 24,
        organization: 'SOPT',
        season: [29, 30]
    },
    {
        name: '이승헌',
        age: 24,
        organization: 'SOPT',
        season: [29, 30]
    },
    {
        name: '장서현',
        age: 23,
        organization: 'SOPT',
        season: [27, 28, 29, 30],
        isGoinMul: true // real fact!
    }
];