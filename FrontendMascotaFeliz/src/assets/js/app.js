function updateEntity(){
  let id = document.getElementById('hdnId').value;
  doOperation('PUT', id);
}


function doOperation(method, id=''){

    let obj = new Object();
    let componentes = document.getElementsByClassName('formulario');
    for(i = 0; i < componentes.length; i++){
      var id = componentes[i].id;
      var key = id.split("_")[1];
      var value = document.getElementById(id).value;
      obj[key] = value;
    }
    let newJson = JSON.stringify(obj);

    //console.log(newJson);
    let modulo = document.getElementById('hdnModulo').value;
    let url = "http://localhost:3000/"+modulo;

    fetch(url, {
      method: method,
      body: newJson,
      headers:{
        'content-type':'application/json'
      }
    })
    .then(res =>{
      res.json();
      cleanFields();
    })
    .then(mensaje =>{
      alert('¡Operación realizada exitosamente! ');
    })
  }


function cleanFields(){
    componentes = document.getElementsByClassName('formulario');
    for(i = 0; i < componentes.length; i++){
      id = componentes[i].id;
      document.getElementById(id).value = '';
    }
}

