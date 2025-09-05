import validator from 'validator'

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }
    init() {
        this.events();
    }
    events() {
        if (!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validate(e);
        });
    }
    validate(e) {
        const el = e.target;

        this.clearErros();

        const emailInput = el.querySelector('input[name="email"]');
        const passwordInput = el.querySelector('input[name="password"]');
        let error = false;



        if (!validator.isEmail(emailInput.value)) {
            this.criaErro(emailInput, 'Email inválido');
            error = true;
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            this.criaErro(passwordInput, 'Senha precisa ter entre 3 e 50 caracteres');
            error = true;
        }

        if (!error) el.submit();

    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text', 'text-danger');
        campo.insertAdjacentElement('afterend', div);
    }

    clearErros() {
        const errors = this.form.querySelectorAll('.error-text')
        errors.forEach(error => error.remove());

    }
}


const cadastroBox = document.getElementById("cadastro-box");
const loginBox = document.getElementById("login-box");

document.getElementById("show-login").addEventListener("click", (e) => {
    e.preventDefault();
    cadastroBox.classList.add("d-none");
    loginBox.classList.remove("d-none");
});

document.getElementById("show-cadastro").addEventListener("click", (e) => {
    e.preventDefault();
    loginBox.classList.add("d-none");
    cadastroBox.classList.remove("d-none");
});


