let greeting = 'Hello';
let uppercaseNamesList = [];
let cleanNamesList = [];

function isUppercase(names) {
	return names === names.toUpperCase();
}

function handleUppercaseNames(names) {
	if (Array.isArray(names)) {
		uppercaseNamesList = names.filter(function(name) {
			return isUppercase(name);
		});
	}
}

function removeUpperCaseNames(names) {
	names.map(function(name, index) {
		if (isUppercase(name)) {
			names.splice(index, 1);
		}

		return names;
	});
}

function handleUppercaseGreeting(uppercaseNames) {
	if (uppercaseNames.length > 0) {
		return ` AND ${greeting.toUpperCase()} ${uppercaseNames}!`;
	}

	return '';
}

function handleEscapedCharacters(names) {
	return names.reduce((acc, name) => {
		const cleanNames = name.includes('"')
			? [name.replace(/\"/g, '')]
			: name.split(',');
		return [...acc, ...cleanNames];
	}, []);
}

function handleExtraNames(names) {
	names.filter(function(name, index) {
		if (name.includes(',')) {
			const extraNames = name.split(', ');
			names.splice(index, 1);
			names.push(...extraNames);
		}

		return names;
	});
}

function handleMultipleNames(names, oxfordComma, andBeforeComma) {
	handleExtraNames(names);
	removeUpperCaseNames(names);
	cleanNamesList = handleEscapedCharacters(names);

	const numberOfNames = cleanNamesList.length;

	let separater = ', ';
	let finalSeparator = ' and ';

	if (oxfordComma) {
		finalSeparator = ', and ';
	}

	if (andBeforeComma) {
		separater = ' and ';
		finalSeparator = ', ';
	}

	return (
		cleanNamesList.reduce(function(acc, name, index) {
			return (
				acc + (index + 1 !== numberOfNames ? separater : finalSeparator) + name
			);
		}) + '.'
	);
}

export function greet(inputNames, oxfordComma, andBeforeComma) {
	handleUppercaseNames(inputNames);

	if (!inputNames) {
		return `${greeting}, my friend.`;
	}

	if (!Array.isArray(inputNames) && isUppercase(inputNames)) {
		return `${greeting.toUpperCase()} ${inputNames}!`;
	}

	if (Array.isArray(inputNames)) {
		return `${greeting}, ${handleMultipleNames(
			inputNames,
			oxfordComma,
			andBeforeComma
		)}${handleUppercaseGreeting(uppercaseNamesList)}`;
	}

	return `${greeting}, ${inputNames}.`;
}
