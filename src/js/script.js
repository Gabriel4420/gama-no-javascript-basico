console.log('JS Carregado')


function validate_cpf(cpf) {
    if (cpf.length !== 11)
        return false
    else {
        var nums = cpf.substring(0, 9)

        var chars = cpf.substring(9)

        /* console.log("numeros do cpf : " + nums)
        console.log('Digito do cpf : '+ chars) */
        var sum = 0;
        for (let i = 10; i > 1; i--) {
            sum += nums.charAt(10 - i) * i
        }


        var res = (sum % 11) < 2 ? 0 : 11 - (sum % 11);

        //validação do 1° digito


        if (res != chars.charAt(0)) {
            return false;
        }

        sum = 0;
        nums = cpf.substring(0, 10);

        for (let k = 11; k > 1; k--) {
            sum += nums.charAt(11 - k) * k
        }

        res = sum % 11 < 2 ? 0 : 11 - (sum % 11)
        // validação do 2° digito
        if (res != chars.charAt(1)) {
            return false;
        }

        return true
    }


}

function validate() {
    console.log('iniciando validação CPF')
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'none';


    var cpf = document.querySelector('input#cpf-digitado').value



    var r_validate = validate_cpf(cpf);



    if (r_validate) {
        document.querySelector('div#success').style.display = 'block';
        document.querySelector('button').className = "btn btn-success"
        document.querySelector('button').textContent = "Validado :)"
        setTimeout(()=>{
            window.location.reload(1)
        }, 1200)
      
    } else {
        document.querySelector('div#error').style.display = 'block';
        document.querySelector('button').className = "btn btn-danger"
        document.querySelector('button').textContent = "cpf inválido :("
        setTimeout(()=>{
            window.location.reload(1)
        }, 1200)
    }
}