import { greet } from '../index';

describe('Greet', () => {
	it('should return "Hello, Bob." when Bob is entered', () => {
		expect(greet('Bob')).toBe('Hello, Bob.');
	});

	it('should return "Hello, my friend." when null is entered', () => {
		expect(greet(null)).toBe('Hello, my friend.');
	});

	it('should return "HELLO JERRY!" if name is all uppercase', () => {
		expect(greet('JERRY')).toBe('HELLO JERRY!');
	});

	it('should return "Hello, Jill and Jane" if there is an array of 2 names', () => {
		expect(greet(['Jill', 'Jane'])).toBe('Hello, Jill and Jane.');
	});

	it('should return "Hello, Amy, Brian, and Charlotte" if there is an array of 3 names', () => {
		expect(greet(['Amy', 'Brian', 'Charlotte'], true)).toBe(
			'Hello, Amy, Brian, and Charlotte.'
		);
	});

	it('should return "Hello, Amy and Charlotte.AND HELLO BRIAN!" if Brian is uppercase', () => {
		expect(greet(['Amy', 'BRIAN', 'Charlotte'])).toBe(
			'Hello, Amy and Charlotte. AND HELLO BRIAN!'
		);
	});

	it('should return separate even if entered in same entry in array', () => {
		expect(greet(['Bob', 'Charlie, Dianne'], true)).toBe(
			'Hello, Bob, Charlie, and Dianne.'
		);
	});

	it('should return "Hello, Bob and Charlie, Dianne."', () => {
		// prettier-ignore
		expect(greet(["Bob", "\"Charlie, Dianne\""], false, true)).toBe(
			'Hello, Bob and Charlie, Dianne.'
		);
	});

	//TODO: define names in an array at start of tests. Loop over each name and test each condition separately.
});
