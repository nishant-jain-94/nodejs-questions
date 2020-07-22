const depthOfTree = (root) => {
    if (root == null) {
        return 0;
    } else {
        const leftDepthOfTree = depthOfTree(root.left);
        const rightDepthOfTree = depthOfTree(root.right);

        if (rightDepthOfTree > leftDepthOfTree)
            return rightDepthOfTree + 1;
        else 
            return leftDepthOfTree + 1;
    }
};

module.exports = depthOfTree;