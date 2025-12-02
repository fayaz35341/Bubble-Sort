class Solution {
    bubbleSort(nums) {
        for (let i=0; i<nums.length-1;i++){
            let i_did_swap=0
            for (let j=0; j<nums.length-1;j++){
                if (nums[j]>nums[j+1]){
                    [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
                    i_did_swap=1
                }
            }
            if (i_did_swap === 0){ // with 0(n), without  0(n2)
                break
            }
        }
        return nums
    }
}
const nums= [7, 4, 1, 5, 3]
//const nums=[ 1,3,4,5,7 ]
console.log(new Solution().bubbleSort(nums))
