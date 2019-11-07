#include <iostream>
#include <set>
using namespace std;

set<string> pitches;

void highPitch(int acc, int n, int stage, string s) {
	if (acc == n) {
		cout << acc << s << "\n";
		pitches.insert(s); return;
	}
	if (acc > n) return;

	else {
		if (stage == 1) {
			highPitch(acc * 3, n, 2, s + "*");
			highPitch(acc * 3, n, 1, s + "*");
		}
		else if (stage == 2) {
			highPitch(acc + 1, n, 3, s + "+");
			highPitch(acc + 1, n, 1, s + "+");
		}
		else if (stage == 3) {
			highPitch(acc + 1, n, 1, s + "+");
		}
	}
}

int solution(int n) {
	highPitch(1, n, 1, "");
	return pitches.size();
}

int main(void) {
	int n;
	// cin >> n;

	cout << solution(2147483647);
}