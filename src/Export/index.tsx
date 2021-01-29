      export interface PerfilT{
          resposta:Perfil
      }
      
      
      export interface Perfil 
    {
      nome: string,
      ocupacao: string,
      resumo:  string,
    }
   

    export interface fakeContatos
    {
        id:number,
        tipo: string,
        contato:number,
        curso:string,
    }
    export interface Contato 
        {
           contatos: fakeContatos[],

        }
    
  
     export interface Educacao
        {
          id: number,
          instituicao: string,
          curso: string,
          email:string,
        }
  
      
  
     export interface  experiencia 
        {
          id: number,
          cargo: string,
          periodo:  string,
          empresa: string,
          local: string,
          conteudo: string,
        }
  
      