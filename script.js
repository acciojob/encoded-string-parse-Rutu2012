function parseCode(encoded) {
    // Split the string by one or more zeros using regex
    const parts = encoded.split(/0+/);

    return {
        firstName: parts[0],
        lastName: parts[1],
        id: parts[2]
    };
}

// Example usage:
console.log(parseCode("John000Doe000123")); 
// Output: { firstName: 'John', lastName: 'Doe', id: '123' }

console.log(parseCode("Alice000Smith000987")); 
// Output: { firstName: 'Alice', lastName: 'Smith', id: '987' }