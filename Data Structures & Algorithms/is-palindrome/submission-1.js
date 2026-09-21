class Solution {

    isPalindrome(s) {
        const cleanS = s.replace(/[^a-zA-Z0-9]/g, ""); 
        let cleanSLowerCase = cleanS.toLowerCase()
        let left = 0;
        let right = cleanSLowerCase.length - 1
        
        while (left < right){
            if(cleanSLowerCase[left] != cleanSLowerCase[right]){
                return false
            }
            left += 1
            right -= 1

        }
        return true
    }
}
