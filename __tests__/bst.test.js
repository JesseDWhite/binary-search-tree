import BST from './../src/js/bst.js';
import BSTNode from './../src/js/bst-node.js';

describe('binarySeachTree', () => {
  const pbst = new BST();

  beforeEach(() => {
    pbst.insert(new BSTNode(4));
    pbst.insert(new BSTNode(2));
    pbst.insert(new BSTNode(6));
    pbst.insert(new BSTNode(1));
    pbst.insert(new BSTNode(3));
    pbst.insert(new BSTNode(5));
    pbst.insert(new BSTNode(7));
  });

  test('should initialize a binary search tree with a root of null', () => {
    let bst = new BST();
    expect(bst.root).toEqual(null);
  });

  test('it should create a new root node', () => {
    let bst = new BST();
    let node = new BSTNode(36);
    bst.insert(node);
    expect(bst.root).toEqual(node);
  });

  test('should add a child node to the right of the root node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let newNode = new BSTNode(22);
    bst.insert(newNode);
    expect(rootNode.left.data).toEqual(22);
  });
  test('it should add a child node to the right of the root node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let newNode = new BSTNode(48);
    bst.insert(newNode);
    expect(rootNode.right.data).toEqual(48);
  });
  test('it should add a child to the left of a child node', () => {
    let bst = new BST();
    let rootNode = new BST(36);
    bst.insert(rootNode);
    let node2 = new BSTNode(22);
    bst.insert(node2);
    let node3 = new BSTNode(11);
    bst.insert(node3);
    expect(rootNode.left.left.data).toEqual(11);
  });
  test('it should add a child to the right of a child node', () => {
    let bst = new BST();
    let rootNode = new BSTNode(36);
    bst.insert(rootNode);
    let node2 = new BSTNode(48);
    bst.insert(node2);
    let node3 = new BSTNode(73);
    bst.insert(node3);
    expect(rootNode.right.right.data).toEqual(73);
  });
  test('it should return true if the root node is equal to 4', () => {
    expect(pbst.search(4)).toEqual(true);
  });
  test('it should return false if the root node is not equal to 31', () => {
    expect(pbst.search(31)).toEqual(false);
  });
  test('it should return true if the first child node on the left is equal to 2', () => {
    expect(pbst.search(2)).toEqual(true);
  });
  test('it should return if the value 0 is not in the tree', () => {
    expect(pbst.checkForValue(0)).toEqual(false);
  });
  test('it should return true if the tree includes 7', () => {
    expect(pbst.search(7)).toEqual(true);
  });
  test('it should return true if the tree includes 5', () => {
    expect(pbst.search(5)).toEqual(true);
  });
});