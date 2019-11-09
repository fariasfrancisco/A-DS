/*
  Is a string balanced?
  { } => squiggles
  [ ] => brackets
  ( ) => parenthesis

  balanced examples: {}()[[]], [({})], ({[]})
  unbalanced examples: [({)}], ({[}), ()}[]
 */
function isBalanced(string) {
  let stack = [];
  const l = string.length;
  const check = [{open: '(', close: ')'}, {open: '[', close: ']'}, {open: '{', close: '}'}];

  for (let i = 0; i < l; i++) {
    const elm = check.find(element => string.charAt(i) === element.open);

    if (elm != null) stack.push(elm.close);

    if ([')', ']', '}'].includes(string.charAt(i))) {
      if (stack[stack.length - 1] !== string.charAt(i)) return false;

      stack.splice(-1, 1);
    }
  }

  return stack.length < 1;
}
