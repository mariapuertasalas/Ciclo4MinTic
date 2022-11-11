(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            RegistarUsuario();
            event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function RegistarUsuario(){
    let cedula = document.querySelector("#txtCedula").value;
    let nombres = document.querySelector("#txtNombre").value;
    let apellidos = document.querySelector("#txtApellido").value;
    let correo = document.querySelector("#txtCorreo").value;
    let telefono = document.querySelector("#txtTelefono").value;
    let rol = document.querySelector("#txtRol").value;

    let url = "http://localhost:3000/usuarios";
    let datos = {
        cedula: cedula,
        nombre: nombres,
        apellido: apellidos,
        correo: correo,
        telefono: telefono,
        rol: rol,
    };
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers:{
            'content-type':'application/json'
        }
    }).then(res =>res.json())
    .then(mensaje =>{
       console.log(mensaje) 
    })
  }