
let dados = [
    // Vaga de Assistente Administrativo (já existente)
    {
      logo: 'https://logo.clearbit.com/microsoft.com',
      cargo: 'Desenvolvedor de Software',
      empresa: "Microsoft é líder global em software, serviços e soluções para ajudar as pessoas e empresas a realizarem seu pleno potencial.",
      responsabilidades: "Desenvolvimento de aplicações Windows, contribuição para projetos open-source, colaboração com equipes internacionais.",
      requisitos: "Graduação em Ciência da Computação ou área relacionada; <br> Experiência com C#, .NET; <br> Conhecimento em desenvolvimento de software em nuvem;",
      benefícios: "Plano de saúde abrangente;<br> Stock options;<br> Ambiente de trabalho flexível;",
      contato: "Aplique através do nosso portal de carreiras: careers.microsoft.com",
      estado: "São Paulo - SP",
      valor: "12.000,00"
    },
    {
      logo: 'https://logo.clearbit.com/google.com',
      cargo: 'Engenheiro de Machine Learning',
      empresa: "Google é uma empresa multinacional de serviços online e software, especializada em busca na internet, computação em nuvem e tecnologias de publicidade.",
      responsabilidades: "Desenvolvimento de algoritmos de ML, otimização de modelos de IA, trabalho com grandes conjuntos de dados.",
      requisitos: "PhD ou Mestrado em Ciência da Computação, IA ou campo relacionado; <br> Experiência com TensorFlow, PyTorch; <br> Publicações em conferências de ML/AI;",
      benefícios: "Salário competitivo;<br> Refeições gratuitas;<br> Oportunidades de crescimento global;",
      contato: "Candidate-se em careers.google.com",
      estado: "São Paulo - SP",
      valor: "20.000,00"
    },
    {
      logo: 'https://logo.clearbit.com/apple.com',
      cargo: 'Designer de UX/UI',
      empresa: "Apple é uma empresa de tecnologia que projeta, desenvolve e vende eletrônicos de consumo, software de computador e serviços online.",
      responsabilidades: "Criação de interfaces intuitivas para produtos Apple, colaboração com equipes de produto e engenharia.",
      requisitos: "Bacharelado em Design, HCI ou campo relacionado; <br> Portfólio impressionante de designs de UI/UX; <br> Experiência com ferramentas de design como Sketch, Figma;",
      benefícios: "Desconto em produtos Apple;<br> Academia no local;<br> Programas de bem-estar;",
      contato: "Aplique em www.apple.com/careers",
      estado: "Rio de Janeiro - RJ",
      valor: "15.000,00"
    },
    {
      logo: 'https://logo.clearbit.com/amazon.com',
      cargo: 'Gerente de Logística',
      empresa: "Amazon é líder global em e-commerce e serviços de nuvem, conhecida por sua inovação em logística e entrega.",
      responsabilidades: "Otimização de processos de distribuição, gerenciamento de equipe de logística, implementação de tecnologias de automação.",
      requisitos: "MBA ou Mestrado em Gestão de Operações; <br> 5+ anos de experiência em logística de e-commerce; <br> Conhecimento em tecnologias de automação de armazém;",
      benefícios: "Participação nos lucros;<br> Plano de aposentadoria 401(k);<br> Licença parental estendida;",
      contato: "Inscreva-se em www.amazon.jobs",
      estado: "Minas Gerais - MG",
      valor: "18.000,00"
    },
    {
      logo: 'https://logo.clearbit.com/facebook.com',
      cargo: 'Analista de Dados',
      empresa: "Facebook, parte da Meta, é uma das maiores redes sociais do mundo, focada em conectar pessoas e construir comunidades.",
      responsabilidades: "Análise de comportamento do usuário, desenvolvimento de insights para melhorias de produto, criação de dashboards e relatórios.",
      requisitos: "Graduação em Estatística, Matemática ou campo relacionado; <br> Proficiência em SQL, Python e R; <br> Experiência com ferramentas de visualização de dados;",
      benefícios: "Horário flexível;<br> Trabalho remoto parcial;<br> Subsídio para educação continuada;",
      contato: "Aplique em www.metacareers.com",
      estado: "São Paulo - SP",
      valor: "10.000,00"
    },
    {
      logo: 'https://logo.clearbit.com/ibm.com',
      cargo: 'Arquiteto de Soluções em Nuvem',
      empresa: "IBM é uma empresa multinacional de tecnologia e consultoria, líder em soluções de nuvem híbrida, IA e computação quântica.",
      responsabilidades: "Projetar soluções de nuvem escaláveis, liderar migrações de infraestrutura, consultar clientes sobre estratégias de nuvem.",
      requisitos: "Mestrado em Ciência da Computação ou área relacionada; <br> Certificações em AWS, Azure ou IBM Cloud; <br> 7+ anos de experiência em arquitetura de sistemas;",
      benefícios: "Plano de saúde global;<br> Programas de educação continuada;<br> Oportunidades de trabalho internacional;",
      contato: "Candidate-se em www.ibm.com/careers",
      estado: "São Paulo - SP",
      valor: "22.000,00"
    },
    {
      logo: 'https://logo.clearbit.com/adobe.com',
      cargo: 'Especialista em Marketing Digital',
      empresa: "Adobe é líder mundial em software criativo e soluções de marketing digital.",
      responsabilidades: "Desenvolver estratégias de marketing digital, gerenciar campanhas multi-canal, analisar métricas de desempenho.",
      requisitos: "Bacharelado em Marketing ou campo relacionado; <br> Experiência com Adobe Experience Cloud; <br> Conhecimento avançado em SEO e SEM;",
      benefícios: "Licença sabática a cada 5 anos;<br> Matching de doações para caridade;<br> Descontos em produtos Adobe;",
      contato: "Aplique em www.adobe.com/careers",
      estado: "Rio de Janeiro - RJ",
      valor: "15.000,00"
    },
    {
      logo: 'https://logo.clearbit.com/salesforce.com',
      cargo: 'Consultor de CRM',
      empresa: "Salesforce é a plataforma líder mundial em soluções de CRM e cloud computing para empresas.",
      responsabilidades: "Implementar soluções Salesforce para clientes, customizar a plataforma, treinar usuários finais.",
      requisitos: "Certificação Salesforce Administrator; <br> 3+ anos de experiência com implementações Salesforce; <br> Habilidades sólidas de comunicação e apresentação;",
      benefícios: "7 dias de folga remunerada para voluntariado;<br> Reembolso de despesas com adoção;<br> Programas de bem-estar;",
      contato: "Inscreva-se em www.salesforce.com/company/careers",
      estado: "São Paulo - SP",
      valor: "13.000,00"
    },
    {
      logo: 'https://logo.clearbit.com/intel.com',
      cargo: 'Engenheiro de Hardware',
      empresa: "Intel é líder mundial na fabricação de semicondutores e processadores.",
      responsabilidades: "Projetar e desenvolver novos processadores, otimizar desempenho de chips, colaborar com equipes de software.",
      requisitos: "Mestrado em Engenharia Elétrica ou Ciência da Computação; <br> Experiência em design de circuitos integrados; <br> Conhecimento em arquiteturas de CPU e GPU;",
      benefícios: "Bonificação por patentes;<br> Plano de previdência privada;<br> Programas de saúde e fitness;",
      contato: "Aplique em jobs.intel.com",
      estado: "São Paulo - SP",
      valor: "19.000,00"
    },
    {
        logo: 'https://logo.clearbit.com/itau.com.br',
        cargo: 'Analista Financeiro Sênior',
        empresa: "Itaú Unibanco é o maior banco privado do Brasil, oferecendo uma ampla gama de produtos e serviços financeiros.",
        responsabilidades: "Análise de demonstrações financeiras, elaboração de relatórios gerenciais, suporte à tomada de decisões estratégicas.",
        requisitos: "Graduação em Economia, Contabilidade ou Administração; <br> 5+ anos de experiência em análise financeira; <br> Conhecimento avançado em Excel e sistemas ERP;",
        benefícios: "Participação nos lucros;<br> Plano de saúde e odontológico;<br> Previdência privada;",
        contato: "Cadastre-se em www.itau.com.br/carreira",
        estado: "São Paulo - SP",
        valor: "8.500,00"
      },
      {
        logo: 'https://logo.clearbit.com/bradesco.com.br',
        cargo: 'Assistente Administrativo',
        empresa: "Bradesco é uma das maiores instituições financeiras do Brasil, com forte presença no mercado de varejo e empresarial.",
        responsabilidades: "Suporte às atividades administrativas, organização de documentos, atendimento ao cliente interno e externo.",
        requisitos: "Ensino médio completo; <br> Experiência prévia em funções administrativas; <br> Conhecimento intermediário do pacote Office;",
        benefícios: "Vale-refeição;<br> Seguro de vida;<br> Auxílio-creche;",
        contato: "Envie seu currículo para rh@bradesco.com.br",
        estado: "Rio de Janeiro - RJ",
        valor: "2.800,00"
      },
      {
        logo: 'https://logo.clearbit.com/pwc.com',
        cargo: 'Advogado Tributarista',
        empresa: "PwC é uma das maiores empresas de serviços profissionais do mundo, oferecendo consultoria, auditoria e assessoria jurídica.",
        responsabilidades: "Elaboração de pareceres jurídicos, planejamento tributário, representação em processos administrativos e judiciais.",
        requisitos: "Graduação em Direito; <br> OAB ativa; <br> Especialização em Direito Tributário; <br> 3+ anos de experiência na área tributária;",
        benefícios: "Bônus anual;<br> Plano de carreira estruturado;<br> Programas de treinamento internacionais;",
        contato: "Candidate-se em www.pwc.com.br/carreiras",
        estado: "São Paulo - SP",
        valor: "10.000,00"
      },
      {
        logo: 'https://logo.clearbit.com/santander.com.br',
        cargo: 'Gerente de Controladoria',
        empresa: "Santander Brasil é um dos maiores bancos do país, parte do Grupo Santander, um dos líderes financeiros globais.",
        responsabilidades: "Supervisão da equipe de controladoria, elaboração de demonstrações financeiras, implementação de controles internos.",
        requisitos: "Graduação em Ciências Contábeis; <br> MBA em Controladoria ou Finanças; <br> 7+ anos de experiência em controladoria bancária;",
        benefícios: "Bônus por desempenho;<br> Plano de saúde internacional;<br> Programa de desenvolvimento de liderança;",
        contato: "Aplique pelo site www.santander.com.br/carreiras",
        estado: "São Paulo - SP",
        valor: "15.000,00"
      },
      {
        logo: 'https://logo.clearbit.com/trenchrossi.com',
        cargo: 'Paralegal',
        empresa: "Trench Rossi Watanabe é um dos escritórios de advocacia líderes no Brasil, com forte atuação em diversas áreas do direito empresarial.",
        responsabilidades: "Auxílio na preparação de documentos legais, pesquisa jurídica, organização de processos e arquivos.",
        requisitos: "Cursando Direito (a partir do 3º ano); <br> Inglês avançado; <br> Conhecimento em ferramentas de pesquisa jurídica;",
        benefícios: "Bolsa-auxílio competitiva;<br> Vale-refeição;<br> Curso de idiomas;",
        contato: "Envie seu currículo para vagas@trenchrossi.com",
        estado: "São Paulo - SP",
        valor: "2.500,00"
      },
      {
        logo: 'https://logo.clearbit.com/itau.com.br',
        cargo: 'Analista Financeiro Sênior',
        empresa: "Itaú Unibanco é o maior banco privado do Brasil, oferecendo uma ampla gama de produtos e serviços financeiros.",
        responsabilidades: "Análise de demonstrações financeiras, elaboração de relatórios gerenciais, suporte à tomada de decisões estratégicas.",
        requisitos: "Graduação em Economia, Contabilidade ou Administração; <br> 5+ anos de experiência em análise financeira; <br> Conhecimento avançado em Excel e sistemas ERP;",
        benefícios: "Participação nos lucros;<br> Plano de saúde e odontológico;<br> Previdência privada;",
        contato: "Cadastre-se em www.itau.com.br/carreira",
        estado: "São Paulo - SP",
        valor: "8.500,00"
      },
      {
        logo: 'https://logo.clearbit.com/petrobras.com.br',
        cargo: 'Engenheiro de Petróleo',
        empresa: "Petrobras é uma empresa brasileira de energia, líder no setor de petróleo e gás no país.",
        responsabilidades: "Planejamento e supervisão de operações de perfuração, avaliação de reservatórios, otimização da produção de óleo e gás.",
        requisitos: "Graduação em Engenharia de Petróleo; <br> 5+ anos de experiência em campos offshore; <br> Conhecimento em simulação de reservatórios;",
        benefícios: "Participação nos lucros;<br> Plano de saúde internacional;<br> Auxílio moradia;",
        contato: "Candidate-se em www.petrobras.com.br/carreiras",
        estado: "Rio de Janeiro - RJ",
        valor: "15.000,00"
      },
      {
        logo: 'https://logo.clearbit.com/embraer.com.br',
        cargo: 'Engenheiro Aeronáutico',
        empresa: "Embraer é uma das maiores empresas aeroespaciais do mundo, líder na fabricação de jatos comerciais de até 150 assentos.",
        responsabilidades: "Projeto e desenvolvimento de estruturas de aeronaves, análise de desempenho aerodinâmico, integração de sistemas aviônicos.",
        requisitos: "Mestrado em Engenharia Aeronáutica; <br> Experiência com softwares CAD/CAE; <br> Conhecimento em regulamentações aeronáuticas (ANAC, FAA, EASA);",
        benefícios: "Bônus por projeto;<br> Plano de carreira internacional;<br> Seguro de vida;",
        contato: "Aplique pelo site careers.embraer.com",
        estado: "São Paulo - SP",
        valor: "12.000,00"
      },
      {
        logo: 'https://logo.clearbit.com/vale.com',
        cargo: 'Engenheiro de Minas',
        empresa: "Vale é uma das maiores empresas de mineração do mundo, com operações em diversos países.",
        responsabilidades: "Planejamento e supervisão de operações de extração mineral, otimização de processos de mineração, gestão de projetos de expansão.",
        requisitos: "Graduação em Engenharia de Minas; <br> 7+ anos de experiência em operações de mineração a céu aberto; <br> Conhecimento em softwares de planejamento de lavra;",
        benefícios: "Participação nos lucros;<br> Plano de saúde extensivo à família;<br> Programa de desenvolvimento de carreira;",
        contato: "Inscreva-se em www.vale.com/carreiras",
        estado: "Minas Gerais - MG",
        valor: "14.000,00"
      },
      {
        logo: 'https://logo.clearbit.com/odebrecht.com',
        cargo: 'Engenheiro Civil',
        empresa: "Odebrecht é um conglomerado brasileiro que atua em diversas áreas, incluindo construção e engenharia.",
        responsabilidades: "Gerenciamento de projetos de infraestrutura, supervisão de obras, elaboração de cronogramas e orçamentos.",
        requisitos: "Graduação em Engenharia Civil; <br> 10+ anos de experiência em grandes obras; <br> Certificação PMP desejável;",
        benefícios: "Bônus por performance;<br> Plano de previdência privada;<br> Seguro saúde internacional;",
        contato: "Envie seu currículo para carreiras@odebrecht.com",
        estado: "São Paulo - SP",
        valor: "18.000,00"
      },
      {
        logo: 'https://logo.clearbit.com/microsoft.com',
        cargo: 'Desenvolvedor de Software',
        empresa: "Microsoft é líder global em software, serviços e soluções para ajudar as pessoas e empresas a realizarem seu pleno potencial.",
        responsabilidades: "Desenvolvimento de aplicações Windows, contribuição para projetos open-source, colaboração com equipes internacionais.",
        requisitos: "Graduação em Ciência da Computação ou área relacionada; <br> Experiência com C#, .NET; <br> Conhecimento em desenvolvimento de software em nuvem;",
        benefícios: "Plano de saúde abrangente;<br> Stock options;<br> Ambiente de trabalho flexível;",
        contato: "Aplique através do nosso portal de carreiras: careers.microsoft.com",
        estado: "São Paulo - SP",
        valor: "12.000,00"
      },
      
      // Rio de Janeiro - RJ
      {
        logo: 'https://logo.clearbit.com/petrobras.com.br',
        cargo: 'Engenheiro de Petróleo',
        empresa: "Petrobras é uma empresa de energia brasileira com presença global no setor de óleo e gás.",
        responsabilidades: "Análise de reservatórios, planejamento de produção, supervisão de operações offshore.",
        requisitos: "Graduação em Engenharia de Petróleo; <br> Experiência em operações offshore; <br> Conhecimento em simulação de reservatórios;",
        benefícios: "Plano de previdência privada;<br> Participação nos lucros;<br> Plano de carreira estruturado;",
        contato: "Envie seu currículo para: careers@petrobras.com.br",
        estado: "Rio de Janeiro - RJ",
        valor: "15.000,00"
      },
      
      // Minas Gerais - MG
      {
        logo: 'https://logo.clearbit.com/vale.com',
        cargo: 'Geólogo',
        empresa: "Vale é uma das maiores empresas de mineração do mundo.",
        responsabilidades: "Mapeamento geológico, análise de amostras, avaliação de potencial mineral.",
        requisitos: "Graduação em Geologia; <br> Experiência em exploração mineral; <br> Conhecimento em softwares de modelagem geológica;",
        benefícios: "Seguro de vida;<br> Auxílio educação;<br> Programa de desenvolvimento profissional;",
        contato: "Cadastre-se no nosso banco de talentos: vagas.vale.com",
        estado: "Minas Gerais - MG",
        valor: "10.000,00"
      },
      
      // Rio Grande do Sul - RS
      {
        logo: 'https://logo.clearbit.com/tramontina.com',
        cargo: 'Designer de Produto',
        empresa: "Tramontina é uma empresa brasileira líder em utensílios domésticos e ferramentas.",
        responsabilidades: "Criação de novos produtos, desenvolvimento de protótipos, análise de tendências de mercado.",
        requisitos: "Graduação em Design Industrial; <br> Experiência com softwares de modelagem 3D; <br> Conhecimento em processos de fabricação;",
        benefícios: "Desconto em produtos da empresa;<br> Ginástica laboral;<br> Refeitório no local;",
        contato: "Envie seu portfólio para: design@tramontina.net",
        estado: "Rio Grande do Sul - RS",
        valor: "7.500,00"
      },
      
      // Paraná - PR
      {
        logo: 'https://logo.clearbit.com/renault.com',
        cargo: 'Engenheiro Automotivo',
        empresa: "Renault é uma fabricante de automóveis francesa com forte presença no Brasil.",
        responsabilidades: "Desenvolvimento de novos modelos, testes de desempenho, otimização de processos de produção.",
        requisitos: "Graduação em Engenharia Mecânica ou Automotiva; <br> Experiência em indústria automotiva; <br> Conhecimento em CAD e simulação;",
        benefícios: "Plano de saúde internacional;<br> Bônus anual;<br> Oportunidades de trabalho no exterior;",
        contato: "Candidate-se em: careers.renault.com.br",
        estado: "Paraná - PR",
        valor: "11.000,00"
      },
    
      // Bahia - BA
      {
        logo: 'https://logo.clearbit.com/natura.net',
        cargo: 'Químico de Pesquisa e Desenvolvimento',
        empresa: "Natura é uma empresa brasileira de cosméticos e produtos de beleza.",
        responsabilidades: "Desenvolvimento de novas fórmulas, testes de produtos, pesquisa de ingredientes naturais.",
        requisitos: "Graduação em Química; <br> Experiência em cosmetologia; <br> Conhecimento em fitoquímica;",
        benefícios: "Descontos em produtos;<br> Programa de bem-estar;<br> Horário flexível;",
        contato: "Envie seu currículo para: talentos@natura.net",
        estado: "Bahia - BA",
        valor: "8.500,00"
      },
    
      // Pernambuco - PE
      {
        logo: 'https://logo.clearbit.com/portodorecife.pe.gov.br',
        cargo: 'Engenheiro Portuário',
        empresa: "Porto do Recife S.A. é uma empresa pública que administra o Porto do Recife.",
        responsabilidades: "Planejamento de operações portuárias, gestão de projetos de infraestrutura, análise de eficiência logística.",
        requisitos: "Graduação em Engenharia Civil ou Portuária; <br> Experiência em gestão portuária; <br> Conhecimento em legislação marítima;",
        benefícios: "Estabilidade de empresa pública;<br> Plano de carreira;<br> Adicional de periculosidade;",
        contato: "Inscreva-se no próximo concurso público: www.portodorecife.pe.gov.br/concursos",
        estado: "Pernambuco - PE",
        valor: "9.000,00"
      },
    
      // Amazonas - AM
      {
        logo: 'https://logo.clearbit.com/lg.com',
        cargo: 'Engenheiro de Produção',
        empresa: "LG Electronics é uma empresa global de eletrônicos com fábrica em Manaus.",
        responsabilidades: "Otimização de processos produtivos, controle de qualidade, implementação de tecnologias de automação.",
        requisitos: "Graduação em Engenharia de Produção; <br> Experiência em indústria eletrônica; <br> Conhecimento em Lean Manufacturing;",
        benefícios: "Plano de saúde extensivo à família;<br> Programa de trainee internacional;<br> Auxílio moradia;",
        contato: "Candidate-se em: www.lg.com/br/carreiras",
        estado: "Amazonas - AM",
        valor: "10.500,00"
      },
    
      // Distrito Federal - DF
      {
        logo: 'https://logo.clearbit.com/bb.com.br',
        cargo: 'Analista de Políticas Públicas',
        empresa: "Banco do Brasil é uma das maiores instituições financeiras do país.",
        responsabilidades: "Análise de políticas econômicas, elaboração de relatórios para o governo, assessoria em projetos de desenvolvimento.",
        requisitos: "Graduação em Economia, Administração Pública ou áreas afins; <br> Experiência em análise de dados; <br> Conhecimento em políticas públicas;",
        benefícios: "Participação nos lucros;<br> Plano de previdência complementar;<br> Oportunidades de pós-graduação;",
        contato: "Acompanhe nossos concursos: www.bb.com.br/concursos",
        estado: "Distrito Federal - DF",
        valor: "11.500,00"
      },
    
      // Ceará - CE
      {
        logo: 'https://logo.clearbit.com/hapvida.com.br',
        cargo: 'Médico Cardiologista',
        empresa: "Hapvida é uma das maiores operadoras de planos de saúde do Brasil.",
        responsabilidades: "Atendimento clínico, realização de exames cardíacos, acompanhamento de pacientes.",
        requisitos: "Graduação em Medicina com especialização em Cardiologia; <br> Registro no CRM; <br> Experiência em atendimento hospitalar;",
        benefícios: "Plano de saúde e odontológico;<br> Jornada flexível;<br> Oportunidades de pesquisa clínica;",
        contato: "Envie seu currículo para: carreiras.medicas@hapvida.com.br",
        estado: "Ceará - CE",
        valor: "16.000,00"
      }
  ];








let listaRecuperada = JSON.parse(sessionStorage.getItem('minhaLista'));
console.log(listaRecuperada)


if(listaRecuperada == null){

  sessionStorage.setItem('minhaLista', JSON.stringify(dados));
  listaRecuperada = JSON.parse(sessionStorage.getItem('minhaLista'));
}

 console.log(listaRecuperada)




