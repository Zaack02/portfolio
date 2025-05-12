function saudacao(nome, idioma = "pt") {
  if (idioma === "pt") {
    return `Olá, ${nome}! Seja bem-vindo ao meu repositório de portfólio.`;
  } else if (idioma === "en") {
    return `Hello, ${nome}! Welcome to my portfolio repository.`;
  } else {
    return `Idioma não suportado.`;
  }
}

console.log(saudacao("Visitante", "pt"));
console.log(saudacao("Visitor", "en"));
