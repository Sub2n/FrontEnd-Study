#include <stdio.h>
#include <string>
#include <iostream>
using namespace std;

int main() {
	int a, b;
	//scanf_s("%d %d", &a, &b);
	cin >> a >> b;
	string s = "";
	s += to_string(a / b);
	if (a % b != 0) s += ".";
	for (int i = 0; i < 9; i++) {
		s += to_string((a * 10) / b);
	}
	cout << s << endl;
}