function CardUsuario(dadosUsuario) { //recebe o nosso dado, que é do tipo Usuario, que vem da model
	//innerHTML -> Pega a string e transforma em html
	const view = `
 <div>
  <h3>${dadosUsuario.nome}</h3>
  <p>${dadosUsuario.raca}</p>
  <p>${dadosUsuario.especie}</p>
  <p>${dadosUsuario.idade}</p>
  <p>${dadosUsuario.peso}</p>
  <p>${dadosUsuario.cor}</p>
  <p>${dadosUsuario.dono}</p>
  <p>${dadosUsuario.dataDeCriacao}</p>
  <p>Data de criação: ${dadosUsuario.dataDeCriacao}</p>
 </div>
 `;

 return view
}