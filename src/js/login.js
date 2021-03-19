function validar()
		{
			var usuario = document.getElementById("usuario").value;
			var passw = document.getElementById("pass").value;	

			if(usuario ==="admin" && passw === "1234")
			{
				window.location="../form/alta_red.html";
			}
			else
			{
				alert("Verifique sus credenciales");
			}
		}

function logout()
		{
			
				window.location="../form/login.html";
			
		}