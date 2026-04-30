export const portfolioData: any = {
  pt: {
    nav: {
      about: "Sobre Mim",
      skills: "Habilidades",
      experience: "Experiência",
      education: "Formação"
    },
    personalInfo: {
      name: "João Paulo Silva Sousa",
      title: "Desenvolvedor Fullstack .Net",
      email: "jpsilva.sousa97@outlook.com",
      phone: "+55 (85) 9 8811-3611",
      location: "Fortaleza, CE, Brasil",
      linkedin: "https://linkedin.com/in/jpaulosilvadev",
      github: "https://github.com/JPauloSilvaDev",
      profile: "Desenvolvedor Fullstack com foco em excelência técnica e otimização de performance. Experiência comprovada na redução do tempo de resposta de APIs e na automação de deploys em Kubernetes. Proficiente em Blazor e Angular no front-end, e em Entity Framework/Dapper para persistência eficiente de dados. Reconhecido pela capacidade de resolver problemas complexos com agilidade e qualidade.",
      greeting: "Olá, Eu sou",
      resumeUrl: "assets/cv-joao-paulo-pt.pdf",
      resumeLabel: "Baixar Currículo"
    },
    skills: {
      title: "Habilidades & Tecnologias",
      softTitle: "Soft Skills",
      soft: [
        "Resolução de Problemas Complexos",
        "Comunicação Técnica e Interpessoal",
        "Mentoria e Colaboração",
        "Aprendizado Contínuo e Proatividade"
      ],
      hard: [
        { category: "Linguagens & Frameworks", tech: ["C#", ".NET 6+", "ASP.NET Core", "Entity Framework", "Dapper"] },
        { category: "Front-end", tech: ["Blazor Server", "Blazor WebAssembly", "Angular", "JavaScript", "jQuery", "Razor Pages", "React"] },
        { category: "Arquitetura & Nuvem", tech: ["Microsserviços", "API REST", "Docker", "Kubernetes", "Azure DevOps"] },
        { category: "Banco de Dados", tech: ["SQL Server", "T-SQL", "Procedures", "MySQL", "MongoDB"] },
        { category: "Testes & Observabilidade", tech: ["xUnit", "Selenium", "Elastic Search"] }
      ]
    },
    experience: {
      title: "Histórico Profissional",
      items: [
        {
          period: "08/2023 - 03/2024",
          company: "Pratica Software/IT Solutions",
          role: "Analista de Desenvolvimento Full Stack - Pleno",
          description: "O sistema enfrentava desafios de escalabilidade e alta complexidade no código de negócio, dificultando a manutenção e a execução de tarefas pesadas em tempo real. Desenvolvi interfaces dinâmicas com Blazor Server, implementei Hangfire com MediatR, realizei Code Reviews, apliquei Strategy Pattern e reestruturei a camada de dados com Repository Pattern.",
          results: "Redução drástica no tempo de resposta das APIs, interfaces responsivas, código 100% mais organizado seguindo padrões SOLID e maior facilidade na migração de sistemas legados para .NET 6+.",
          situationLabel: "Situação & Tarefa: ",
          resultLabel: "Resultado: "
        },
        {
          period: "03/2024 - Presente",
          company: "Fótbanks?",
          role: "Analista de Desenvolvimento - Junior II",
          description: "A empresa operava em um ecossistema complexo de microsserviços, aplicações MVC e APIs REST que exigiam alta disponibilidade. Desenvolvi funcionalidades com Microsserviços e APIs REST, automatizei CI/CD com Azure DevOps, gerenciei dados com SQL Server/MongoDB, e implementei observabilidade com Elastic Search.",
          results: "Estabelecimento de um fluxo CI/CD mais seguro, redução de erros em produção devido à validação rigorosa e aumento da visibilidade operacional.",
          situationLabel: "Situação & Tarefa: ",
          resultLabel: "Resultado: "
        },
        {
          period: "07/2022 - 03/2023",
          company: "GS Negócios",
          role: "Desenvolvedor Full Stack - Junior",
          description: "Desenvolvimento de aplicações híbridas otimizando consumo de dados e versionamento. Construção de apps desktop (Windows Forms, WPF) e web (HTML, CSS, Bootstrap, JavaScript, Angular). Persistência com Entity Framework e Dapper.",
          results: "Melhora na eficiência de sistemas desktop estáveis e interfaces web ágeis, com arquitetura otimizada reduzindo o tempo de resposta das consultas.",
          situationLabel: "Situação & Tarefa: ",
          resultLabel: "Resultado: "
        }
      ]
    },
    education: {
      title: "Formação & Idiomas",
      edTitle: "Educação",
      langTitle: "Idiomas",
      certTitle: "Certificações",
      items: [
        {
          period: "2022 - Presente",
          course: "Análise e Desenvolvimento de Sistemas",
          institution: "Faculdade Estácio de Sá"
        }
      ],
      languages: [
        { language: "Inglês", proficiency: "C2 - Fluente" },
        { language: "Espanhol", proficiency: "B1 - Intermediário" }
      ],
      certifications: [
        "C# Programação Orientada a Objetos",
        "Arquitetura de microsserviços em Asp.net, .Net 6 e C#"
      ]
    },
    footer: "João Paulo Silva Sousa. Construído com Angular."
  },
  en: {
    nav: {
      about: "About Me",
      skills: "Skills",
      experience: "Experience",
      education: "Education"
    },
    personalInfo: {
      name: "João Paulo Silva Sousa",
      title: "Fullstack .Net Developer",
      email: "jpsilva.sousa97@outlook.com",
      phone: "+55 (85) 9 8811-3611",
      location: "Fortaleza, CE, Brazil",
      linkedin: "https://linkedin.com/in/jpaulosilvadev",
      github: "https://github.com/JPauloSilvaDev",
      profile: "Fullstack Developer with a focus on technical excellence and performance optimization. Proven experience in reducing API response times and automating deployments in Kubernetes. Proficient in Blazor and Angular on the front-end, and Entity Framework/Dapper for efficient data persistence. Recognized for the ability to solve complex problems with agility and quality.",
      greeting: "Hello, I'm",
      resumeUrl: "assets/cv-joao-paulo-en.pdf",
      resumeLabel: "Download Resume"
    },
    skills: {
      title: "Skills & Technologies",
      softTitle: "Soft Skills",
      soft: [
        "Complex Problem Solving",
        "Technical & Interpersonal Communication",
        "Mentoring & Collaboration",
        "Continuous Learning & Proactivity"
      ],
      hard: [
        { category: "Languages & Frameworks", tech: ["C#", ".NET 6+", "ASP.NET Core", "Entity Framework", "Dapper"] },
        { category: "Front-end", tech: ["Blazor Server", "Blazor WebAssembly", "Angular", "JavaScript", "jQuery", "Razor Pages", "React"] },
        { category: "Architecture & Cloud", tech: ["Microservices", "REST APIs", "Docker", "Kubernetes", "Azure DevOps"] },
        { category: "Databases", tech: ["SQL Server", "T-SQL", "Procedures", "MySQL", "MongoDB"] },
        { category: "Testing & Observability", tech: ["xUnit", "Selenium", "Elastic Search"] }
      ]
    },
    experience: {
      title: "Professional History",
      items: [
        {
          period: "08/2023 - 03/2024",
          company: "Pratica Software/IT Solutions",
          role: "Full Stack Developer Analyst - Mid-level",
          description: "The system faced scalability challenges and high business logic complexity, hindering maintenance and real-time execution of heavy tasks. Developed dynamic interfaces with Blazor Server, implemented Hangfire with MediatR, conducted Code Reviews, applied Strategy Pattern, and restructured the data layer using Repository Pattern.",
          results: "Drastic reduction in API response times, responsive interfaces, 100% more organized code adhering to SOLID principles, and easier migration of legacy systems to .NET 6+.",
          situationLabel: "Situation & Task: ",
          resultLabel: "Result: "
        },
        {
          period: "03/2024 - Present",
          company: "Fótbanks?",
          role: "Development Analyst - Junior II",
          description: "The company operated in a complex ecosystem of microservices, MVC applications, and REST APIs requiring high availability. Developed features with Microservices and REST APIs, automated CI/CD with Azure DevOps, managed data with SQL Server/MongoDB, and implemented observability with Elastic Search.",
          results: "Establishment of a more secure CI/CD pipeline, reduction of production errors due to rigorous validation, and increased operational visibility.",
          situationLabel: "Situation & Task: ",
          resultLabel: "Result: "
        },
        {
          period: "07/2022 - 03/2023",
          company: "GS Negócios",
          role: "Full Stack Developer - Junior",
          description: "Developed hybrid applications optimizing data consumption and versioning. Built desktop apps (Windows Forms, WPF) and web apps (HTML, CSS, Bootstrap, JavaScript, Angular). Data persistence using Entity Framework and Dapper.",
          results: "Improved efficiency of stable desktop systems and agile web interfaces, with an optimized architecture reducing query response times.",
          situationLabel: "Situation & Task: ",
          resultLabel: "Result: "
        }
      ]
    },
    education: {
      title: "Education & Languages",
      edTitle: "Education",
      langTitle: "Languages",
      certTitle: "Certifications",
      items: [
        {
          period: "2022 - Present",
          course: "Systems Analysis and Development",
          institution: "Estácio de Sá University"
        }
      ],
      languages: [
        { language: "English", proficiency: "C2 - Fluent" },
        { language: "Spanish", proficiency: "B1 - Intermediate" }
      ],
      certifications: [
        "C# Object-Oriented Programming",
        "Microservices Architecture in Asp.net, .Net 6 and C#"
      ]
    },
    footer: "João Paulo Silva Sousa. Built with Angular."
  }
};
