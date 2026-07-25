# Boa pergunta

Um gerador de perguntas aleatórias, pensado para abrir espaço para boas conversas. É um projeto estático, leve e responsivo — sem dependências ou processo de build.

## Executar localmente

Como o site carrega o arquivo `questions.txt` no navegador, use um servidor local simples em vez de abrir o arquivo diretamente.

```bash
python3 -m http.server 8000
```

Depois, acesse [http://localhost:8000](http://localhost:8000) no navegador.

## Adicionar perguntas

Abra o arquivo [questions.txt](questions.txt) e inclua uma pergunta por linha. Linhas vazias são ignoradas automaticamente. Não é necessário alterar o JavaScript.

## Publicar no GitHub Pages

1. Envie estes arquivos para um repositório no GitHub.
2. No repositório, acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Selecione a branch `main` (ou a branch desejada), a pasta `/(root)` e salve.
5. Aguarde a publicação. O GitHub exibirá a URL do seu site na mesma tela.

## Estrutura

```
├── index.html      # Estrutura das duas telas
├── style.css       # Visual e responsividade
├── script.js       # Sorteio e transições
└── questions.txt   # Uma pergunta por linha
```
