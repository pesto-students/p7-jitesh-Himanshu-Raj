const isValidExpression = (exp) => {
  const stack = [];
  const pairs = { "(": ")", "[": "]", "{": "}" };

  for (const c of exp) {
    if (c in pairs) {
      stack.push(c);
    } else if (c !== pairs[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValidExpression("{([])}"));
console.log(isValidExpression("()"));
console.log(isValidExpression("([]"));
console.log(isValidExpression("[(])"));

//Time complexity: O(N) where n is the length of the input expression string.
//Space complexity: O(N) stack can grow up to n if expression consists of only left brackets.
