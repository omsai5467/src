import java.util.*;
public class binary{
	public static void main(String[] args) {
		Random rand = new Random();
		LinkedList list = new LinkedList();
		for(int  i =0;i<10;i++){
			int val = rand.nextInt(100);
			list.add(val);
		}
		list.printList();
		list.reverse();
		System.out.println();
		list.printList();
	} //main
} //binary class end




class Node{
	public int val;
	public Node next;
	public Node(int val){
		this.val = val;
		this.next = null;
	}
}

class LinkedList{
	public Node head  ;
	public LinkedList(){
		this.head = null;
	}
	public void add(int val){
		Node head = this.head;
		if(head == null){
			this.head = new Node(val);
			return;
		}
		Node tail = new Node(val);
		this.head = tail;
		tail.next = head;
	}
	public void  printList(){
		Node head = this.head;
		while(head!=null){
			System.out.print(head.val+" ");
			head = head.next;
		}
	}
	public void reverse(){
		Node head = this.head;
		Node dummy = null;
		while(head!=null){
			Node next = head.next;
			head.next = dummy;
			dummy= head;
			head = next;
		}
		this.head = dummy;
	}
}
