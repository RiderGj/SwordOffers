// function ListNode(x){
//     this.val = x;
//     this.next = null;
// }
// function Merge(pHead1, pHead2)
// {
//     // write code here
//     var newHead = null;
//     if(pHead1.val <= pHead2.val){
//         newHead = new ListNode(pHead1.val);
//         pHead1 = pHead1.next;
//     }else{
//         newHead = new ListNode(pHead2.val);
//         pHead2 = pHead2.next;
//     }
//     console.log(newHead);
//     var saveNewHead = newHead;
//     while(pHead1 != null || pHead2!=null){
//         var newNode = new ListNode(0);
//         if(pHead1 == null){
//             newNode.val=pHead2.val;
//             pHead2 = pHead2.next;
//         }else if(pHead2 == null){
//             newNode.val=pHead1.val;
//             pHead1 = pHead1.next;
//         }
//         else if(pHead1.val <= pHead2.val){
//             newNode.val=pHead1.val;
//             pHead1 = pHead1.next;
//         }else{
//             newNode.val=pHead2.val;
//             pHead2 = pHead2.next;
//         }
//         newHead.next = newNode;
//         newHead = newNode;
//         // console.log(saveNewHead);
//     }
//     return saveNewHead;
// }

function Merge(pHead1, pHead2)
{
    // write code here
    var newHead = {val: 0, next: null};
    if(pHead1.val <= pHead2.val){
        newHead.val = pHead1.val;
        pHead1 = pHead1.next;
    }else{
        newHead.val = pHead2.val;
        pHead2 = pHead2.next;
    }
    var saveNewHead = newHead;
    while(pHead1 != null || pHead2!=null){
        var newNode = {val: 0, next: null};
        if(pHead1 == null){
            newNode.val=pHead2.val;
            pHead2 = pHead2.next;
        }else if(pHead2 == null){
            newNode.val=pHead1.val;
            pHead1 = pHead1.next;
        }
        else if(pHead1.val <= pHead2.val){
            newNode.val=pHead1.val;
            pHead1 = pHead1.next;
        }else{
            newNode.val=pHead2.val;
            pHead2 = pHead2.next;
        }
        newHead.next = newNode;
        newHead = newNode;
        // console.log(saveNewHead);
    }
    return saveNewHead;
}

pHead1 = {
    val: 1,
    next: {
        val: 3,
        next: {
            val: 5,
            next: null
        }
    }
}

pHead2 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 6,
            next: null
        }
    }
}

console.log(Merge(pHead1, pHead2));