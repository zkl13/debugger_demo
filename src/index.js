const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const _generate = (data, index) => {
	if (!data[index]) return null;
	const root = { value: data[index], left: null, right: null };
	root.left = _generate(data, index * 2);
	root.right = _generate(data, index * 2 + 1);
	return root;
};

// 构建二叉树
const generate = (data) => {
	return _generate(data, 1);
};

const tree = generate(data);

// 二叉树前序遍历，非递归
const printInOrder = (tree) => {
	const stack = [];
	let node = tree;
	
	while (node || stack.length !== 0) {
		while (node) {
			stack.push(node);
			node = node.left;
		}
		const popNode = stack.pop();
		console.log(popNode.value);
		node = popNode.right;
		
	}
	throw ''
};

printInOrder(tree);