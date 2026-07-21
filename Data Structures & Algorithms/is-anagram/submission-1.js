class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const map = new Map();

        // count chars to map
        s.split('').forEach(char => {
            map.set(char, (map.get(char) || 0) + 1);
        });

        for(const char of t) {
            // if char is in map, subtract from value
            if (map.has(char)) {
                map.set(char, map.get(char)-1);
            } else {
                return false;
            }
        }

        //if all map char values = 0, return true, otherwise false
        for (const [key, value] of map) {
            if (value !== 0) return false;
        }
        return true;
    }
}
