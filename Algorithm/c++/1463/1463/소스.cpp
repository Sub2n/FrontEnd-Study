#include <stdio.h>
#include <iostream>
using namespace std;

/*
문제 : d[n] = n을 1로 만드는데 필요한 최소 연산 횟수
n에게 가능한 경우
1. n이 3으로 나누어 떨어질 때 3으로 나누는 경우 - d[n/3] + 1
2. n이 2로 나누어 떨어질 때 2로 나누는 경우 - d[n/2] + 1
3. i에서 1을 빼는 경우 - d[n-1] + 1
*/


// Top-down (Recursion)
int go(int n, int* d) {
	if (n == 1) return 0;
	if (d[n] > 0) return d[n];

	d[n] = go(n - 1, d) + 1;

	if (n % 2 == 0) {
		int temp = go(n / 2, d) + 1;
		if (temp < d[n]) d[n] = temp;
	}

	if (n % 3 == 0) {
		int temp = go(n / 3, d) + 1;
		if (temp < d[n]) d[n] = temp;
	}

	return d[n];
}


// Bottom-up
int main(void) {
	int n;
	cin >> n;
	
	static int d[(int)1E6 + 1];

	d[1] = 0;

	for (int i = 2; i <= n; i++) {
		d[i] = d[i - 1] + 1;
		if (i % 2 == 0 && d[i] > d[i / 2] + 1) d[i] = d[i / 2] + 1;
		if (i % 3 == 0 && d[i] > d[i / 3] + 1) d[i] = d[i / 3] + 1;
	}

	cout << d[n];
}

