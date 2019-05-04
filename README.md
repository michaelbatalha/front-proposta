Execução docker angular:

Este passo é o terceiro e último a ser executado: Abrir prompt e executar a linha de código abaixo:

docker run --rm -d -p 4200:80/tcp michaelbferreira/front-proposta:latest

Para acessar a aplicação:

http://localhost:4200

Observações:

Devido ao prazo, para melhorar a solução vou implementar o docker-compose para startar todos os containers.
