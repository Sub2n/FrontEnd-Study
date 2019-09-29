function solution(emails) {
  let answer = 0;
  emails.forEach(email => {
    const parsed = email.split('@');
    if (parsed.length === 2) {
      if (isValid(parsed)) answer += 1;
    }
    console.log('answer', answer);
  });
  return answer ? answer : -1;
}

function isValid(preParsed) {
  const nameReg = /^[a-z.*]+$/g;

  // console.log(preParsed[0], nameReg.test(preParsed[0]));


  if (!nameReg.test(preParsed[0])) return false;
  else {
    const parsed = preParsed[1].split('.');
    if (parsed.length !== 2) return false;
    const domainReg = /^[a-z]+$/g;
    if (!domainReg.test(parsed[0])) return false;
    // console.log(parsed[0], domainReg.test(parsed[0]));
    if (parsed[1] !== 'com' && parsed[1] !== 'net' && parsed[1] !== 'org') return false;
  }

  return true;
}

console.log(solution(["d@co@m.com", "a@abc.com", "b@def.com", "c1@ghi.net"]) === 2)
// console.log(solution(["abc.def@x.com", "abc", "abc@defx", "abc@defx.xyz"]) === 1)