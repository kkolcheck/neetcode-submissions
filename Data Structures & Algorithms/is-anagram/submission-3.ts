class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // option 1 sort strings then compare O(n log n)
        // option 2 throw chars into a map and count # of each character
        // loop through second string and do the same then compare O(n)
        if (s.length !== t.length) return false;

        // Count chars in both strings
        const charCount = {};

        for (let i = 0; i < s.length; i++) {
            charCount[s[i]] = (charCount[s[i]] || 0) + 1;
            charCount[t[i]] = (charCount[t[i]] || 0) - 1;
        }

        return Object.values(charCount).every(count => count === 0);
    }
}
