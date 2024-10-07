import customStringify from './index.js'
let json1 = await import('./test.json', { assert: { type: 'json' } });
let json2 = await import('./test2.json', { assert: { type: 'json' } });

console.log("JSON.stringify() Output")
console.log(JSON.stringify(json1,null,2))
console.log(`customStringify() Output`)
console.log(customStringify(json1))

console.log("JSON.stringify() Output")
console.log(JSON.stringify(json2,null,2))
console.log(`customStringify() Output`)
console.log(customStringify(json2))
