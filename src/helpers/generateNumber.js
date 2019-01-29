import findIndex from 'lodash/findIndex';

export default (n, data) => {
  const numbers = [];

  for(let i = 1; i <= n; i++) {
    const generatedNumber = generateNumber();

    if(findIndex(numbers, (number) => number.phoneNumber === generatedNumber ) === -1) {
      numbers.push({
        id: i,
        phoneNumber: generatedNumber,
      });
    };
  };

  return numbers;
};

const generateNumber = () => {
  return '0'+Math.random().toString().slice(2,11);
}