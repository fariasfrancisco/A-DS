/*
  Is a string balanced?
  { } => squiggles
  [ ] => brackets
  ( ) => parenthesis

  balanced examples: {}()[[]], [({})], ({[]})
  unbalanced examples: [({)}], ({[}), ()}[]
 */
function isBalanced (string) {
  let stack = []
  const l = string.length;

  for (let i = 0; i < l; i++) {
    if (string.charAt(i) === '(') stack.push(')');
    if (string.charAt(i) === '[') stack.push(']');
    if (string.charAt(i) === '{') stack.push('}');

      if ([')', ']', '}'].includes(string.charAt(i))) {
        if (stack[stack.length - 1] !== string.charAt(i)) return false;

        stack.splice(-1, 1);
      }
  }

  return stack.length < 1
}
