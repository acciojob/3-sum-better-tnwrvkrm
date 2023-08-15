function threeSum(arr, target) {
// write your code here
	//sort the array in acending order
	arr.sort((a,b) => a - b);
	let closestSum = Infinity;

	for(let i = 0; i < arr.length-2; i++)
		{
			let left = i+1;
			let right = arr.length - 1;
			while(left < right)
				{
					const sum = arr[i] + arr[left] + arr[right];
					//check if the current sume is ccloser to the target
					if(Math.abs(sum - target) < Math.abs(closestSum - target))
					{
						closestSum = sum;
					}
					//move pointers based on the comparison with the traget
					if(sum < target){
						left++;
					}else if(sum > target){
						right--;
					}else{
						return sum;
					}
				}
		}
	return closestSum;
	
  
}

module.exports = threeSum;