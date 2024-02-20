import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent {

  form: FormGroup | any;
  msgErro: string | undefined;


  onImageSelected(imageUrl: string): void {
    // Faça algo com a URL da imagem, como enviar para um servidor, armazenar no estado, etc.
    console.log('Imagem selecionada:', imageUrl);
  }



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeCompleto: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      seo: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      rg: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      telefone1: ['', Validators.required],
      telefone2: [''],
      profissao: ['', Validators.required],
      empresa: ['', Validators.required],
      genero: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {

    }else{
      this.msgErro = 'Por favor, preencha todos os campos obrigatórios.';
    }
  }






}
