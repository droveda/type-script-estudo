# Infrestrutura necessaria
1. Visual Studio Code
2. NodeJs instalado
3. Navegador


## Comandos
* acessar pasta raiz do projeto
  * necessário ter o node.js instalado
    * How to install
      * brew update
      * brew install node.
        * test it
          * node -v
          * npm -v
    * How to update
      * brew update
      * brew upgrade node
    * How to uninstall
      * brew uninstall node
  * executar: npm install
  * executar: npm run server

# TypeScript
* Instalacao
  *  npm install typescript@4.2.2 --save-dev
  *  npm install -g typescript --save-dev (ira instalar a versao mais recente do typescript)
* Conceitos
  * pasta "app" contém o código type-script
  * pasta "dist" contém o javascript compilado
  * arquivo: tsconfig.json (configuracao do compilador typescript)
  * para compliar:
    * adiconar no package.json a linha: "compile": "tsc"
    * executar: npm run compile
  * adicionar no package.json: "watch": "tsc - w" (assim fica monitorando os arquivos, assim quando salvar alguma alteracao ira compilar automaticamente)
    * executar: **npm run watch**
* Para rodar o servidor e o watch do compilador executar:
  * **npm start** (vai ser utilizado este até fo final do curso)
    * ("start": "concurrently \"npm run watch\" \"npm run server\"" o que possibilita dois scripts em paralelo - isso está definido no package.json)


# Consideracoes de OO com type script
* atributos comecando com '_' sao privados além de ter o 'private'
  * exemplo: private _valor;
* Adicionar **"noImplicitAny": true** no arquivo **tsconfig.json**
  * isso irá bloquear a utilização de any no typescript ou seja tudo deve ser tipado 
* ReadonlyArray - retorna array nao mutavel 

## Melhorias
* Exemplo de Enum dias-da-semana.ts
* Remoção de comentários do código compilado ("removeComments": true,) file tsconfig.json
* Ativação do strictNullChecks - por padrão ele é false ("strictNullChecks": true) file tsconfig.json
* Como suprimir erros, quando fizer sentido, resultantes do strictNullChecks
* Benefícios do strictNullChecks no controle do fluxo da sua aplicação

## Decorators
* para habilitar adicionar no tsconfig.json **"experimentalDecorators": true**
* exemplo: src/decorators/logar-tempo-de-execucao.js

## API Externas e interfaces
* cd servidor-api
* npm install
* npm start - ira rodar na porta 8080
* GET http://localhost:8080/dados

## Como debugar o type-script
* para habilitar adicionar no tsconfig.json **"sourceMap": true**
  * com isto o compliador ira criar um arquivo .map mapeando o js para o typescript
  * após isso é possível debudar no navegador acessando os próprios arquivos typescript 