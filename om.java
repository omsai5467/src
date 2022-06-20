
// thanks to giving second oppertunity
// i have learned the algoritham
// giving correct output
// input:234
// ouput:243
// thanks ..
public class om {
	public static void main(String [] args){
		int [] nums = new int[]{1,1,1};
        int k = 2;
        int start =0;
        int end = 0;
        int count = 0;
        int sum = 0;
        while(start <nums.length && end < nums.length){
            sum = sum + nums[end];
            if(sum == k){
                count++;
                end++;
                
            }
            if(sum > k){
                sum = sum - nums[start];
                start++;
            if(sum == k){
                count++;
                end++;
            }
        }
            if(sum < k){
                end++;
            }
            
        }
        System.out.println(count);
	}
}

