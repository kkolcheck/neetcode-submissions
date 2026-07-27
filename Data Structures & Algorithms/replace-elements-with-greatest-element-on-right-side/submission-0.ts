class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const n = arr.length;
        const result = new Array(n);
        let rightMax = -1; // nothing to the right of last element

        for (let i = n-1; i >= 0; i--) {
            result[i] = rightMax; // assign greatest on the right
            rightMax = Math.max(rightMax, arr[i]) // update for next left element
        }

        return result;
    }
}
