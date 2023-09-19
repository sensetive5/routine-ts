import { Maybe } from "../../types";

export class TreeNode<T> {
    id?: string;
    name?: string;
    data: T;
    children?: TreeNode<T>[];
    constructor({ data, children, id, name }:{ data: T, children?: TreeNode<T>[], id?: string, name?: string }) {
        this.data = data;
        this.children = children;
        this.name = name;
        this.id = id;
    }

}


export class BinaryTreeNode<T> {
    id?: string;
    name?: string;
    data: T;
    left: Maybe<BinaryTreeNode<T>>
    right: Maybe<BinaryTreeNode<T>>
    constructor({ left, right, id, name, data }:{ id?: string, name?: string, data: T, left?: BinaryTreeNode<T>,
        right?: Maybe<BinaryTreeNode<T>>,  }) {
        this.data = data;
        this.left = left;
        this.right = right;
        this.name = name;
        this.id = id;
    }
}

export class Tree<T> {
    id?: string;
    name?: string;
    root: TreeNode<T> | BinaryTreeNode<T>;
    constructor ({id, name, root }:{ root: TreeNode<T>, id?: string, name?: string }) {
        this.id = id;
        this.name = name;
        this.root = root;
    }
}