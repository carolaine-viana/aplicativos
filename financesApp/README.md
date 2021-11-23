# Aplicativo para controle financeiro.

## Feito em: React native + typescript + expo Bareworkflow.

#### Bibiliotecas usadas: 

* Styled-components.
* RFValue, RFPercentagem. biblioteca para aproveitamento do pixel em quais telas.
* getStatusBarHeight, getBottomSpace. biblioteca para renderizacao melhor em dispositivos como iphone 10 acima.
* Feather. biblioteca de icones do expo bare.
* theme provider. para renderizar todas as cores do app, e manter em facil acesso. 
* VictoryPie. biblioteca de gráficos para renderizar o gráfico das transacoes no app. 
* date-fns. biblioteca para ajudar na logica das datas dentro do app.
* Yup. biblioteca para ajudar a colocar regras no input do formulário na tela de cadastro do app.

* AsyncStorage. para salvar os dados no dispositivo mesmo após fechamento.
* DateTimeFormat. funcionalidade do JavaScript para formatar dados e valores númericos.
* FlatList para renderizar a lista de transacoes da tela de listagem.
* createBottomTabNavigator = biblioteca para navegacao das paginas (tabBar).
* categories = arquivo JSON que contem o nome dos icones e suas cores.

### FIGMA

https://www.figma.com/file/Z33TSc9TdoStolUJAo1aa8/GoFinances-Ignite-(Copy)?node-id=0%3A1


![Captura de Tela 2021-11-16 às 15 46 37](https://user-images.githubusercontent.com/65136543/142046670-9963055d-feab-4688-a5a3-a5aca908fb12.png)


---

#### Telas:

* LOGIN social com google e apple.

![Captura de Tela 2021-11-23 às 08 07 53](https://user-images.githubusercontent.com/65136543/143013784-d1f56d62-76a8-428e-aa53-023776fd610e.png)


* Tela de listagem: contém todo os inputs feitos, e cards com os calculos da sua carteira financeira.

![Captura de Tela 2021-11-16 às 15 31 32](https://user-images.githubusercontent.com/65136543/142044776-aef37aab-79e7-4dc3-b6f3-5933b7fd8415.png)

* Tela: Cadastrar. contém um form para cadastrar novas transacoes financeiras.

![Captura de Tela 2021-11-16 às 15 31 14](https://user-images.githubusercontent.com/65136543/142044854-5094db5b-f77d-404c-a4fc-bd532a2fcb72.png)

* Tela: gráfico. contém um gráfico com o resultado do número de gastos em cada categoria.

![Captura de Tela 2021-11-16 às 15 31 59](https://user-images.githubusercontent.com/65136543/142046295-1d5b7b28-e0f2-4b92-ad23-54aa7b0cf124.png)


