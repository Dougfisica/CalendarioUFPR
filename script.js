window.getDiaSemana = function(dataStr) {
  const dias = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  const [ano, mes, dia] = dataStr.split('-').map(Number);
  const dt = new Date(ano, mes - 1, dia);
  return dias[dt.getDay()];
}

const ufprcalEvents=[
  {date:'2024-12-09', title:'Prazo final para mudança de habilitação', desc:'Coordenações comunicam à COPAP.', type:'prazo', semester:1, target:'professor'},
  {date:'2024-12-09', title:'Destrancamento automático de curso', desc:'Discentes que completaram o prazo de trancamento.', type:'trancamento', semester:1, target:'aluno'},
  {date:'2024-12-13', title:'Prazo final para devolução de oferta de turmas', desc:'Departamentos devolvem às Coordenações.', type:'matricula', semester:1, target:'professor'},
  {date:'2024-12-14', title:'Feriado em Toledo', desc:'Aniversário do município.', type:'feriado', semester:1, target:'ambos'},
  {date:'2024-12-14', title:'Feriado em Jandaia do Sul', desc:'Aniversário do município.', type:'feriado', semester:1, target:'ambos'},
  {date:'2024-12-20', title:'Feriado em Pontal do Paraná', desc:'Aniversário do município.', type:'feriado', semester:1, target:'ambos'},
  {date:'2024-12-25', title:'Feriado: Natal', desc:'Todos os campi.', type:'feriado', semester:1, target:'ambos'},
  {date:'2024-12-31', title:'Prazo final para lançamento de notas e encerramento das turmas (15 semanas)', desc:'Turmas de 15 semanas.', type:'nota', semester:1, target:'professor'},
  {date:'2025-01-01', title:'Feriado: Confraternização Universal', desc:'Todos os campi.', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-01-06', title:'Início do período para dispensa de pré-requisito/correquisito', desc:'Até 14/mar.', type:'prazo', semester:1, target:'aluno'},
  {date:'2025-01-06', title:'Início do destrancamento antecipado de curso (1º semestre)', desc:'Até 17/mar.', type:'trancamento', semester:1, target:'aluno'},
  {date:'2025-01-06', title:'Início do prazo para colegiado deliberar sobre dispensa de pré-requisito/correquisito', desc:'Até 21/mar.', type:'prazo', semester:1, target:'professor'},
  {date:'2025-01-22', title:'Feriado em Palotina', desc:'Padroeiro do município.', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-02-10', title:'Prazo final para disponibilização das turmas para matrícula', desc:'Coordenação.', type:'matricula', semester:1, target:'professor'},
  {date:'2025-02-17', title:'Prazo final para lançamento de notas (18 semanas)', desc:'Cursos de 18 semanas.', type:'nota', semester:1, target:'professor'},
  {date:'2025-02-18', title:'Processamento da oferta de turmas', desc:'De 18 a 20/fev.', type:'matricula', semester:1, target:'ambos'},
  {date:'2025-02-21', title:'Início da solicitação de matrícula', desc:'De 21 a 25/fev.', type:'matricula', semester:1, target:'aluno'},
  {date:'2025-02-21', title:'Início do período de avaliação de cursos e disciplinas', desc:'De 21/fev a 20/mar.', type:'evento', semester:1, target:'ambos'},
  {date:'2025-03-03', title:'Feriado: Carnaval', desc:'De 3 a 5 de março.', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-03-06', title:'Processamento dos ajustes on-line de matrícula', desc:'', type:'matricula', semester:1, target:'ambos'},
  {date:'2025-03-07', title:'Início do período de solicitação de ajuste de matrícula na Coordenação', desc:'Até 19/mar.', type:'matricula', semester:1, target:'aluno'},
  {date:'2025-03-10', title:'Início do período letivo 2025/1', desc:'Início do semestre.', type:'iniciofim', semester:1, target:'ambos'},
  {date:'2025-03-10', title:'Semana de recepção de discentes', desc:'De 10 a 14/mar.', type:'evento', semester:1, target:'ambos'},
  {date:'2025-03-17', title:'Prazo final para destrancamento antecipado de curso', desc:'Para o primeiro semestre.', type:'trancamento', semester:1, target:'aluno'},
  {date:'2025-03-17', title:'Período para matrícula em disciplina eletiva/isolada', desc:'17 e 18/mar.', type:'matricula', semester:1, target:'aluno'},
  {date:'2025-03-19', title:'Prazo final para solicitação de ajuste de matrícula na Coordenação', desc:'', type:'matricula', semester:1, target:'aluno'},
  {date:'2025-03-19', title:'Feriado em Pontal do Paraná', desc:'Padroeiro do município.', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-03-21', title:'Prazo final para solicitação de exames de adiantamento de conhecimento', desc:'', type:'prazo', semester:1, target:'aluno'},
  {date:'2025-03-24', title:'Prazo final para a Coordenação realizar o ajuste de matrícula', desc:'', type:'matricula', semester:1, target:'professor'},
  {date:'2025-03-24', title:'Início do período de trancamento de curso semestral com matrícula', desc:'De 24/mar a 06/mai.', type:'trancamento', semester:1, target:'aluno'},
  {date:'2025-03-24', title:'Início do período de cancelamento de matrícula em disciplina semestral', desc:'De 24/mar a 06/mai.', type:'trancamento', semester:1, target:'aluno'},
  {date:'2025-03-24', title:'Início do período de solicitação de mudança de habilitação (2º semestre)', desc:'De 24/mar a 02/jun.', type:'prazo', semester:1, target:'aluno'},
  {date:'2025-04-04', title:'Prazo final para registro de trancamento de curso sem matrícula', desc:'', type:'trancamento', semester:1, target:'professor'},
  {date:'2025-04-18', title:'Feriado: Sexta-feira Santa', desc:'', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-04-21', title:'Feriado: Tiradentes', desc:'', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-04-22', title:'Prazo final para solicitar correções no histórico escolar', desc:'Ano letivo 2024.', type:'prazo', semester:1, target:'aluno'},
  {date:'2025-05-01', title:'Feriado: Dia do Trabalho', desc:'', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-05-05', title:'Início da oferta de turmas para o 2º semestre', desc:'De 5/mai a 24/jun.', type:'matricula', semester:1, target:'professor'},
  {date:'2025-05-06', title:'Prazo final para cancelamento de matrícula em disciplina semestral', desc:'', type:'trancamento', semester:1, target:'aluno'},
  {date:'2025-05-06', title:'Prazo final para trancamento de curso semestral com matrícula', desc:'', type:'trancamento', semester:1, target:'aluno'},
  {date:'2025-05-12', title:'Inativação das turmas sem matrícula', desc:'', type:'evento', semester:1, target:'professor'},
  {date:'2025-05-26', title:'Prazo final para lançamento de equivalência de disciplinas', desc:'Inclui análise pelo colegiado.', type:'nota', semester:1, target:'professor'},
  {date:'2025-06-02', title:'Prazo final para solicitação de mudança de habilitação (2º semestre)', desc:'', type:'prazo', semester:1, target:'aluno'},
  {date:'2025-05-22', title:'Universo UFPR', desc:'De 22 a 25/maio.', type:'evento', semester:1, target:'ambos'},
  {date:'2025-06-06', title:'Prazo final para exame de aproveitamento de conhecimento', desc:'', type:'prazo', semester:1, target:'aluno'},
  {date:'2025-06-06', title:'Prazo final para solicitação de permanência em curso 2025/2', desc:'', type:'prazo', semester:1, target:'aluno'},
  {date:'2025-06-09', title:'Início dos exames de aproveitamento de conhecimento', desc:'De 9/jun a 02/jul.', type:'evento', semester:1, target:'ambos'},
  {date:'2025-06-12', title:'Feriado em Matinhos', desc:'Aniversário do município.', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-06-19', title:'Feriado: Corpus Christi', desc:'', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-06-23', title:'Início do lançamento de notas e frequência', desc:'De 23/jun a 19/jul.', type:'nota', semester:1, target:'professor'},
  {date:'2025-06-24', title:'Prazo final de oferta de turmas (2º semestre)', desc:'Coordenação para Departamentos.', type:'matricula', semester:1, target:'professor'},
  {date:'2025-06-29', title:'Feriado em Matinhos', desc:'Padroeiro do município.', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-07-01', title:'Prazo final para correções de matrícula (2025/1 e anuais)', desc:'Motivos administrativos.', type:'matricula', semester:1, target:'professor'},
  {date:'2025-07-02', title:'Fim do período letivo 2025/1 (15 semanas)', desc:'', type:'iniciofim', semester:1, target:'ambos'},
  {date:'2025-07-07', title:'Destrancamento automático de curso', desc:'Discentes que completaram um ano de trancamento.', type:'trancamento', semester:1, target:'aluno'},
  {date:'2025-07-07', title:'Exames Primeiro Semestre (15 semanas)', desc:'De 7 a 12/jul.', type:'exames', semester:1, target:'ambos'},
  {date:'2025-07-08', title:'Prazo final para devolução de oferta de turmas (2º semestre)', desc:'', type:'matricula', semester:1, target:'professor'},
  {date:'2025-07-12', title:'Fim do período letivo 2025/1 (18 semanas)', desc:'', type:'iniciofim', semester:1, target:'ambos'},
  {date:'2025-07-12', title:'Fim do período letivo do Curso Técnico de Petróleo e Gás', desc:'', type:'iniciofim', semester:1, target:'ambos'},
  {date:'2025-07-14', title:'Exames Primeiro Semestre (18 semanas)', desc:'De 14 a 19/jul.', type:'exames', semester:1, target:'ambos'},
  {date:'2025-07-24', title:'Solicitação de Matrícula em Disciplinas (2º semestre)', desc:'De 24 a 27/jul', type:'matricula', semester:2, target:'ambos'},
  {date:'2025-08-01', title:'Processamento dos ajustes on-line de matrícula', desc:'', type:'matricula', semester:2, target:'ambos'},
  {date:'2025-08-02', title:'Início do ajuste de matrícula na Coordenação', desc:'De 2 a 13/ago.', type:'matricula', semester:2, target:'aluno'},
  {date:'2025-08-04', title:'Início do período letivo 2025/2', desc:'', type:'iniciofim', semester:2, target:'ambos'},
  {date:'2025-08-04', title:'Semana de recepção de discentes', desc:'De 4 a 8/ago.', type:'evento', semester:2, target:'ambos'},
  {date:'2025-08-08', title:'Prazo final para cancelamento de matrícula em disciplina anual', desc:'', type:'trancamento', semester:2, target:'aluno'},
  {date:'2025-08-08', title:'Prazo final para trancamento de curso anual com matrícula', desc:'', type:'trancamento', semester:2, target:'aluno'},
  {date:'2025-08-11', title:'Prazo final para destrancamento antecipado de curso', desc:'Para o segundo semestre.', type:'trancamento', semester:2, target:'aluno'},
  {date:'2025-08-12', title:'Término do período letivo para o Curso Técnico de Petróleo e Gás', desc:'', type:'iniciofim', semester:2, target:'ambos'},
  {date:'2025-08-15', title:'Prazo final para solicitação de trancamento de curso sem matrícula', desc:'', type:'trancamento', semester:2, target:'aluno'},
  {date:'2025-08-18', title:'Prazo final para solicitação de equivalência de disciplinas', desc:'', type:'prazo', semester:2, target:'aluno'},
  {date:'2025-09-05', title:'Prazo final para colegiado deliberar sobre adiantamento de conhecimento', desc:'', type:'prazo', semester:2, target:'professor'},
  {date:'2025-09-07', title:'Feriado: Independência do Brasil', desc:'', type:'feriado', semester:2, target:'ambos'},
  {date:'2025-09-08', title:'Feriado em Curitiba', desc:'Padroeira do município.', type:'feriado', semester:2, target:'ambos'},
  {date:'2025-09-13', title:'Prazo final para correções no histórico escolar relativas a 2025/1', desc:'', type:'prazo', semester:2, target:'aluno'},
  {date:'2025-09-22', title:'Prazo final para cadastramento de matrícula em mobilidade acadêmica', desc:'Para saída em 2025/2.', type:'matricula', semester:2, target:'aluno'},
  {date:'2025-09-26', title:'Prazo final para ajuste e adição curricular (início 1º semestre)', desc:'Colegiados encaminham à PROGRAD.', type:'prazo', semester:2, target:'professor'},
  {date:'2025-09-30', title:'Prazo final para colação de grau (2025/1)', desc:'Coordenação de curso envia à COPAP.', type:'prazo', semester:2, target:'professor'},
  {date:'2025-10-06', title:'Prazo final para cancelamento de matrícula em disciplina semestral', desc:'', type:'trancamento', semester:2, target:'aluno'},
  {date:'2025-10-06', title:'Prazo final para trancamento de curso semestral com matrícula', desc:'', type:'trancamento', semester:2, target:'aluno'},
  {date:'2025-10-10', title:'Prazo final para lançamento de notas de adiantamento de conhecimento', desc:'', type:'nota', semester:2, target:'professor'},
  {date:'2025-10-12', title:'Feriado: Nossa Senhora Aparecida', desc:'', type:'feriado', semester:2, target:'ambos'},
  {date:'2025-10-15', title:'Prazo final para cancelamento de registro acadêmico', desc:'Para discentes sem matrícula e sem trancamento.', type:'trancamento', semester:2, target:'aluno'},
  {date:'2025-10-17', title:'Prazo final para lançamento de equivalência de disciplinas', desc:'', type:'nota', semester:2, target:'professor'},
  {date:'2025-10-18', title:'Recesso acadêmico para ensalamento do Processo Seletivo', desc:'De 18 a 19/out.', type:'evento', semester:2, target:'ambos'},
  {date:'2025-10-19', title:'Realização da 1ª Fase do Processo Seletivo UFPR 2025/2026', desc:'', type:'evento', semester:2, target:'ambos'},
  {date:'2025-10-20', title:'Festival UFPR da Ciência, Cultura e Inovação / SIEPE', desc:'De 20 a 24/out.', type:'evento', semester:2, target:'ambos'},
  {date:'2025-10-28', title:'Dia do Servidor Público', desc:'', type:'evento', semester:2, target:'ambos'},
  {date:'2025-10-31', title:'Prazo final para solicitação de exame de aproveitamento de conhecimento', desc:'', type:'prazo', semester:2, target:'aluno'},
  {date:'2025-11-02', title:'Feriado: Finados', desc:'', type:'feriado', semester:2, target:'ambos'},
  {date:'2025-11-12', title:'Prazo final para solicitação de permanência em curso (2026/1)', desc:'Alunos protocolam nas coordenações.', type:'prazo', semester:2, target:'aluno'},
  {date:'2025-11-15', title:'Feriado: Proclamação da República', desc:'', type:'feriado', semester:2, target:'ambos'},
  {date:'2025-11-20', title:'Feriado: Dia Nacional da Consciência Negra', desc:'', type:'feriado', semester:2, target:'ambos'},
  {date:'2025-11-28', title:'Prazo final de oferta de turmas anuais e do 1º semestre', desc:'Coordenação para Departamentos.', type:'matricula', semester:2, target:'professor'},
  {date:'2025-12-01', title:'Prazo final para correções de matrícula em disciplinas semestrais (2025/2)', desc:'Motivos administrativos.', type:'matricula', semester:2, target:'professor'},
  {date:'2025-12-06', title:'Fim do período letivo 2025/2', desc:'', type:'iniciofim', semester:2, target:'ambos'},
  {date:'2025-12-11', title:'Prazo final para comunicar mudança de habilitação', desc:'Coordenação comunica à COPAP.', type:'prazo', semester:2, target:'professor'},
  {date:'2025-12-11', title:'Destrancamento automático de curso', desc:'Discentes que completaram o período de trancamento.', type:'trancamento', semester:2, target:'aluno'},
  {date:'2025-12-14', title:'Feriado em Toledo', desc:'Aniversário do município.', type:'feriado', semester:2, target:'ambos'},
  {date:'2025-12-14', title:'Feriado em Jandaia do Sul', desc:'Aniversário do município.', type:'feriado', semester:2, target:'ambos'},
  {date:'2025-12-15', title:'Exames Segundo Semestre', desc:'De 15 a 20/dez.', type:'exames', semester:2, target:'ambos'},
  {date:'2025-12-20', title:'Feriado em Pontal do Paraná', desc:'Aniversário do município.', type:'feriado', semester:2, target:'ambos'},
  {date:'2025-12-22', title:'Início do período para segunda avaliação final (disciplinas anuais)', desc:'De 22/dez a 02/jan.', type:'evento', semester:2, target:'ambos'},
  {date:'2025-12-25', title:'Feriado: Natal', desc:'', type:'feriado', semester:2, target:'ambos'},
  {date:'2025-12-31', title:'Prazo final para lançamento de notas e frequência e encerramento das turmas', desc:'', type:'nota', semester:2, target:'professor'},
  {date:'2026-01-01', title:'Feriado: Confraternização Universal', desc:'', type:'feriado', semester:2, target:'ambos'},
  {date:'2026-01-12', title:'Período para segunda avaliação final (disciplinas anuais)', desc:'De 12 a 17/jan.', type:'evento', semester:2, target:'ambos'},
  {date:'2026-01-12', title:'Prazo final para devolução de oferta de turmas às Coordenações', desc:'', type:'matricula', semester:2, target:'professor'},
  {date:'2026-01-27', title:'Prazo final para Coordenação disponibilizar turmas para matrícula', desc:'', type:'matricula', semester:2, target:'professor'},
  {date:'2026-02-16', title:'Feriado: Carnaval', desc:'De 16 a 18/fev.', type:'feriado', semester:2, target:'ambos'},
  {date:'2026-03-02', title:'Provável início do período letivo 2026/1', desc:'', type:'iniciofim', semester:2, target:'ambos'},
  {date:'2025-02-21', title:'Início do período de trancamento de curso sem matrícula', desc:'De 21/fev a 21/mar.', type:'trancamento', semester:1, target:'aluno'},
  {date:'2025-02-21', title:'Início do prazo para Coordenação registrar trancamento de curso sem matrícula', desc:'De 21/fev a 04/abr.', type:'trancamento', semester:1, target:'professor'},
  {date:'2025-02-26', title:'Processamento de matrículas', desc:'26 e 27/fev.', type:'matricula', semester:1, target:'ambos'},
  {date:'2025-02-27', title:'Segundo processamento de turmas', desc:'', type:'matricula', semester:1, target:'ambos'},
  {date:'2025-02-28', title:'Início do período para alteração de vagas nas turmas', desc:'De 28/fev a 21/mar.', type:'matricula', semester:1, target:'professor'},
  {date:'2025-02-28', title:'Início do ajuste on-line de matrícula', desc:'De 28/fev a 05/mar.', type:'matricula', semester:1, target:'aluno'},
  {date:'2025-03-10', title:'Início da confirmação de matrícula e ocupação da vaga', desc:'De 10 a 12/mar.', type:'matricula', semester:1, target:'aluno'},
  {date:'2025-03-10', title:'Início da solicitação de exame de adiantamento de conhecimento', desc:'De 10 a 21/mar.', type:'prazo', semester:1, target:'aluno'},
  {date:'2025-03-10', title:'Início do pedido de equivalência de disciplinas', desc:'De 10 a 26/mar.', type:'prazo', semester:1, target:'aluno'},
  {date:'2025-03-10', title:'Início do lançamento de equivalência de disciplinas', desc:'De 10/mar a 26/mai.', type:'nota', semester:1, target:'professor'},
  {date:'2025-03-19', title:'Início da análise de pedidos de disciplinas eletivas', desc:'De 19 a 26/mar.', type:'evento', semester:1, target:'professor'},
  {date:'2025-03-21', title:'Prazo final para Coordenações de Curso enviarem à COPAP a relação de estudantes que pediram permanência em curso e concluíram o curso em 2024/2', desc:'', type:'prazo', semester:1, target:'professor'},
  {date:'2025-03-21', title:'Prazo final para colegiado deliberar sobre dispensa de pré-requisito/correquisito', desc:'', type:'prazo', semester:1, target:'professor'},
  {date:'2025-03-21', title:'Prazo final para trancamento de curso sem matrícula', desc:'', type:'trancamento', semester:1, target:'aluno'},
  {date:'2025-04-04', title:'Prazo final para colegiado encaminhar ajuste e adição curricular (2º semestre)', desc:'', type:'prazo', semester:1, target:'professor'},
  {date:'2025-04-11', title:'Prazo final para colegiado deliberar sobre adiantamento de conhecimento', desc:'', type:'prazo', semester:1, target:'professor'},
  {date:'2025-04-11', title:'Prazo final para Coordenação tramitar exames de adiantamento de conhecimento', desc:'', type:'prazo', semester:1, target:'professor'},
  {date:'2025-04-14', title:'Início dos exames de adiantamento de conhecimento', desc:'De 14/abr a 05/mai.', type:'evento', semester:1, target:'ambos'},
  {date:'2025-05-02', title:'Prazo final para processos de colação de grau (2024/2)', desc:'', type:'prazo', semester:1, target:'professor'},
  {date:'2025-05-14', title:'Início do lançamento de notas de adiantamento de conhecimento', desc:'De 14 a 16/mai.', type:'nota', semester:1, target:'professor'},
  {date:'2025-05-16', title:'Prazo final para departamentos lançarem resultados de adiantamento de conhecimento', desc:'', type:'nota', semester:1, target:'professor'},
  {date:'2025-05-18', title:'Prazo final para cadastramento de mobilidade acadêmica (saída 2025/1)', desc:'', type:'prazo', semester:1, target:'aluno'},
  {date:'2025-05-21', title:'Prazo final para cancelamento de registro acadêmico (sem matrícula e sem trancamento)', desc:'', type:'trancamento', semester:1, target:'aluno'},
  {date:'2025-05-26', title:'Início do período para exame de aproveitamento de conhecimento', desc:'De 26/mai a 06/jun.', type:'prazo', semester:1, target:'ambos'},
  {date:'2025-05-30', title:'Prazo final para proposta de reformulação curricular', desc:'', type:'prazo', semester:1, target:'professor'},
  {date:'2025-06-24', title:'Feriado em Jandaia do Sul', desc:'Padroeiro do município.', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-06-30', title:'Início do ajuste de matrículas (Período Especial 2025/1)', desc:'De 30/jun a 19/jul.', type:'matricula', semester:1, target:'aluno'},
  {date:'2025-07-02', title:'Prazo final para envio de processos à COPAP (Período Especial 2025/1)', desc:'', type:'prazo', semester:1, target:'professor'},
  {date:'2025-07-03', title:'Início do cancelamento de matrícula (Período Especial 2025/1)', desc:'De 3 a 24/jul.', type:'trancamento', semester:1, target:'aluno'},
  {date:'2025-07-03', title:'Início das aulas (Período Especial 2025/1)', desc:'De 3/jul a 02/ago.', type:'iniciofim', semester:1, target:'ambos'},
  {date:'2025-07-07', title:'Prazo final para Coordenação comunicar mudança de habilitação (2025/1)', desc:'', type:'prazo', semester:1, target:'professor'},
  {date:'2025-07-09', title:'Início do lançamento de notas de aproveitamento de conhecimento', desc:'De 9 a 15/jul.', type:'nota', semester:1, target:'professor'},
  {date:'2025-07-09', title:'Início do lançamento de atividades formativas', desc:'De 9 a 18/jul.', type:'evento', semester:1, target:'professor'},
  {date:'2025-07-15', title:'Prazo final para Departamentos registrarem resultados dos exames de aproveitamento de conhecimento', desc:'', type:'nota', semester:1, target:'professor'},
  {date:'2025-07-18', title:'Prazo final para Coordenação disponibilizar as turmas para matrícula (2º semestre)', desc:'', type:'matricula', semester:2, target:'professor'},
  {date:'2025-07-18', title:'Prazo final para lançamento de atividades formativas', desc:'', type:'evento', semester:1, target:'professor'},
  {date:'2025-07-19', title:'Prazo final para lançamento de notas e frequência e encerramento das turmas', desc:'', type:'nota', semester:1, target:'professor'},
  {date:'2025-07-21', title:'Início do período de avaliação de disciplinas (CPA)', desc:'De 21/jul a 14/ago.', type:'evento', semester:1, target:'ambos'},
  {date:'2025-07-25', title:'Feriado em Palotina', desc:'Aniversário do município.', type:'feriado', semester:1, target:'ambos'},
  {date:'2025-07-29', title:'Início do lançamento de notas (Período Especial 2025/1)', desc:'De 29/jul a 09/ago.', type:'nota', semester:1, target:'professor'},
  {date:'2025-07-30', title:'Solicitação de ajuste on-line de matrícula (2º semestre)', desc:'30 e 31/jul.', type:'matricula', semester:2, target:'aluno'},
  {date:'2025-07-31', title:'Prazo final para Colegiados enviarem à PROGRAD a implantação de currículo para novos cursos (início em 2027)', desc:'', type:'prazo', semester:1, target:'professor'},
  {date:'2025-07-07', title:'Início do destrancamento antecipado de curso (2º semestre)', desc:'De 7/jul a 11/ago.', type:'trancamento', semester:2, target:'aluno'},
  {date:'2025-07-16', title:'Início da dispensa de pré-requisito/correquisito (2º semestre)', desc:'De 16/jul a 08/ago.', type:'prazo', semester:2, target:'aluno'},
  {date:'2025-07-16', title:'Início do prazo para colegiado deliberar sobre dispensa de pré-requisito/correquisito', desc:'De 16/jul a 15/ago.', type:'prazo', semester:2, target:'professor'},
  {date:'2025-08-04', title:'Início da confirmação de matrícula e ocupação da vaga (2º semestre)', desc:'De 4 a 6/ago.', type:'matricula', semester:2, target:'aluno'},
  {date:'2025-08-04', title:'Início da solicitação de exame de adiantamento de conhecimento', desc:'De 4 a 15/ago.', type:'prazo', semester:2, target:'aluno'},
  {date:'2025-08-04', title:'Início do pedido de equivalência de disciplinas', desc:'De 4 a 18/ago.', type:'prazo', semester:2, target:'aluno'},
  {date:'2025-08-04', title:'Início do lançamento de equivalência de disciplinas', desc:'De 4/ago a 17/out.', type:'nota', semester:2, target:'professor'},
  {date:'2025-08-11', title:'Período de matrícula em disciplina eletiva/isolada', desc:'11 e 12/ago.', type:'matricula', semester:2, target:'aluno'},
  {date:'2025-08-13', title:'Prazo final para solicitação de ajuste de matrícula na Coordenação', desc:'', type:'matricula', semester:2, target:'aluno'},
  {date:'2025-08-13', title:'Início da análise de pedidos de disciplinas eletivas', desc:'De 13 a 20/ago.', type:'evento', semester:2, target:'professor'},
  {date:'2025-08-15', title:'Prazo final para Coordenação encaminhar permanência em curso (2025/1)', desc:'', type:'prazo', semester:2, target:'professor'},
  {date:'2025-08-15', title:'Prazo final para solicitação de exame de adiantamento de conhecimento', desc:'', type:'prazo', semester:2, target:'aluno'},
  {date:'2025-08-18', title:'Início do período para colegiado deliberar sobre adiantamento de conhecimento', desc:'De 18/ago a 05/set.', type:'prazo', semester:2, target:'professor'},
  {date:'2025-08-18', title:'Início do cancelamento de matrícula em disciplina semestral', desc:'De 18/ago a 06/out.', type:'trancamento', semester:2, target:'aluno'},
  {date:'2025-08-18', title:'Início do trancamento de curso semestral com matrícula', desc:'De 18/ago a 06/out.', type:'trancamento', semester:2, target:'aluno'},
  {date:'2025-08-18', title:'Início do pedido de mudança de habilitação (semestre seguinte)', desc:'De 18/ago a 12/nov.', type:'prazo', semester:2, target:'aluno'},
  {date:'2025-08-29', title:'Prazo final para Coordenação registrar trancamento de curso sem matrícula', desc:'', type:'trancamento', semester:2, target:'professor'},
  {date:'2025-09-05', title:'Prazo final para colegiado deliberar sobre adiantamento de conhecimento', desc:'', type:'prazo', semester:2, target:'professor'},
  {date:'2025-09-05', title:'Prazo final para Coordenação tramitar exames de adiantamento de conhecimento', desc:'', type:'prazo', semester:2, target:'professor'},
  {date:'2025-09-08', title:'Início dos exames de adiantamento de conhecimento', desc:'De 8 a 27/set.', type:'evento', semester:2, target:'ambos'},
  {date:'2025-10-07', title:'Inativação das turmas sem matrícula', desc:'', type:'evento', semester:2, target:'professor'},
  {date:'2025-10-08', title:'Início do lançamento de notas de adiantamento de conhecimento', desc:'De 8 a 10/out.', type:'nota', semester:2, target:'professor'},
  {date:'2025-10-20', title:'Início do pedido de exame de aproveitamento de conhecimento', desc:'De 20 a 31/out.', type:'prazo', semester:2, target:'aluno'},
  {date:'2025-10-29', title:'Início da oferta de turmas anuais e do 1º semestre', desc:'De 29/out a 28/nov.', type:'matricula', semester:2, target:'professor'},
  {date:'2025-10-29', title:'Início do ajuste e tramitação de turmas pelos Departamentos', desc:'De 29/out a 12/dez.', type:'matricula', semester:2, target:'professor'},
  {date:'2025-11-04', title:'Semana Acadêmica Integrada de Artes, Comunicação e Design', desc:'De 4 a 7/nov.', type:'evento', semester:2, target:'ambos'},
  {date:'2025-11-10', title:'Início dos exames de aproveitamento de conhecimento', desc:'De 10/nov a 06/dez.', type:'evento', semester:2, target:'ambos'},
  {date:'2025-11-10', title:'Início do lançamento de notas de aproveitamento de conhecimento', desc:'De 10/nov a 31/dez.', type:'nota', semester:2, target:'professor'},
  {date:'2025-11-10', title:'Início do lançamento de atividades formativas', desc:'De 10/nov a 31/dez.', type:'evento', semester:2, target:'professor'},
  {date:'2025-11-12', title:'Prazo final para solicitação de mudança de habilitação', desc:'', type:'prazo', semester:2, target:'aluno'},
  {date:'2025-11-29', title:'Recesso acadêmico para 2ª Fase do Processo Seletivo', desc:'De 29/nov a 01/dez.', type:'evento', semester:2, target:'ambos'},
  {date:'2025-11-30', title:'2ª Fase do Processo Seletivo UFPR 2025/2026', desc:'30/nov e 01/dez.', type:'evento', semester:2, target:'ambos'},
  {date:'2025-12-01', title:'Início do período de lançamento de notas e frequência', desc:'De 1 a 31/dez.', type:'nota', semester:2, target:'professor'},
  {date:'2025-12-01', title:'Início do ajuste de matrículas (Período Especial 2025/2)', desc:'De 1/dez a 16/jan.', type:'matricula', semester:2, target:'aluno'},
  {date:'2025-12-12', title:'Prazo final para envio de processos à COPAP (Período Especial 2025/2)', desc:'', type:'prazo', semester:2, target:'professor'},
  {date:'2025-12-13', title:'Fim do período letivo do Curso Técnico de Petróleo e Gás', desc:'', type:'iniciofim', semester:2, target:'ambos'},
  {date:'2026-01-11', title:'Início das aulas (Período Especial 2025/2)', desc:'De 11/jan a 21/fev.', type:'iniciofim', semester:2, target:'ambos'},
  {date:'2026-01-11', title:'Início do cancelamento de matrícula (Período Especial 2025/2)', desc:'De 11 a 23/jan.', type:'trancamento', semester:2, target:'aluno'},
  {date:'2026-01-22', title:'Feriado em Palotina', desc:'Padroeiro do município.', type:'feriado', semester:2, target:'ambos'},
  {date:'2026-01-26', title:'Início do lançamento de notas (Período Especial 2025/2)', desc:'De 26/jan a 27/fev.', type:'nota', semester:2, target:'professor'}
];

const ufprcalICONS_SVG = {
  feriado: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 7h2v2h-2z"/></svg>', // Placeholder - similar to prazo
  exames: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"/><path d="M11 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zm8-8h2v2h-2zm0 4h2v2h-2z"/></svg>', // Grid/Test like
  prazo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 7h2v2h-2z"/></svg>', // Clock
  matricula: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V7l-5-5zM6 20V4h8v4h4v12H6zm7-10H7v-2h6v2zm0 4H7v-2h6v2z"/></svg>', // Document/Pen
  nota: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M7 12v2h2v-2H7zM7 16v2h2v-2H7zM7 8v2h2V8H7zM11 12v2h2v-2h-2zM11 16v2h2v-2h-2zM11 8v2h2V8h-2zM15 12v2h2v-2h-2zM15 16v2h2v-2h-2zM15 8v2h2V8h-2zM19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 16H5V5h14v14z"/></svg>', // Bar chart / stats
  evento: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>', // Calendar
  trancamento: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/></svg>', // Door/Minus like
  iniciofim: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 7h2v2h-2z"/></svg>', // Flag/Placeholder - similar to prazo
  default: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13h2v6h-2zm0 7h2v2h-2z"/></svg>' // Generic calendar or dot
};

let ufprcalSemester=1,ufprcalType='all',ufprcalSearch='';
let ufprcalUser='aluno';

window.ufprcalSetUser = function(user) {
  ufprcalUser = user;
  document.getElementById('ufprcal-btn-aluno').classList.toggle('ufprcal-user-active', user === 'aluno');
  document.getElementById('ufprcal-btn-prof').classList.toggle('ufprcal-user-active', user === 'professor');
  ufprcalRender();
};

window.ufprcalRender = function(){
  let evs=ufprcalEvents.filter(e=>e.semester===ufprcalSemester);

  if(ufprcalUser === 'aluno'){
    evs = evs.filter(e => e.target === 'aluno' || e.target === 'ambos');
  }

  if(ufprcalType!=='all')evs=evs.filter(e=>e.type===ufprcalType);

  if(ufprcalSearch.length>0){
    const st=ufprcalSearch.toLowerCase();
    evs=evs.filter(e=>(e.title + (e.desc || "")).toLowerCase().includes(st) || ufprcalFmt(e.date).includes(st));
  }
  
  const today = (new Date()).toISOString().slice(0,10);
  // Sort future events first, then past events. Within each group, sort chronologically.
  const futureEvents = evs.filter(e => e.date >= today).sort((a,b) => a.date.localeCompare(b.date));
  const pastEvents = evs.filter(e => e.date < today).sort((a,b) => a.date.localeCompare(b.date));
  const ordenados = [...futureEvents, ...pastEvents];
  
  const mainContainer = document.getElementById('ufprcal-main');
  mainContainer.innerHTML = ''; 

  if (!ordenados.length) { // Check 'ordenados' instead of 'evs'
    const noEventsDiv = document.createElement('div');
    noEventsDiv.className = 'no-events-message'; 
    noEventsDiv.textContent = 'Nenhum evento.';
    mainContainer.appendChild(noEventsDiv);
    return;
  }

  ordenados.forEach(e => { // Iterate over 'ordenados'
    const eventDiv = document.createElement('div');
    eventDiv.className = 'event-item';
    eventDiv.classList.add(`event-type-${e.type || 'default'}`);

    if (e.date < today) {
      eventDiv.classList.add('event-item-faded');
    }

    let descExtra = '';
    if (e.type === 'feriado') {
      descExtra = `<span class="event-description-weekday">(${getDiaSemana(e.date)})</span>`;
    }
    
    const iconSVG = ufprcalICONS_SVG[e.type] || ufprcalICONS_SVG.default;

    eventDiv.innerHTML = `
      <div class="event-date">${ufprcalFmt(e.date)}</div>
      <div class="event-details">
        <div class="event-title">
          <span class="event-icon-svg">${iconSVG}</span>
          ${e.title}
        </div>
        <div class="event-description">${e.desc||''} ${descExtra}</div>
      </div>
    `;
    mainContainer.appendChild(eventDiv);
  });
}

window.ufprcalFmt = function(s){let d=s.split('-');return d[2]+'/'+d[1];}

window.ufprcalSetSemester=function(sem){
  ufprcalSemester=sem;
  document.getElementById('sem1').classList.toggle('ufprcal-sem-active', sem === 1);
  document.getElementById('sem2').classList.toggle('ufprcal-sem-active', sem === 2);
  ufprcalRender();
};

window.ufprcalSetFilter=function(type){
  ufprcalType=type;
  ['all','iniciofim', 'exames', 'feriado','matricula','nota','trancamento','evento','prazo'].forEach(t=>{
    document.getElementById('filt-'+t).classList.toggle('ufprcal-filter-active', t === type);
  });
  ufprcalRender();
};

const searchInput = document.getElementById('ufprcal-search');
if (searchInput) {
  searchInput.addEventListener('input',function(){
    ufprcalSearch=this.value.trim();
    ufprcalRender();
  });
} else {
  console.error("Search input #ufprcal-search not found.");
}

ufprcalRender();


