#include <stdio.h>
#include <iostream>
using namespace std;

/*
���� : d[n] = n�� 1�� ����µ� �ʿ��� �ּ� ���� Ƚ��
n���� ������ ���
1. n�� 3���� ������ ������ �� 3���� ������ ��� - d[n/3] + 1
2. n�� 2�� ������ ������ �� 2�� ������ ��� - d[n/2] + 1
3. i���� 1�� ���� ��� - d[n-1] + 1
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

