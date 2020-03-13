const alunosTurmaA = [
	{
		nome: 'Ingrid',
		nota: 7.0
	},

	{
		nome: 'Rita',
		nota: 5.0
	},

	{
		nome: 'Kelvin',
		nota: 1.0
	}
]

const alunosTurmaB = [

	{
		nome: 'Raquel',
		nota: 8.0
	},

	{
		nome: 'Felício',
		nota: 10.0
	},

	{
		nome: 'John',
		nota: 5.5
	}
]

function calcMedia(alunos){

	let soma = 0
	for(let i = 0; i < alunos.length; i++)
	{
		soma = soma + alunos[i].nota
	} 

	const media = soma / alunos.length
	return media
}



const media1 = calcMedia(alunosTurmaA)
const media2 = calcMedia(alunosTurmaB)

function enviarMensagem(media,turma){
	if(media>5){
		console.log(`A média da turma ${turma} foi de ${media}. Parabéns.`)
	}

	else
	{
		console.log(`A média da turma ${turma} foi de ${media}`)
	}
}


enviarMensagem(media1, 'A')
enviarMensagem(media2, 'B')

