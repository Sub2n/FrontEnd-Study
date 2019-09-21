function solution(n) {
  const fibonacci = [0, 1];
  let i = 2;
  while (i <= n) {
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;
    i += 1;
  }
  return fibonacci[n];
}