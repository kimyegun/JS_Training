/**
 * hoisting
 * /
 
 console.log('hello');
  console.log('world');

console.log('name'); //���� undefined ���� �Ҵ����� �ʴ�.
var name = '�ڵ����丮'
console.log('name');

var name;
console.log('name'); //���� �Ҵ�,����  ���� �ʴ�.

/**
*
 * hoisting�� �����ΰ�?
 * 
 * ��� ���� ������ �ڵ��� �ֻ������ �̵��Ǵ� ��ó�� �������� ����
/

console.log('yujin');
//let yujin = '������'; //let,const ȣ�̽��� �߻��Ѵ�.