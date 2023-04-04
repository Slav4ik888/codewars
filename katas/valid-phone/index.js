const str1 = "+7(903)-123-45-67";

console.log(str1.match(/\d/g).join('')); // 79031234567

const str2 = "+7(903)-123-45-67";

console.log(str2.replace(/\D/g, "")); // 79031234567



export const getPhone = (str) => str.replace(/\D/g, ``);


export const isValidPhone = (str) => {
  const reg = getPhone(str);
  return reg === str
}