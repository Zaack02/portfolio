// project-js-initial
// Author: Isac Braga Lima

// This script prints a customized greeting to the console
// Supports greetings in English and Portuguese

/**
 * Returns a customized greeting in English or Portuguese.
 * @param {string} name - Person's name.
 * @param {string} language - 'pt' for Portuguese, 'en' for English.
 * @returns {string} Greeting message.
 */
function greet(name, language = "en") {
  if (language === "pt") {
    return `Olá, ${name}! Seja bem-vindo ao meu repositório de portfólio.`;
  } else if (language === "en") {
    return `Hello, ${name}! Welcome to my portfolio repository.`;
  } else {
    return `Unsupported language.`;
  }
}

// Test examples
console.log(greet("Visitor", "en"));     // English
console.log(greet("Visitante", "pt"));   // Portuguese
console.log(greet("Usuário", "es"));     // Unsupported language

