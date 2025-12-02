class Solution {
    bubbleSort(nums) {
        for (let i=0; i<nums.length-1;i++){
            for (let j=0; j<nums.length-1;j++){
                if (nums[j]>nums[j+1]){
                    [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
                }
            }
        }
        return nums

    }
}
const nums= [7, 4, 1, 5, 3]
console.log(new Solution().bubbleSort(nums))
