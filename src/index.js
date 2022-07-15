// const config1 = [['(', ')']];
// const config2 = [['(', ')'], ['[', ']']];
// const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
// const config4 = [['|', '|']];
// const config5 = [['(', ')'], ['|', '|']];
// const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
// const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// const str = '([{}])';

module.exports = function check(str, bracketsConfig) {
//  function check(str, bracketsConfig) {
  let brackets = bracketsConfig.join('').replace(/,/g, '');
  console.log(brackets);

  let arr = [];

  for (let bracket of str){
    let index = brackets.indexOf(brackets);

    if (index % 2 === 0) {

      if (bracket === brackets[index + 1] && arr[arr.length - 1] === index) {
        arr.pop();
      } else if (bracket === brackets[index + 1] && arr[arr.length -1] !== index) {
        arr.push(index);
      } else {
        arr.push(index);
      }
    }
    else {
      if (arr.pop() !== index-1) {
        return false;
      }
    }

  }
  return arr.length === 0

}
