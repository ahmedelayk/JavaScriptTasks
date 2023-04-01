// 217. Contains Duplicate

var containsDuplicate = function(nums) {
  for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
      if(nums[i] == nums[j])return true;
    }
  }
  return false;
};

var nums = [1,2,3,4,1]
var nums2 = [1,2,3,4,5]

console.log(containsDuplicate(nums))
console.log(containsDuplicate(nums2))