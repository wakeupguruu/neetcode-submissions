class Solution {
   
    twoSum(nums, target) {
        let sumMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            let ans = target - nums[i];

            if (sumMap.has(ans)) {
                return [sumMap.get(ans), i];
            }
            sumMap.set(nums[i], i);
        }
    }
}
