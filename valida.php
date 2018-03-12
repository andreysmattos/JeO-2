<?php
require_once "Client.php";



$c = new Cadastro;

//Optei por não usar o metodo construtor, acho que assim o código fica mais legível.
//Os dados estão sendo sanitizados dentro da classe, é só deletar a chamada da função caso queira
$c->setNome(filter_input(INPUT_POST, 'nome'))
->setEmail(filter_input(INPUT_POST, 'email'))
->setTelefone(filter_input(INPUT_POST, 'telefone'))
->setCelular(filter_input(INPUT_POST, 'celular'))
->setWpp(filter_input(INPUT_POST, 'contatoWpp'))
->setEstado(filter_input(INPUT_POST, 'estado'))
->setCidade(filter_input(INPUT_POST, 'cidade'))
->setMensagem(filter_input(INPUT_POST, 'mensagem'));



if($c->validaDados()){
	echo json_encode(['status'=>true]);
}