const { expect, assert } = require('chai');
const Node = require('./node');
const depthOfTree = require('./binary-tree-height');


describe('Height Of Binary Tree', () => {
    before(() => {
        aNode = new Node('a');
        bNode = new Node('b');
        const cNode = new Node('c');
        const dNode = new Node('d');
        const eNode = new Node('e');
        aNode.left = bNode;
        aNode.right = cNode;
        bNode.left = dNode;
        bNode.right = eNode;
    });

    it('Should return the height of the tree as 3 given its root element', () => {
        const expectedDepth = 3;
        const actualDepth = depthOfTree(aNode);
        expect(expectedDepth).to.equals(actualDepth);
    });

    it('Should return the height of the tree as 0 when the root element is null', () => {
        const actualDepth = depthOfTree(null);
        const expectedDepth = 0;
        expect(expectedDepth).to.equals(actualDepth);
    });

    it('Should return the height of the tree as 2 when bNode is passed as the root of the tree', () => {
        const actualDepth = depthOfTree(bNode);
        const expectedDepth = 2;
        expect(expectedDepth).to.equals(actualDepth);
    });
});