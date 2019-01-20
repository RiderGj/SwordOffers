/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

var h = {
	val: 1,
	next: {
		val: 3,
		next: {
			val: 5,
			next: {
				val: 7,
				next: null,
			}
		}
	}
}

function printListFromTailToHead(head)
{
    // write code here
    var res = [];
    while (head){
        res.push(head.val);
        head = head.next;
    }
    return res.reverse();
}
console.log(printListFromTailToHead(h));