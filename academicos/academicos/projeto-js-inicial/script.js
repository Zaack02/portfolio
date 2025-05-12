// projeto-js-inicial
// Autor: Isac Braga Lima
// Script com suporte a saudação em português e inglês

/**
 * Retorna uma saudação personalizada em português ou inglês.
 * @param {string} nome - Nome da pessoa.
 * @param {string} idioma - 'pt' para português, 'en' para inglês.
 */
function saudacao(nome, idioma = "pt") {
  if (idioma === "pt") {
    return `Olá, ${nome}! Seja bem-vindo ao meu repositório de portfólio.`;
  } else if (idioma === "en") {
    return `Hello, ${nome}! Welcome to my portfolio repository.`;
  } else {
    return `Idioma não suportado.`;
  }
}

// Testes
console.log(saudacao("Visitante", "pt"));
console.log(saudacao("Visitor", "en"));
console.log(saudacao("Usuário", "es")); // idioma não suportado
