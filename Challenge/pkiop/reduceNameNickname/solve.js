const inputArray = [
	{
		name: '홍길동',
		nickname: 'hong',
	},
	{
		name: '둘리',
		nickname: '2li',
	},
	{
		name: '오스트랄로피테쿠스',
		nickname: '1Cin',
	}
];

// write your codes

const result = inputArray.reduce((acc, el) => {
  return {
    ...acc,
    [el.nickname]: el.name,
  }
}, {});

console.log(result);

