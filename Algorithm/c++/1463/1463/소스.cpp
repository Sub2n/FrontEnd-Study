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

int go(int n) {

}

int main(void) {
	go(2); // 1
	go(10); // 3
}

