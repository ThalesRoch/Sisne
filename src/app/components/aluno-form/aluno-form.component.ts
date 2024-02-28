import { AlunoServiceService } from './../../services/aluno-service.service';
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



  constructor(
    private fb: FormBuilder,
    private alunoServiceService: AlunoServiceService
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nomeCompleto: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
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
    //console.log(this.form);
    if (this.form.valid) {
      var retorno =
      this.alunoServiceService.enviarDadosFormulario(this.form.value)
      console.log(retorno)

    }else{}
  }






}
