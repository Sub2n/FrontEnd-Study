const numUniqueEmails = function (emails) {
  const locals = emails.map(email => {
    const local = email.split('@')[0].split('+');
    const domain = email.split('@')[1];
    return local[0].split('.').join('') + '@' + domain;
  });

  const uniqueEmails = new Set(locals);
  return uniqueEmails.size;
};

console.log(numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]));