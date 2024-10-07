const compactStringify = function (obj, indent = 2, currentIndent = 0) {
	const baseString = JSON.stringify(obj)

	// Base case: Small object
	if (baseString.length < 100) return baseString

	// Array handling
	if (Array.isArray(obj)) {
		const allObjectsHaveSameStructure = obj.every((el) => {
			return typeof el === 'object' && JSON.stringify(el).length < 200 && el !== null
		})

		if (allObjectsHaveSameStructure && allElementsHaveSameKeys(obj)) {
			// We can vertically align the attributes!
			const attributeLengths = new Map()
			const keys = Object.keys(obj[0])
			for (const key of keys) {
				const lengths = obj.map((el) => JSON.stringify(el[key]).length)
				attributeLengths.set(key, Math.max(...lengths))
			}
			const alignedOutput = obj.map((el) => {
				return `{${keys
					.map((key) => {
						const value = JSON.stringify(el[key])
						return ` "${key}": ${value.padEnd(attributeLengths.get(key))}`
					})
					.join(',')}}`
			})
			return `[\n${alignedOutput.map((str) => ' '.repeat(currentIndent + indent) + str).join(',\n')}\n${' '.repeat(currentIndent)}]`
		} else {
			// We can't align the attributes, so just stringify each element
			const elements = obj.map((el) => {
				const elStr = compactStringify(el, indent, currentIndent + indent)
				return `\n${' '.repeat(currentIndent + indent)}${elStr}`
			})
			return `[\n${elements.join(',')}\n${' '.repeat(currentIndent)}]`
		}
	}

	// Object handling
	if (typeof obj === 'object' && obj !== null) {
		const entries = Object.entries(obj)
		const properties = entries.map(([key, value]) => {
			const valueStr = compactStringify(value, indent, currentIndent + indent)
			return `\n${' '.repeat(currentIndent + indent)}"${key}": ${valueStr}`
		})
		return `{${properties.join(',')}\n${' '.repeat(currentIndent)}}`
	}

	// Other types (e.g., strings, numbers, booleans)
	return baseString
}

function allElementsHaveSameKeys(arr) {
  if (!arr || !arr.length) return true
  const referenceKeys = Object.keys(arr[0])
  for (let i = 1; i < arr.length; i++) {
    const currentKeys = Object.keys(arr[i])
    if (currentKeys.length !== referenceKeys.length || !currentKeys.every(key => referenceKeys.includes(key))) {
      return false;
    }
  }
  return true;
}

export default compactStringify
