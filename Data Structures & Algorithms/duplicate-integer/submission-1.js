class Solution {
   
    hasDuplicate(nums) {

        let seen = new Set()

        for (const item of nums){
            if(seen.has(item)){
                return true
            }
            seen.add(item);
        }
        return false
    }
}
