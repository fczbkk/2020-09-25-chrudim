/**
 * Converts first letter to capital letter. This is added later.
 * @param {string} content
 * @returns {string}
 */
function capitalize (content) {
  const letters = content.split('')
  letters[0] = letters[0].toUpperCase()
  return letters.join('')
}

function doSomething () {
  console.log('do something')
  // unbreak stuff
}

/**
 * Creates greeting for a person.
 * @param {string} name
 * @param {string} greeting
 * @returns {string}
 */
function getPersonGreeting (name, greeting) {
  return `${capitalize(greeting)} ${name}!`
}
