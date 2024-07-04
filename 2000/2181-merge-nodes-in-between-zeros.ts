// First solution, solved 2024-07-03 in 10:52
// Time: O(n), space: O(1)

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeNodes(head: ListNode | null): ListNode | null {
	if (head === null) return null;

	let savedHead = head;
	let current = head;

	while (current.next !== null) {
		if (current.next.val !== 0) {
			current.val += current.next.val;
			current.next = current.next.next;
		} else {
            if (current.next.next === null) {
                current.next = null;
            } else {
			    current = current.next;
            }
		}
	}

	return savedHead;
}
