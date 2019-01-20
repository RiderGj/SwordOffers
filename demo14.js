function ListNode(x){
    this.val = x;
    this.next = null;
}

list = {
	val: 1,
	next: {
		val: 2,
		next: {
			val: 3,
			next:null
		}
	}
};

function FindKthToTail(head, k)
{
    // write code here
    var arr = [];
    while(head != null){
        arr.push(head.val);
        head = head.next;
    }
    console.log(arr);

    return arr[arr.length-k];
}

console.log(FindKthToTail(list, 1));