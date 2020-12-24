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
 * 因为节点不重复，所以我们只需要判断子树中是否有节点等于p或q即可。
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans;

    const dfs = (root, p, q) => {
      // 递归出口
      if (root === null) return false;
      // 得到左子树和右子树是否有目标节点
      const lson = dfs(root.left, p, q);
      const rson = dfs(root.right, p, q);
      // 示例一，如果目标节点分别在左右，或者左节点或右节点
      // 示例二，最近公共祖先节点可以微节点本身
      if(
        (lson && rson) ||
        ((root.val === p.val || root.val === q.val) && (lson || rson))
      ) {
        ans = root;
      }
      // 返回结果
      return lson || rson || root.val === p.val || root.val === q.val;
    }
    dfs(root, p, q);
    return ans;
};