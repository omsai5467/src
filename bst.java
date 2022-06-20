import java.util.*;
import java.lang.*;
import java.io.*;
public class  bst {
    public static void main(String [] args){
        
        tree Tree = new tree();
        
        int [] n = new int[]{2,4,1,3,0,7};
        for (int  i= 0;i<n.length;i++){
        //   int val = scanner.nextInt();
            Tree.insert(n[i]);
        }
        Tree.cc( );
       
        

    }
}

// node 
class Node{
    int val;
    Node left;
    Node right;
    public Node(int val){
        this.val= val;
        this.right = null;
        this.left = null;
    }
}

//treee

class tree{
    public int c = 0;
    Node head;
    public tree(){
        this.head = null;
    }
    public void insert(int val){
        Node t = this.head;  
        if(t == null){
            this.head = new Node(val);
        }
        else{
            placefinder(val,t);
        }
    }
    private void placefinder(int val,Node node){
        if(val > node.val){
            if(node.right != null){
                 placefinder(val,node.right);
            }
            else{
                node.right = new Node(val);
                return;
            }
        }
            if(val < node.val){
                if(node.left != null){
                     placefinder(val,node.left);
                }
                else{
                    node.left = new Node(val);
                    return;
                }
            }
        
    }   //end of placefinder
    public void path(int pathvalue){
        List<Integer> l = new ArrayList<Integer>();
        Node root = this.head;
        pathfinder(root,pathvalue,l);
        for(int i = 0;i<l.size();i++){
            System.out.print(l.get(i) +" ");
        }
    }
    private boolean pathfinder(Node root,int val,List<Integer> l){
        if(root == null){
            return false;
        }
        l.add(root.val);
        if(root.val == val){
            return true;
        }
        if(pathfinder(root.left,val,l) || pathfinder(root.right,val,l)){
            return true;
        }
        l.remove(l.size()-1);
        return false;
       

    }
    public void cc(){
        Node root = this.head;
        // int c = 0;
        count(root);
        System.out.println(c);
    }
    public void count(Node root){
        if(root == null){
            return;
        }
        if(root.left == null && root.right == null){
            c =c+1;
            System.out.println(c);
        }
        count(root.left);
        count(root.right);
        
    }
     
}


// traversal technique
//dfs techniue
// inorder travers rule = deep go to the left after print left root right
