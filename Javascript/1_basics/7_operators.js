/**
 *Operators
 * 
 * ������
 */

/**
 *���������
 *
 * 1)����
 * 2)����
 * 3)����
 * 4)������
 * 5)������
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3); //��������

console.log(----------);

console.log(10 * 10(10 + 10));

/**
 *
 * ������ ����
 */

let number = 1;

number++; //1������
console.log(number);
number--; //1������
console.log(number);


/**
 *
 * �������� ��ġ
 */

let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

result = --number;
console.log(result, number);

/**
 * ���� Ÿ���� �ƴ� Ÿ�Կ� +,- ����ϸ� ��� �ɱ�?
 * **/

let sample = "99";

console.log(+sample);
console.log(typeof + sample);  //number

console.log(sample);
console.log(typeof sample);  //string

sample = true;
console.log(+sample);  //1
console.log(typeof +sample);

sample = false;  
console.log(+sample);  //0
console.log(typeof +sample);

sample = "������"
//nan -> not a number
console.log(+sample);

let sample = "99";

console.log(-sample);
console.log(typeof - sample);

/**
 * �Ҵ� ������
 * **/

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * �� ������
 * 
 * 1) ���� ��
 * 2) ���� Ÿ���� ��
 * **/

console.log(5 == 5);
console.log('5' == 5);
console.log('' == 0); //true
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5);
console.log('5' === 5); //false
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log(5 != 5);
console.log('5' != 5);
console.log('' != 0); //true
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');

console.log(5 !== 5);
console.log('5' !== 5);
console.log('' !== 0); //true
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');


console.log( '--------------');
/**
 * ��� ���� �� ������
 *
 * 1) ���� ��
 * 2) ���� Ÿ���� ��
 * **/
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * ���� ���� ������
 *
 * 
 * **/

console.log(10 > 0 ? '10�� 0���� ũ��' : '10�� 0���� �۴�');  //true�Ͻ� ���ʰ� ��ȭ


/**
 * �� ����
 * 
 * 1) && and
 * 2)||  or
 *
 * **/

//&& ������ ��� true���� true�� ��ȯ�Ѵ�.
console.log(true && true);
console.log(true && false);
console.log(true && false);
console.log(false && false);

// || �� �ϳ��� true���� true�� ��ȯ�Ѵ�.
console.log(true || true);
console.log(true || false);
console.log(true || false);
console.log(false || false);
console.log('-------------');
console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);

/**
 * ������
 * 
 * &&�� ��������� ������ true�̸� ���� �� ��ȯ
 * &&�� ��������� ������ false ���� �� ��ȭ
 * ||�� ��������� ������ true�̸� ���� �� ��ȯ
 * ||�� ��������� ������ false ���� �� ��ȭ
 */

 console.log('-------------');
console.log(true || '���̺�');
console.log(false || '���̺�');
console.log(false && '���̺�');
console.log(true && '���̺�');

console.log(true && true && '���̺�');
console.log(true && false && '���̺�');

/**
 * ���� ������
 */

console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null ������
 */

let name;
console.log(name);

name = name ?? : '�ڵ�'; //nan�̰ų� undefined�� ��� �����ʰ� ��ȯ
console.log(name);

name = name ?? : '���̺�'; //nan�̰ų� undefined���� �ʾƼ� �����ʰ� ��ȯ����
console.log(name);