const fractionize = (string) => {
  return string.replace('1/2', '½')
        .replace('1/3', '⅓')
        .replace('1/4', '¼')
        .replace('2/3', '⅔')
        .replace('3/4', '¾')
        .replace('1/5', '⅕')
        .replace('2/5', '⅖')
        .replace('3/5', '⅗')
        .replace('4/5', '⅘')
        .replace('1/6', '⅙')
}

export default fractionize