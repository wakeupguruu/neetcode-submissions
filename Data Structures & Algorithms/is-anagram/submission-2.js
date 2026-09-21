class Solution {
    
    isAnagram(s, t) {

        if (s.length !== t.length) {
            return false;
        }
        
        let freqMap = new Map()

        for(let item of s){
             freqMap.set(item, (freqMap.get(item) || 0) + 1)
        }

        for(let item of t){
            if(freqMap.has(item)){
                freqMap.set( item, (freqMap.get(item) - 1) )
                if(freqMap.get(item) <= 0){
                    freqMap.delete(item)
                }
            }else{
                return false
            }

        }

        return true
    }
}
