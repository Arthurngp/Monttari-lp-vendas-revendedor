# Configuração do Google Sheets para Formulário Monttari

## Passo 1: Criar a Planilha
1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha chamada "Leads Monttari"
3. Copie o ID da planilha da URL (parte entre `/d/` e `/edit`)

## Passo 2: Configurar Google Apps Script
1. Acesse [Google Apps Script](https://script.google.com)
2. Clique em "Novo projeto"
3. Cole o código abaixo no editor:

\`\`\`javascript
// Google Apps Script - Cole este código em script.google.com
function doPost(e) {
  try {
    // Get the active spreadsheet (create one first and get its ID)
    const spreadsheetId = "YOUR_SPREADSHEET_ID" // Replace with your Google Sheets ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet()

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents)

    // If this is the first row, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data/Hora", "Nome", "Email", "CNPJ", "Telefone", "Tipo de Orçamento"])
    }

    // Add the form data to the sheet
    sheet.appendRow([data.timestamp, data.nome, data.email, data.cnpj, data.telefone, data.orcamento])

    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}

// Allow GET requests for testing
function doGet() {
  return ContentService.createTextOutput("Monttari Form Handler is running").setMimeType(ContentService.MimeType.TEXT)
}
\`\`\`

4. Substitua `YOUR_SPREADSHEET_ID` pelo ID da sua planilha
5. Salve o projeto com o nome "Monttari Form Handler"

## Passo 3: Implantar como Web App
1. Clique em "Implantar" > "Nova implantação"
2. Escolha "Aplicativo da web" como tipo
3. Configure:
   - Executar como: "Eu"
   - Quem tem acesso: "Qualquer pessoa"
4. Clique em "Implantar"
5. Copie a URL do web app

## Passo 4: Atualizar o Código do Site
1. No arquivo `app/page.tsx`, na linha 45, substitua `YOUR_SCRIPT_ID` pela parte da URL após `/macros/s/` e antes de `/exec`
2. Exemplo: se a URL for `https://script.google.com/macros/s/ABC123/exec`, use `ABC123`

## Passo 5: Testar
1. Acesse o site e preencha o formulário
2. Verifique se os dados aparecem na planilha
3. Os dados serão salvos com timestamp automático

## Estrutura da Planilha
A planilha terá as seguintes colunas:
- Data/Hora
- Nome
- Email
- CNPJ
- Telefone
- Tipo de Orçamento

## Solução de Problemas
- Se o formulário não enviar, verifique se o Google Apps Script está implantado corretamente
- Certifique-se de que as permissões estão configuradas para "Qualquer pessoa"
- Teste a URL do Google Apps Script diretamente no navegador para ver se retorna "Monttari Form Handler is running"
