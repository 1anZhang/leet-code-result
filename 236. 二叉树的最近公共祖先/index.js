/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 这道题呢，还是通过后序遍历，判断左右子树是否有了p和q。
 * 或者当前节点为p，左右子树中含有q，当前节点为q，左右子树中含有p。
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans;

    const dfs = (root, p, q) => {
      if (root === null) return false;
      const lson = dfs(root.left, p, q);
      const rson = dfs(root.right, p, q);
      if(
        (lson && rson) ||
        ((root.val === p.val || root.val === q.val) && (lson || rson))
      ) {
        ans = root;
      }
      return lson || rson || root.val === p.val || root.val === q.val;
    }
    dfs(root, p, q);
    return ans;
};