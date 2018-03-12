$(function(){


	$('#valida').submit(function(){
		//serialize pega todo conteúdo do formulario e salva na variavel
		var form = $(this).serialize();

		
		var valida = $.ajax({
			url: 'valida.php',
			method: 'post',
			data: form,
			dataType: 'json'
		})


		valida.done(function(e){
			//console.log(e);
			if(e.status){
				//alert('entro')
				$('#msg').html('<div class="alert alert-success"> Cadastrado com sucesso.</div>.');
				$('#valida').each(function(){
					this.reset();
				});
			} else {
				
				$('#msg').html('<div class="alert alert-danger"> <strong>Atenção!</strong> '+e.msg+'</div>')
			}
			
		})


		//retorna falso para que a página não seja atualizada ao dar submit no formulario
		return false;
	});


	$('#telefone').mask('(000) 0000-0000');
	$('#celular').mask('(000) 0000-00000');


	$("#valida").validate({
		rules : {
			nome:{
				required:true,
				minlength:3
			},
			email:{
				required:true,
				minlength:6
			},
			mensagem:{
				required:true,
				minlength:10
			}, 
			celular:{
				required:true,
				minlength:14
			},  
			telefone:{
				minlength:14
			}, 
			estado:{
				required:true
			}, 
			cidade:{
				required:true,
				minlength:3
			},                             
		},
		messages:{
			nome:{
				required:"Por favor, informe seu nome.",
				minlength:"O Nome deve ter pelo menos 3 caracteres."
			},
			email:{
				required:"É necessário informar um email. ",
				minlength:"O Email deve ter pelo menos 6 caracteres."
			},
			mensagem:{
				required:"A mensagem não pode ficar em branco.",
				minlength:"A mensagem deve ter pelo menos 10 caracteres."
			},
			celular:{
				required:"O Celular não pode ficar em branco.",
				minlength:"O Celular deve ter pelo menos DDD 3 + 9 números."
			},
			telefone:{
				minlength:"O Telefone deve ter pelo menos DDD 3 + 9 números."
			},
			estado:{
				required:"É necessário informar um estado. ",
			},
			cidade:{
				required:"É necessário informar uma cidade. ",
				minlength:"O Nome deve ter pelo menos 3 caracteres."
			}      
		}
	});


})