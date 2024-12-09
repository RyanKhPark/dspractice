// Array Chunks

const givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkSize = 3;

function chunkArray(array , chuncksize){
 let chuncked = [];
 let idx = 0;
 
 while (idx < givenArray.length){
	chuncked.push(givenArray.splice(idx, idx+chuncksize))
 }
 console.log(chuncked)
 return chuncked
}

chunkArray(givenArray, chunkSize)

// Two Sums

function twoSums(nums, target) {
    if(nums.length < 1) {
        return;
    }
    const hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        hash[target - nums[i]] = i;
        
        
        if (typeof hash[nums[i]] === "number" ) {
            console.log([hash[nums[i]], i]);
            return [hash[nums[i]], i];
        }
    }
    return [];
}

