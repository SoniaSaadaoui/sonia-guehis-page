import React from "react";
import { Mail, MapPin, GraduationCap, BookOpen, Microscope, User, ExternalLink } from "lucide-react";

const courses = [
  {
    title: "Data Analytics",
    audience: "M2 MIAGE, Université Paris Nanterre — formation initiale et apprentissage",
    description: "Étude des architectures Big Data, des traitements batch et temps réel, et des outils associés aux lacs de données et aux plateformes analytiques."
  },
  {
    title: "Traitement de données massives",
    audience: "M2 MIAGE, Université Paris Nanterre",
    description: "Présentation des architectures distribuées, des problématiques de passage à l’échelle, de cohérence, de tolérance aux pannes et des modèles SQL, NoSQL et NewSQL."
  },
  {
    title: "Projet SI et données",
    audience: "M2 MIAGE, Université Paris Nanterre — formation initiale et apprentissage",
    description: "Encadrement de projets appliqués autour de la conception, l’intégration et la valorisation de systèmes d’information orientés données."
  },
  {
    title: "Solutions techniques pour le Big Data et l’informatique décisionnelle",
    audience: "M2 D3S, Université Paris Nanterre",
    description: "Introduction aux techniques de recherche d’information, d’indexation, de modélisation OLAP et de requêtage avancé pour l’analyse de données."
  },
  {
    title: "Bases de données avancées et NoSQL",
    audience: "M2 IASD, Université Paris Dauphine-PSL",
    description: "Approfondissement des modèles de données avancés et des systèmes NoSQL pour la gestion de données hétérogènes et distribuées."
  },
  {
    title: "Business Intelligence",
    audience: "M1 MIAGE, Université Paris Nanterre",
    description: "Étude de l’informatique décisionnelle, des entrepôts de données, des processus ETL, de la modélisation multidimensionnelle et des tableaux de bord."
  },
  {
    title: "Méthodologie",
    audience: "M1 et M2 MIAGE, Université Paris Nanterre",
    description: "Accompagnement méthodologique des étudiants dans la structuration, la rédaction et la présentation de travaux universitaires et professionnels."
  },
  {
    title: "Langages et sécurité des bases de données relationnelles",
    audience: "L3 MIAGE, Université Paris Nanterre — apprentissage",
    description: "Introduction aux langages relationnels, à SQL, à la normalisation, aux vues et aux mécanismes de contrôle d’accès."
  },
  {
    title: "Programmation en PL/SQL",
    audience: "L3 MIAGE, Université Paris Nanterre — apprentissage",
    description: "Développement de traitements procéduraux dans un SGBD à travers procédures stockées, fonctions, packages, exceptions, curseurs et déclencheurs."
  },
  {
    title: "Projet Web",
    audience: "L3 MIAGE, Université Paris Nanterre",
    description: "Mise en pratique des principes de conception et de développement d’applications web dans un cadre projet."
  }
];

const publicationSections = [
  {
    title: "Revues internationales avec comité de lecture",
    items: [
      {
        authors: "H. Salman, J.-F. Pradat-Peyre, S. Guehis, N. Charara, C. Zaki, A. Nasser",
        title: "FedAK: A Semi Supervised One-shot Framework for Heterogeneous Federated Learning via Feature-Level Attention-Based Knowledge Distillation",
        venue: "Scientific Reports, Springer. Mai 2026"
      },
      {
        authors: "H. Salman, J.-F. Pradat-Peyre, S. Guehis, N. Charara, C. Zaki, A. Nasser",
        title: "A New communication efficient federated online distillation for Non-IID Data: Application to fetal brain ultrasound plane classification",
        venue: "Neuroscience Informatics, Mars 2026."
      },
      {
        authors: "H. Salman, C. Zaki, N. Charara, S. Guehis, J.-F. Pradat-Peyre, A. Nasser",
        title: "Knowledge distillation in federated learning: a comprehensive survey",
        venue: "Discover Computing, décembre 2025."
      },
      /*{
        authors: "H. Salman, C. Zaki, N. Charara, S. Guehis, J.-F. Pradat-Peyre, A. Nasser",
        title: "Steganographic Federated Distillation: DT-CWT-Based Knowledge Transfer for Covert Collaborative Learning",
        venue: "Under review, IEEE Transactions on Information Forensics and Security."
      },
      {
        authors: "L. E. Alvarado Pintado, Y. Cardinale, S. Guehis, M. Rukoz",
        title: "Optimization of Conversational Business Intelligence Models Using Parameter-Efficient Fine-Tuning Techniques: A Systematic Review",
        venue: "Under review, Discover Computing."
      }*/
    ]
  },
  {
    title: "Chapitre de livre",
    items: [
      {
        authors: "J. Fernandes, L. Oliveira, V. V. Graciano Neto, R. P. dos Santos, R. Angarita, S. Guehis, Y. Cardinale, M. Kirsch-Pinheiro, C. Souveyet, P. Roose, L. A. Steffenel",
        title: "PIS: Interoperability and Decision-Making Process — A Review",
        venue: "In The Evolution of Pervasive Information Systems, Springer, 2023."
      }
    ]
  },
  {
    title: "Conférences internationales avec comité de lecture",
    items: [
      {
        authors: "Y. Cardinale, S. Guehis, M. Rukoz",
        title: "Big Data Analytic Approaches Classification",
        venue: "Proceedings of the 12th International Conference on Software Technologies, ICSOFT, 2017."
      },
      {
        authors: "Y. Cardinale, S. Guehis, M. Rukoz",
        title: "Classifying big data analytic approaches: A generic architecture",
        venue: "Proceedings of Software Technologies, ICSOFT, 2017."
      },
      {
        authors: "S. Guehis, V. Goasdoué-Thion, P. Rigaux",
        title: "Speeding-Up Data-driven Applications with Program Summaries",
        venue: "ACM International Database Engineering and Applications Symposium, IDEAS, 2009."
      }
      ,
      {
        authors: "S. Guehis, D. Gross-Amblard, P. Rigaux",
        title: "Publish By Example",
        venue: "IEEE International Conference on Web Engineering, ICWE, 2008."
      },
      {
        authors: "S. Guehis, P. Rigaux, E. Waller",
        title: "Data-driven Publication of Relational Databases",
        venue: "IEEE International Database Engineering and Applications Symposium, IDEAS, 2006."
      }
    ]
  },
  {
    title: "Workshops internationaux avec comité de lecture",
    items: [
      {
        authors: "W. Aboucaya, S. Guehis, R. Angarita",
        title: "Building Online Public Consultation Knowledge Graphs",
        venue: "Text2KG 2023, International Workshop on Knowledge Graph Generation from Text, co-located with ESWC, 2023."
      },
      {
        authors: "S. Guehis",
        title: "A Framework for Understanding Web Publishing Applications",
        venue: "CAiSE Workshop WISM, 2009."
      }
    ]
  },
  {
    title: "Revue nationale",
    items: [
      {
        authors: "S. Guehis, D. Gross-Amblard, P. Rigaux",
        title: "Un modèle de production interactive de programmes de publication",
        venue: "Technique et Science Informatiques, TSI, 2008."
      }
    ]
  },
  {
    title: "Conférences nationales avec comité de lecture",
    items: [
      {
        authors: "S. Guehis, V. Goasdoué-Thion, P. Rigaux",
        title: "Optimisation des applications orientées données",
        venue: "Bases de Données Avancées, BDA, 2009."
      },
      {
        authors: "S. Guehis, D. Gross-Amblard, P. Rigaux",
        title: "Publication de données par l’exemple",
        venue: "Bases de Données Avancées, BDA, 2007."
      },
      {
        authors: "S. Guehis, P. Rigaux, E. Waller",
        title: "Data-Driven Publication of Relational Databases",
        venue: "Bases de Données Avancées, BDA, 2006."
      }
    ]
  },
  {
    title: "Démonstrations",
    items: [
      {
        authors: "S. Guehis",
        title: "Une interface de production par l’exemple de programmes de publication",
        venue: "Bases de Données Avancées, BDA, 2007."
      },
      {
        authors: "S. Guehis, P. Rigaux",
        title: "Le langage de publication DocQL",
        venue: "Bases de Données Avancées, BDA, 2006."
      }
    ]
  },
  {
    title: "Thèse de doctorat et mémoires",
    items: [
      {
        authors: "S. Guehis",
        title: "Modélisation, production et optimisation des programmes SQL",
        venue: "Thèse de doctorat, Université Paris-Dauphine, 2009."
      },
      {
        authors: "S. Guehis",
        title: "Traçabilité des données personnelles",
        venue: "Mémoire de DEA, 2005."
      }
    ]
  }
];

const thesisSupervisees = [
  {
    name: "Hassan Salman",
    role: "Doctorant",
    topic: "Improvement of Federated Learning Models for E-health / Amélioration des modèles d’apprentissage fédéré pour la cybersanté"
  },
  {
    name: "Luis Egberto Alvarado Pintado",
    role: "Doctorant",
    topic: "Optimizing Conversational Business Intelligence Models: Toward Real-Time Personalized and Adaptive Interaction Using Artificial Intelligence"
  },
  {
    name: "Khodr Sabra",
    role: "Doctorant",
    topic: "Privacy-Preserving Multimodal AI for Smart Cities: Integrating Federated Learning, Multilingual NLP, and GIS"
  }
];

const internshipSupervisees = [
  {
    name: "Baptiste Geisenberger",
    role: "Stagiaire de recherche M1",
    topic: "Bliss: Client Selection Framework for Cross-Device Federated Learning"
  },
  {
    name: "Achraf Tasfaout",
    role: "Stagiaire M2 IASD",
    topic: "Opening the Black Box: Efficient Fine-Tuning of Language Models for Specialized Text Generation"
  },
  {
    name: "Hector Corblet",
    role: "Stagiaire M2 IASD",
    topic: "Estimation et validation d’empreintes radar de grêle pour l’évaluation des sinistres"
  }
];
const timeline = [
  "Depuis 2010 — Maîtresse de conférences, Université Paris Nanterre",
  "Depuis 2010 — Chercheuse associée, LAMSADE, Université Paris Dauphine-PSL",
  "2009 — Doctorat en informatique, LAMSADE, Université Paris-Dauphine",
  "2009–2010 — ATER à temps plein, Université Paris-Dauphine",
  "2008–2009 — ATER à mi-temps, Université Paris-Dauphine",
  "2005–2008 — Allocataire de recherche et monitrice, LAMSADE, Université Paris-Dauphine",
  "2005 — DEA Systèmes intelligents, Université Paris-Dauphine",
  "2002–2004 — Ingénieure informatique, Agence Nationale des Fréquences, Ministère des Télécommunications",
  "2002 — Diplôme d’ingénieur en informatique, École Nationale des Sciences de l’Informatique",
  "1999 — Classes préparatoires Math sup / Math spé, IPEIT"
];

function Section({ id, icon: Icon, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 border-t border-slate-200" >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 rounded-2xl bg-slate-900 text-white shadow-sm"><Icon size={22} /></div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950">{title}</h2>
        </div>
        {children}
      </div>
    </section >
  );
}

export default function PersonalAcademicPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <nav className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <a href="#home" className="font-semibold text-slate-950">Sonia Guehis</a>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <a href="#recherche" className="hover:text-slate-950">Recherche</a>
            <a href="#enseignement" className="hover:text-slate-950">Enseignements</a>
            <a href="#bio" className="hover:text-slate-950">Bio</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
          </div>
        </div>
      </nav>

      <header id="home" className="relative overflow-hidden bg-white">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16 grid md:grid-cols-[1.4fr_0.8fr] gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.28em] text-sm text-slate-500 mb-5">Informatique · Données · Intelligence artificielle</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-950 mb-2">Sonia Guehis</h1>
            <p className="text-xl md:text-2xl leading-relaxed text-slate-700 max-w-3xl">
              Maîtresse de conférences en informatique à l’Université Paris Nanterre et chercheuse associée au LAMSADE, Université Paris Dauphine-PSL.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700">Responsable du Master MIAGE, voie mixte</span>
              <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700">Coordinatrice des relations internationales Math-Info</span>
              <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700">Membre élue du Conseil de l’UFR SEGMI</span>
            </div>
          </div>
          <div className="rounded-[2rem] bg-slate-950 text-white p-8 shadow-xl">
            <img
              src="/sonia-guehis.jpg"
              alt="Sonia Guehis"
              className="w-[75%] mx-auto max-h-[320px] object-contain rounded-[1.5rem] mb-5 shadow-lg bg-slate-800"
            />
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400 mb-4">Axes principaux</p>
            <ul className="space-y-4 text-lg">
              <li>Gestion et exploitation de données hétérogènes</li>
              <li>Apprentissage fédéré et données non-IID</li>
              <li>Business Intelligence conversationnelle</li>
              <li>Graphes de connaissances</li>
            </ul>
          </div>
        </div>
      </header>



      <Section id="recherche" icon={Microscope} title="Recherche">
        <div className="space-y-8">
          <div className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm h-fit">
            <h3 className="text-2xl font-semibold text-slate-950 mb-4">Activités scientifiques</h3>
            <p className="leading-relaxed mb-4">
              Mes recherches portent sur la transformation de données hétérogènes, distribuées et peu structurées en connaissances exploitables pour l’aide à la décision. Elles couvrent les graphes de connaissances, les architectures d’analyse de données massives, l’apprentissage fédéré sur données non-IID, la distillation de connaissances et la Business Intelligence conversationnelle.
            </p>
            <a className="inline-flex items-center gap-2 text-slate-950 font-medium" href="https://orcid.org/0009-0003-7991-9537" target="_blank" rel="noreferrer">
              ORCID <ExternalLink size={16} />
            </a>
          </div>
          <div className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950 mb-4">Publications</h3>
            <div className="space-y-7">
              {publicationSections.map((section) => (
                <div key={section.title}>
                  <h4 className="text-lg font-semibold text-slate-950 mb-3 border-b border-slate-200 pb-2">
                    {section.title}
                  </h4>
                  <ol className="space-y-3 text-sm leading-relaxed list-decimal list-inside">
                    {section.items.map((pub) => (
                      <li key={`${section.title}-${pub.title}`}>
                        <span>{pub.authors}, </span>
                        <strong className="font-semibold text-slate-950">{pub.title}</strong>
                        <span>, {pub.venue}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-3xl bg-white border border-slate-200 p-7 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-950 mb-6">
            Encadrement doctoral et scientifique
          </h3>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-slate-950 mb-4 border-b border-slate-200 pb-2">
              Encadrement de thèses
            </h4>

            <div className="grid md:grid-cols-2 gap-5">
              {thesisSupervisees.map((person) => (
                <div key={person.name} className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                  <p className="font-semibold text-slate-950">{person.name}</p>
                  <p className="text-sm text-slate-500 mb-2">{person.role}</p>
                  <p className="text-sm leading-relaxed">{person.topic}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-slate-950 mb-4 border-b border-slate-200 pb-2">
              Encadrement de stages
            </h4>

            <div className="grid md:grid-cols-2 gap-5">
              {internshipSupervisees.map((person) => (
                <div key={person.name} className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                  <p className="font-semibold text-slate-950">{person.name}</p>
                  <p className="text-sm text-slate-500 mb-2">{person.role}</p>
                  <p className="text-sm leading-relaxed">{person.topic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      <Section id="enseignement" icon={BookOpen} title="Enseignements">
        <div className="grid md:grid-cols-2 gap-5">
          {courses.map((course) => (
            <article key={course.title} className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950 mb-2">{course.title}</h3>
              <p className="text-sm font-medium text-slate-500 mb-3">{course.audience}</p>
              <p className="leading-relaxed">{course.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section id="bio" icon={User} title="Bio">
        <div className="grid md:grid-cols-2 gap-5">
          {timeline.map((item) => (
            <div key={item} className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm flex gap-4">
              <GraduationCap className="shrink-0 mt-1 text-slate-500" size={20} />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" icon={Mail} title="Contact">
        <div className="grid md:grid-cols-2 gap-6">
          <article className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950 mb-4">Université Paris Nanterre</h3>
            <p className="flex items-start gap-3 mb-3"><Mail size={18} className="mt-1" /> <span>sonia.guehis@parisnanterre.fr</span></p>
            <p className="flex items-start gap-3"><MapPin size={18} className="mt-1" /> <span>Université Paris Nanterre<br />200 avenue de la République<br />92001 Nanterre Cedex, France</span></p>
          </article>
          <article className="rounded-3xl bg-white border border-slate-200 p-7 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-950 mb-4">Université Paris Dauphine-PSL · LAMSADE</h3>
            <p className="flex items-start gap-3 mb-3"><Mail size={18} className="mt-1" /> <span>sonia.guehis@dauphine.fr</span></p>
            <p className="flex items-start gap-3"><MapPin size={18} className="mt-1" /> <span>LAMSADE, Université Paris Dauphine-PSL<br />Place du Maréchal de Lattre de Tassigny<br />75775 Paris Cedex 16, France</span></p>
          </article>
        </div>
      </Section>
    </main>
  );
}
