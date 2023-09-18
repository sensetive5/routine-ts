import {v4 as uuidv4} from 'uuid';
import { Tree, TreeNode } from "./Tree";

describe('Tree', () => {
    test('Simple test', () => {
        const treeNodeArgs = { data: 'testTreeNodeData', id: uuidv4(), name: 'testNode' }
        const minimalTreeNode = new TreeNode(treeNodeArgs)
        const treeArgs = { data: 'testTreeNodeData', id: uuidv4(), name: 'testNode', root: minimalTreeNode }
        const minimalTree = new Tree(treeArgs)
        expect(minimalTreeNode).toBeInstanceOf(TreeNode)
        expect(minimalTree).toBeInstanceOf(Tree)
        expect(minimalTree.root).toBeInstanceOf(TreeNode)
        expect(minimalTree.root.data).toEqual(treeNodeArgs.data)
    })
})
