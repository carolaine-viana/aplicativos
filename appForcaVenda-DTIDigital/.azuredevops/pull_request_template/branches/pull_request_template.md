# Checklist Developer

## _Typescript_
- [ ] Está sendo utilizado tipagens corretamente
- [ ] Linter não está acusando erros

## _Padrão de código_
- [ ] Componentes estão sendo criados com extensão com .tsx
- [ ] Estrutura da features estão corretas (views, services, utils)
- [ ] Componentes que podem ser reutilizados estão no @shared
- [ ] Componentes não fazem requisições diretas ao repositorio
- [ ] Funções estão sendo externalizadas para arquivo de utils
- [ ] Componentes de estilo estão sendo criados com terminação SC
- [ ] Index somente exportando módulos

## _Entrega_
- [ ] Componentes de feedback estão sendo utilizados correntamente (carregamento, erro, vazio, sucesso)
- [ ] A tela possui busca no header? Se sim, está funcionando?
- [ ] A tela possui coisas que somente um perfil de usuário(RCA, GT, GV) pode ver? Se sim, está sendo tratado de acordo com quem está logado?
- [ ] A funcionalidade é só online? Se sim, esta sendo tratado condição de offline?
- [ ] O backbutton está funcionando(device e "setinha" do header)?
- [ ] O título do header/tabs está de acordo com o conteúdo da tela?



## _SonarQube_
- [ ] Rodou o Sonar
- [ ] Métricas dentro do Quality Gate

## _Testes unitários_
- [ ] Rodou o Jest
- [ ] Foram realizados testes unitários para simular cenários de sucesso e alternativos
