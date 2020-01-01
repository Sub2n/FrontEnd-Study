#include <stdio.h>
using namespace std;

int main() {
	int a, b;
	scanf_s("%d %d", &a, &b);
	double r = a / b;
	printf("%f\n", r);
	for (int i = 0; i < 10; i++) {
		printf("%f\n", r);
		r += (a % b) / 10 ^ i;
	}
	printf("%f\n", r);
}