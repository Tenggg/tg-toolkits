/**
 * 字符串首字母大写
 * @param str
 */
function fistLetterUpper(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default fistLetterUpper;
