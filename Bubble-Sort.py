class Solution:
    def bubbleSort(self, nums):
        for i in range(len(nums)):
            i_did_swap=0
            for j in range(len(nums)-1):
                if nums[j]>nums[j+1]:
                    nums[j],nums[j+1]=nums[j+1],nums[j]
                    i_did_swap=1
            if i_did_swap==0:
                break
        return nums
n=input().strip("[]")
n=list(map(int,n.split(",")))
print(Solution().bubbleSort(n))
