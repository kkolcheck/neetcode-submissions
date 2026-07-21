class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        const a = 'a'.charCodeAt(0);

        for (const str of strs) {
            const count = new Array(26).fill(0);
            for (const char of str) {
                count[char.charCodeAt(0) - a]++;
            }
            const key = count.join(',');
            if (!map.has(key)) map.set(key, []);
            map.get(key).push(str);
        }

        return [...map.values()];
    }

    isAnagram(str1, str2) {
        if (str1.length !== str2.length) return false;

        const count = new Array(26).fill(0);
        const a = 'a'.charCodeAt(0);

        for (let i = 0; i < str1.length; i++) {
            count[str1.charCodeAt(i) - a]++;
            count[str2.charCodeAt(i) - a]--;
        }

        return count.every(v => v === 0);
    }
}
