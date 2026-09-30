const definitions = {
  sections: [
    {
      title: "Utilisateur administrateur ou administrateur du conseil",
      description:
        "La personne ou les personnes désignées par le client pour gérer son compte, disposant de fonctionnalités d'administration spécifiques, comme la possibilité de créer des utilisateurs, définir leurs droits et modifier les paramètres."
    },
    {
      title: "Contrat",
      description:
        "La relation contractuelle entre le client et Dafira pour la fourniture des services, incluant les présentes conditions générales, l'accord de traitement des données (DPA), la politique de confidentialité et de cookies, ainsi que toutes les politiques additionnelles qui y sont incorporées par référence, et leurs éventuelles variations ou modifications."
    },
    {
      title: "Jour ouvrable",
      description:
        "Tout jour autre que les samedis, dimanches et jours fériés en Belgique."
    },
    {
      title: "Client",
      description:
        "Toute entité juridique qui ouvre un compte pour recevoir un service de Dafira."
    },
    {
      title: "Données client",
      description:
        "Tout contenu, données et informations fournis par le client dans le cadre de l'utilisation des services."
    },
    {
      title: "Abonnement client",
      description:
        "Le forfait sélectionné par le client qui comprend tout ou partie des services."
    },
    {
      title: "Période initiale",
      description:
        "La première période du contrat telle que choisie par le client lors de la souscription aux services."
    },
    {
      title: "Droits de propriété intellectuelle",
      description:
        "Tous les droits d'auteur, brevets, droits sur les bases de données, informations confidentielles, droits de marque, droits sur les dessins et modèles et/ou tous autres droits de propriété intellectuelle (qu'ils soient enregistrés ou non), y compris le savoir-faire technique et/ou commercial, les méthodes et concepts, brevetables ou non; les demandes d'enregistrement et le droit de demander l'enregistrement de ces droits; et tous les autres droits de propriété intellectuelle et formes de protection équivalentes ou similaires existant dans le monde."
    },
    {
      title: "Localisation",
      description:
        "L'adresse physique liée au compte ouvert par le client, où celui-ci est autorisé à utiliser les services."
    },
    {
      title: "Services",
      description:
        "Toutes les applications web et mobiles fournies par Dafira sous forme de logiciel en tant que service (SaaS) disponibles en ligne via le site, ainsi que les serveurs et logiciels sous-jacents utilisés pour fournir ces applications. Une description détaillée des services est disponible sur /fr/services."
    },
    {
      title: "Dafira",
      description:
        "Dafira, dont le siège est situé Rue de l'Hôpital 31, B‐1000 Bruxelles, Belgique."
    },
    {
      title: "Période d'essai",
      description: "Telle que définie à l'article 3.3.1."
    },
    {
      title: "Durée",
      description:
        "Durée totale du contrat entre les parties, incluant, le cas échéant, les renouvellements successifs."
    },
    {
      title: "Utilisateur ou utilisateur du conseil",
      description:
        "Toute personne physique autorisée à utiliser les services pour le compte du client."
    }
  ]
};

const bindingAgreement = {
  sections: [
      {
          title: "2.1. Acceptation des conditions",
          description: `    
      Dafira fournit ses services sous réserve de l'acceptation du contrat par le client. En ouvrant un compte auprès de Dafira via le site, le client reconnaît avoir lu, compris et accepté d'être lié par ce contrat. Si une personne signe ce contrat au nom d'une société ou d'une entité juridique, elle garantit qu'elle a le pouvoir d'engager la société ou toute autre entité juridique ou affiliée qu'elle représente. Si le client s'inscrit pour une période d'essai, ce contrat régira également la période d'essai.
    `,
      },
      {
          title: "2.2. Modifications des conditions",
          description: `
      Dafira se réserve le droit de réviser ou de mettre à jour unilatéralement le contrat de temps à autre à sa seule discrétion. Les révisions ou mises à jour mineures seront simplement publiées sur le site web de Dafira. Les modifications significatives feront l'objet d'une notification par Dafira au client par avis sur le site web, email ou toute autre forme de communication. Les modifications s'appliqueront quatorze (14) jours ouvrables après leur publication ou notification le cas échéant. Si le client n'accepte pas les modifications, il a le droit de cesser d'utiliser les services et d'annuler son compte sans frais dans les quatorze (14) jours ouvrables suivant la publication des nouvelles conditions, ou leur notification le cas échéant. Dans ce cas, le client aura droit à un remboursement au prorata des frais mensuels ou annuels déjà payés. Le client comprend et accepte que la poursuite de l'utilisation des services quatorze jours ouvrables après la publication, ou la notification le cas échéant, de toute modification du contrat, constitue l'acceptation de ces modifications. En aucun cas la poursuite de l'utilisation des services par le client ne pourra être interprétée comme maintenue selon les anciennes conditions du contrat.
    `,
      },
  ],
};

const provisionOfServices = {
  sections: [
    {
      title: "3.1 Utilisation des services",
      subsections: [
        {
          number: "3.1.1",
          description: `
            Pendant la durée du présent contrat, Dafira accorde au client et aux utilisateurs un droit limité, révocable, non exclusif et non transférable d'accéder et d'utiliser les services inclus dans l'abonnement client applicable conformément au présent contrat. À partir de la date d'un tel achat et pour la durée restante du contrat, Dafira accorde également au client et aux utilisateurs un droit limité, révocable, non exclusif et non transférable d'accéder et d'utiliser, conformément au présent contrat, tout service supplémentaire acheté par le client, moyennant un coût additionnel, pendant la durée du contrat.
          `
        },
        {
          number: "3.1.2",
          description: `
            Le client est responsable de s'assurer que son utilisation des services est conforme au présent contrat.
          `
        },
        {
          number: "3.1.3",
          description: `
            Le droit d'utilisation des services décrit à l'article 3.1.1 est accordé sous réserve des restrictions en termes de nombre d'utilisateurs, de fonctionnalités et/ou de transactions attachées à l'abonnement client applicable, tel que décrit sur le site. Il est accordé dans le seul but de permettre au client et aux utilisateurs d'accéder et d'utiliser les services pour les besoins internes légitimes du client. Sauf indication contraire écrite, le droit d'utilisation des services décrit à l'article 3.1.1 ne peut être transféré ou sous-licencié à un tiers, en tout ou en partie, sans l'accord écrit préalable de Dafira.
          `
        },
        {
          number: "3.1.4",
          description: `
            À l'exception des droits d'utilisation et autres droits expressément accordés ici, aucun autre droit n'est accordé au client ou à tout utilisateur. Le client reconnaît expressément que l'accès ou l'utilisation d'un service n'implique pas un transfert de droits de propriété intellectuelle au client ou à tout utilisateur. Tous les droits de propriété intellectuelle et tous les droits dérivés liés au site et aux services restent la propriété de Dafira ou de ses concédants.
          `
        }
      ]
    },
    {
      title: "3.2 Processus d'inscription",
      subsections: [
        {
          number: "3.2.1",
          description: `
            Pour s'inscrire à un service, Dafira exige que le client s'enregistre sur le site. Lors de l'inscription, un compte client sera ouvert, et le client devra fournir ses informations de facturation habituelles telles que le nom et l'adresse de facturation et sélectionner un forfait et une fréquence de paiement. Selon l'abonnement client et la fréquence de paiement choisis, un numéro de carte de crédit pourrait également être requis. Le client s'engage à fournir des informations exactes et complètes lors de l'inscription et à maintenir ces informations à jour. Dafira a le droit de suspendre ou de résilier le compte du client et de refuser toute utilisation actuelle ou future du service (ou d'une partie de celui-ci) si une information est fausse, inexacte, non à jour ou incomplète.
          `
        },
        {
          number: "3.2.2",
          description: `
            Le client et ses utilisateurs s'inscrivent et se connectent à l'aide d'une adresse email valide et d'un mot de passe pour l'authentification (les "données de connexion client"). Le client reste responsable de la confidentialité des données de connexion client. Le client est entièrement responsable de toutes les activités qui se produisent sur son compte.
          `
        }
      ]
    },
    {
      title: "3.3 Essai gratuit",
      subsections: [
        {
          number: "3.3.1",
          description: `
            Le client a le droit de demander (uniquement) une (1) période d'essai gratuite valable 7 jours par localisation pour expérimenter les caractéristiques et fonctionnalités des services avant de prendre une décision d'achat (la "période d'essai"). Si le client renouvelle son compte à la fin de la période d'essai, il ne sera pas éligible à une autre période d'essai gratuite pour la même localisation. Si Dafira découvre que le client s'est inscrit plusieurs fois pour des périodes d'essai pour une certaine localisation, Dafira se réserve le droit de restreindre ou de résilier tout compte client à sa seule discrétion et/ou de refuser toute utilisation actuelle ou future du service (ou d'une partie de celui-ci).
          `
        },
        {
          number: "3.3.2",
          description: `
            Pendant la période d'essai, Dafira met ses services à la disposition du client avec un accès complet à toutes les fonctionnalités mentionnées dans l'abonnement client et un support complet. Pour les services utilisés pendant la période d'essai, Dafira ne prend aucun engagement, obligation, représentation ou garantie en relation avec les services, car les services sont fournis "tels quels" et "selon disponibilité" pendant la période d'essai.
          `
        },
        {
          number: "3.3.3",
          description: `
            La période d'essai commence à partir de la création d'un compte client, qui est confirmée par une approbation envoyée par Dafira à l'adresse email fournie par le client. La période d'essai est valable quinze (15) jours sauf si l'utilisation du service par le client est résiliée plus tôt conformément au présent contrat. Dès que la période d'essai expire, l'accès du client sera immédiatement résilié, sauf si l'abonnement client est ouvert.
          `
        },
        {
          number: "3.3.4",
          description: `
            Nonobstant ce qui précède, Dafira a le droit de modifier les conditions de la période d'essai ou de la supprimer entièrement à tout moment, sans préavis, y compris, mais sans s'y limiter, lorsque Dafira estime que le client demande une période d'essai non pas pour prendre une décision d'achat, mais pour tout autre objectif (illégal) tel que se livrer à de l'espionnage industriel.
          `
        }
      ]
    }
  ]
};

const qualityOfService = {
  title: "4. Exigences de qualité de service",
  introduction: `
    Fournir une excellente qualité de service (QoS) est au cœur des objectifs de service de Dafira. La QoS est mesurée par des spécifications techniques qui précisent la qualité de service des fonctionnalités telles que la disponibilité et les bonnes performances (4.1), la sécurité (4.2) et la maintenabilité (4.3). Dafira déclare et garantit au client que :
    (i) il possède l'expérience et la capacité nécessaires pour fournir les services requis ;
    (ii) il exécutera les services de manière professionnelle, compétente et opportune, conformément aux normes de l'industrie et aux conditions contenues dans les présentes ;
    (iii) il a et maintiendra toutes les licences, consentements et autorisations nécessaires à l'exécution de ses obligations en vertu du présent contrat et se conformera par ailleurs aux lois applicables dans la fourniture du service ;
    (iv) il est autorisé à accorder les droits et à assumer les obligations des termes et conditions contenus dans le présent contrat ; et
    (v) les services ne portent pas atteinte aux droits de propriété intellectuelle de tiers.
  `,
  sections: [
    {
      title: "4.1. Disponibilité et bonnes performances",
      subsections: [
        {
          number: "4.1.1",
          description: `
            L'objectif de Dafira est de fournir au client une disponibilité continue des services et du site, et un haut niveau de performance. Dafira utilisera des efforts commercialement raisonnables pour corriger tous les défauts, défaillances et erreurs matériels dans le fonctionnement ou la fonctionnalité des services aux frais de Dafira dès que possible après que Dafira en a été informé par le client.
          `
        },
        {
          number: "4.1.2",
          description: `
            Dafira utilisera tous les efforts commercialement raisonnables, qui ne seront pas inférieurs aux normes acceptées de l'industrie, pour rendre ses services disponibles au client avec un pourcentage de disponibilité mensuelle d'au moins 99,50 % pendant tout cycle de facturation mensuel donné (l'"engagement de service").
            Le "pourcentage de disponibilité mensuelle" est calculé en prenant le nombre total de minutes dans un mois civil moins le nombre de minutes d'indisponibilité dans le mois civil donné, le tout divisé par le nombre total de minutes dans ce mois civil. L'indisponibilité n'inclut pas :
            (i) l'indisponibilité programmée (pour la maintenance et les mises à niveau, notifiées à l'avance aux utilisateurs administrateurs),
            (ii) l'indisponibilité due à la force majeure,
            (iii) le manque d'accès dû à une utilisation inappropriée du service par le client, et
            (iv) l'indisponibilité résultant des actes ou omissions du client ou de problèmes de services, de matériel ou de réseau tiers.
          `
        },
        {
          number: "4.1.3",
          description: `
            Si Dafira ne respecte pas son engagement de service au cours d'un mois civil donné, le client sera éligible à recevoir des crédits de service sur les cycles de facturation futurs. Les crédits de service sont calculés en fonction du pourcentage de disponibilité mensuelle :
            - Inférieur à 99,50 % mais égal ou supérieur à 95 % : 10 %
            - Inférieur à 95 % : 30 %
          `
        },
        {
          number: "4.1.4",
          description: `
            Les demandes de crédits de service doivent être soumises dans les trente (30) jours civils suivant l'incident, avec une description détaillée, la durée et les tentatives de résolution du problème. Dafira émettra des crédits de service dans la période de facturation suivante s'ils sont dus mais ne fournira pas de remboursements ou de paiements en espèces. Si le pourcentage de disponibilité mensuelle tombe en dessous de 99,50 % mais reste égal ou supérieur à 95 %, le client recevra un crédit de service égal à 10 % des frais totaux pour ce cycle de facturation ; s'il tombe en dessous de 95 %, le crédit de service augmentera à 30 %, compensant la fiabilité réduite du service.
          `
        }
      ]
    },
    {
      title: "4.2. Sécurité",
      subsections: [
        {
          number: "4.2.1",
          description: `
             Dafira déclare et garantit que (i) ses réseaux, systèmes d'exploitation, logiciels, routeurs, bases de données et systèmes informatiques sont conformes et correctement configurés conformément aux lois applicables et aux normes de l'industrie et qu'il est connu de ces normes applicables de l'industrie ; (ii) il utilise des procédures commercialement raisonnables pour sauvegarder toutes les données traitées dans le cadre du présent contrat ; (iii) il mettra en œuvre des politiques et procédures de sécurité pour protéger les données traitées dans le cadre du présent contrat, lesquelles politiques et procédures seront conformes aux lois applicables et aux normes de l'industrie. Dafira notifiera au client toute violation de sécurité connue ou suspectée conformément aux lois et règlements applicables. Pour recevoir ces notifications, le client s'engage à s'abonner sur la plateforme Dafira pour recevoir les mises à jour de statut. Dafira travaillera avec le client pour corriger immédiatement toute déficience de sécurité matérielle dont Dafira est notifié par écrit.
          `
        },
        {
          number: "4.2.2",
          description: `
            Le client comprend que Dafira ne peut pas et ne garantit pas que les fichiers disponibles pour téléchargement depuis internet ou le site ou utilisant les services seront exempts de virus ou d'autres codes destructeurs. Le client est responsable de la mise en œuvre de procédures et points de contrôle suffisants pour satisfaire ses exigences particulières en matière de protection antivirus et d'exactitude des données d'entrée et de sortie, et du maintien d'un moyen externe au site pour toute reconstruction de données perdues. Dans toute la mesure permise par la loi, Dafira ne sera pas responsable de toute perte ou dommage causé par une attaque par déni de service distribué, des virus ou autre matériel technologiquement nuisible qui pourrait infecter l'équipement informatique, les programmes informatiques, les données ou autre matériel propriétaire du client en raison de l'utilisation par le client du site web ou de tout service ou élément obtenu via le site web ou du téléchargement par le client de tout matériel publié sur celui-ci, ou sur tout site web lié à celui-ci.`
        },
        {
          number: "4.2.3",
          description: `
            L'utilisation par le client du site, des services et des applications sous-jacentes, de leur contenu et de tout service ou élément obtenu via le site se fait aux propres risques du client. Le site, les services et applications sous-jacentes, leur contenu et tout service ou élément obtenu via le site sont fournis "tels quels" et "selon disponibilité", sans aucune garantie d'aucune sorte, expresse ou implicite. Sauf disposition contraire expressément énoncée dans les présentes, ni Dafira ni aucune personne associée à Dafira ne donne de garantie ou ne fait de déclaration concernant l'exhaustivité, la sécurité, la fiabilité, la qualité, l'exactitude ou la disponibilité du site web. Sans limiter ce qui précède, ni Dafira ni quiconque associé à Dafira ne déclare ou ne garantit que le site, les services et applications sous-jacentes, leur contenu ou tout service ou élément obtenu via le site seront exacts, fiables, sans erreur ou ininterrompus, que les défauts seront corrigés, que notre site ou le serveur qui le rend disponible sont exempts de virus ou autres composants nuisibles, ou que le site web ou tout service ou élément obtenu via le site web répondra autrement à vos besoins ou attentes.`
        }
      ]
    },
    {
      title: "4.3. Maintenabilité",
      subsections: [
        {
          number: "4.3.1",
          description: `
            Dafira effectue régulièrement des maintenances et des mises à jour pour améliorer ses services. Il peut également introduire de nouvelles fonctionnalités ou modifier les fonctionnalités existantes. Les maintenances programmées qui impactent les utilisateurs seront communiquées au moins 24 heures à l'avance. Les temps d'arrêt dus à la maintenance programmée ne donnent pas droit à des remboursements ou compensations.
          `
        },
        {
          number: "4.3.2",
          description: `
            Le support client de Dafira vise à fournir des réponses claires et rapides aux demandes des clients concernant les services ou le site. Les demandes de support peuvent être soumises par email ou via l'icône de support dédiée dans la plateforme.
          `
        }
      ]
    }
  ]
};

export const acceptableUse = {
  title: "5. Utilisation acceptable",
  sections: [
    {
      title: "5.1 Activités illégales",
      description: `
        Le client doit utiliser et accéder au service uniquement en conformité avec le présent contrat et toutes les lois et réglementations applicables. 
        Le client est responsable d'assurer la conformité de ses employés, gestionnaires, administrateurs, contractants, mandataires, 
        et tout autre utilisateur autorisé par le client.
      `
    },
    {
      title: "5.2 Sécurité",
      subsections: [
        {
          number: "5.2.1",
          description: `
            Il est strictement interdit au client de prendre toute action qui pourrait compromettre la sûreté ou la sécurité des services, 
            du site ou du réseau associé. Les actions interdites incluent, sans s'y limiter, la distribution, le téléchargement, 
            le téléversement ou la transmission de matériel contenant des virus, chevaux de Troie, vers, bombes à retardement, cancelbots ou autres 
            logiciels malveillants qui pourraient perturber le fonctionnement des services ou du site, ou nuire aux intérêts de Dafira, 
            ses clients, utilisateurs ou autres clients. Le client doit s'abstenir de traiter du contenu qui pourrait surcharger 
            ou perturber l'infrastructure ou le bon fonctionnement des applications et du site.
          `
        },
        {
          number: "5.2.2",
          description: `
            Après notification écrite préalable à Dafira, le client peut effectuer des tests de vulnérabilité réguliers (par exemple, des analyses automatisées) 
            conformément aux instructions et procédures convenues. Toute vulnérabilité identifiée lors de ces tests doit être 
            signalée à Dafira, qui travaillera à les résoudre ou les atténuer.
          `
        },
        {
          number: "5.2.3",
          description: `
            Le client s'engage à notifier immédiatement Dafira par écrit de toute violation de sécurité ou utilisation non autorisée du compte 
            du client ou des données de connexion client. Le client doit prendre toutes les mesures nécessaires pour empêcher l'accès ou l'utilisation non autorisé, 
            y compris mais sans s'y limiter :
            - S'assurer que le client se déconnecte de son compte après chaque session.
            - Protéger adéquatement les données de connexion client contre la divulgation ou l'utilisation non autorisée.
          `
        }
      ]
    },
    {
      title: "5.3 Communications non sollicitées",
      description: `
        L'utilisation des services pour envoyer des messages non sollicités et/ou commerciaux à d'autres utilisateurs, tels que des courriers indésirables, spam, 
        chaînes de lettres, ou communications menaçantes et autres communications dérangeantes, est strictement interdite.
      `
    }
  ]
};

const contentManagement = {
  title: "6. Gestion du contenu",
  sections: [
    {
      title: "6.1 Contenu inapproprié",
      subsections: [
        {
          number: "6.1.1",
          description: `
            La fonctionnalité d'un ou plusieurs des services permet au client d'ajouter du contenu aux applications sous-jacentes à ces services. 
            Le client est seul responsable du contenu que lui et ses utilisateurs peuvent ajouter. Le client ne doit pas créer, transmettre, afficher 
            ou rendre disponible tout contenu qui est illégal, nuisible, offensant, menaçant, abusif, harcelant, délictueux, diffamatoire, 
            vulgaire, obscène, invasif de la vie privée d'autrui ou haineux (y compris les virus, vers et autres codes destructeurs).
          `
        },
        {
          number: "6.1.2",
          description: `
            Dafira se réserve le droit, à sa seule discrétion, de :
            - Supprimer ou refuser de publier tout contenu du client.
            - Prendre toute mesure concernant le contenu du client que Dafira juge nécessaire ou appropriée, notamment si ce contenu viole le présent contrat, 
              porte atteinte à des droits de propriété intellectuelle, menace la sécurité des utilisateurs ou pourrait engager la responsabilité de Dafira.
            - Divulguer l'identité du client ou d'autres informations à tout tiers qui prétend que le matériel publié par le client viole ses droits.
            - Prendre les mesures légales appropriées, y compris le signalement aux forces de l'ordre, pour toute utilisation illégale ou non autorisée des services ou du site.
            - Résilier ou suspendre l'accès du client à tout ou partie des services ou du site pour toute violation du présent contrat.
          `
        }
      ]
    },
    {
      title: "6.2 Liens vers des sites tiers",
      description: `
        Le site peut contenir des liens directs ou indirects vers des sites web tiers et/ou des portails de communication électronique, 
        sur lesquels Dafira ne peut exercer aucun contrôle technique, de contenu ou autre. Le contenu généré par les utilisateurs peut inclure de tels hyperliens entre autres. 
        Dafira ne garantit pas et n'assume aucune responsabilité quant à l'exactitude, la légalité, l'exhaustivité ou la qualité de :
        - Sites web externes liés sur le site, ou
        - Tout autre portail de communications électroniques qui ne sont pas sous le contrôle de Dafira.
        L'utilisation ou l'accès à ces liens se fait aux propres risques du client. Dafira n'est pas responsable des dommages qui pourraient en résulter.
      `
    },
    {
      title: "6.3 Téléchargements / Téléversements",
      description: `
        Tous les utilisateurs, y compris ceux d'autres clients de Dafira, peuvent téléverser du contenu vers les services, qui peut ensuite être consulté ou téléchargé par d'autres utilisateurs autorisés, 
        y compris le client et ses utilisateurs autorisés. Dafira ne peut être tenu responsable des conséquences du téléchargement de contenu ajouté par d'autres utilisateurs. 
        Le client comprend et accepte que tout téléchargement de contenu depuis le service est à ses propres risques, et les dommages résultant de la perte de données 
        ou de dommages au système informatique du client sont de sa seule responsabilité.
      `
    }
  ]
};

const feeAndPayment = {
  title: "7. Frais et paiement",
  sections: [
    {
      title: "7.1 Frais et taxes",
      description: `
        Tous les frais pour chaque abonnement client possible sont indiqués sur le site. Les frais sont indiqués en euros et sont hors taxes, 
        droits, prélèvements et règlements de change applicables, sauf indication contraire. 
        Le client accepte de payer les frais applicables et toute taxe ou frais qui pourrait s'accumuler en relation avec toute utilisation des services 
        accessibles via son compte, y compris tous les frais résultant d'une utilisation non autorisée.
      `
    },
    {
      title: "7.2 Période initiale",
      description: `
        Nonobstant l'article 12, la période initiale d'un abonnement client est de 12 ou 24 mois.
      `
    },
    {
      title: "7.3 Ajustements de prix",
      description: `
        Dafira se réserve le droit d'adapter les frais publiés sur son site. Tout changement de prix n'affectera pas les abonnements existants mais 
        s'appliquera uniquement aux nouvelles souscriptions. Si un tel changement entraîne une baisse des prix ou bénéficie autrement au client 
        (à l'exclusion des cas où la baisse des prix résulte d'une augmentation des prélèvements ou taxes gouvernementaux), le client peut 
        demander l'adaptation de ses frais dus à compter de la date de sa demande en envoyant un courriel à info@dafira.ai. Ces demandes 
        ne donneront pas lieu à un remboursement partiel des frais déjà payés pour un abonnement client mais pourront conduire à une 
        prolongation de l'abonnement client.
      `
    },
    {
      title: "7.4 Obligations de paiement",
      description: `
        La fourniture des services est conditionnée au paiement par le client de tous les frais associés aux services conformément 
        au présent contrat. Tout retard ou défaut de paiement entraînera automatiquement une suspension du compte. Toute contestation 
        concernant une facture doit être notifiée à Dafira par écrit dans les quinze (15) jours suivant la réception de la facture. 
        Les abonnements annuels sont payables uniquement par carte de crédit. Les factures payées par virement bancaire sont dues dans 
        les quinze (15) jours à compter de la date de facturation (NET15). Tout montant impayé à l'échéance portera un intérêt conventionnel 
        de 10% par an, calculé quotidiennement à partir de la date d'échéance jusqu'au paiement intégral. Le client sera également 
        redevable d'une indemnité forfaitaire pour perte et frais administratifs de 10%, avec un minimum de 50 EUR par facture. Dafira 
        peut facturer au client les frais raisonnables encourus dans le cadre du recouvrement de créances ou des efforts d'exécution, 
        conformément à la loi applicable.
      `
    },
    {
      title: "7.5 Traitement des paiements",
      description: `
        Les paiements par carte de crédit sont traités via le facilitateur sécurisé stripe ou d'autres prestataires de paiement. 
        Les paiements en ligne sont exécutés via un système de sécurité fermé (SSL), grâce auquel les coordonnées bancaires du client 
        sont toujours cryptées lors de leur transmission sur internet.
      `
    }
  ]
};
const confidentialInformation = {
  title: "8. Informations confidentielles",
  sections: [
    {
      title: "8.1 Obligations de la partie réceptrice",
      description: `
        Concernant toute information confidentielle divulguée, fournie ou rendue accessible par l'une des parties (la "partie divulgatrice") 
        à l'autre partie (la "partie réceptrice") dans le cadre du présent contrat, la partie réceptrice s'engage envers la partie divulgatrice :
      `,
      subsections: [
        {
          number: "8.1.1",
          description: "À préserver la confidentialité des informations confidentielles."
        },
        {
          number: "8.1.2",
          description: `
            À conserver les informations confidentielles dans un endroit sûr et sécurisé en utilisant des mesures de sécurité techniques 
            et organisationnelles raisonnables pour empêcher tout accès, destruction ou perte non autorisés et à traiter les informations 
            confidentielles avec au moins le même degré de soin que celui utilisé pour ses propres informations confidentielles.
          `
        },
        {
          number: "8.1.3",
          description: `
            À ne pas divulguer, sans le consentement écrit préalable de la partie divulgatrice, les informations confidentielles en tout 
            ou en partie à toute autre personne, à l'exception de ses employés, agents et sous-traitants impliqués dans l'exécution de 
            ses obligations au titre du présent contrat, et uniquement dans la mesure nécessaire à l'exécution de celui-ci.
          `
        },
        {
          number: "8.1.4",
          description: `
            À utiliser les informations confidentielles uniquement dans le cadre de l'exercice de ses droits ou de l'exécution de ses 
            obligations au titre du présent contrat.
          `
        }
      ]
    },
    {
      title: "8.2 Définition des informations confidentielles",
      description: `
        Les "informations confidentielles" désignent toutes les informations, qu'elles soient de nature technique, financière, commerciale 
        ou autre, relatives de quelque manière que ce soit aux activités ou aux affaires de la partie divulgatrice, qui ne sont pas 
        publiquement accessibles et qui sont connues uniquement dans le cadre de l'exercice des droits et obligations au titre du présent contrat.
      `
    },
    {
      title: "8.3 Sensibilisation des employés et agents",
      description: `
        Chaque partie s'engage envers l'autre à informer tous ses employés, utilisateurs, agents et sous-traitants concernés de la nature 
        confidentielle des informations confidentielles de la partie divulgatrice et, sans limitation au présent article 8, à prendre 
        toutes les mesures jugées nécessaires, à la seule discrétion de la partie réceptrice, pour assurer le respect des dispositions 
        du présent article 8 par ses employés, utilisateurs, agents et sous-traitants.
      `
    },
    {
      title: "8.4 Exceptions à la confidentialité",
      description: `
        Les dispositions des articles 8.1 à 8.3 ne s'appliquent pas aux informations qui :
      `,
      subsections: [
        {
          number: "8.4.1",
          description: "Sont ou deviennent publiques autrement que par violation du présent article 8."
        },
        {
          number: "8.4.2",
          description: `
            Sont en possession de la partie réceptrice sans restriction de divulgation avant la date de réception de la part de la 
            partie divulgatrice.
          `
        },
        {
          number: "8.4.3",
          description: `
            Sont reçues d'un tiers qui les a obtenues légalement et qui n'est soumis à aucune obligation limitant leur divulgation.
          `
        },
        {
          number: "8.4.4",
          description: `
            Sont développées de manière indépendante sans accès aux informations confidentielles appartenant à la partie divulgatrice.
          `
        }
      ]
    },
    {
      title: "8.5 Maintien des obligations de confidentialité",
      description: `
        L'article 8 demeure pleinement en vigueur nonobstant toute résiliation du présent contrat. Toutes les informations confidentielles, 
        y compris les copies qui en sont faites, restent la propriété exclusive de la partie divulgatrice et doivent être rapidement 
        restituées à la partie divulgatrice ou détruites sur demande écrite de celle-ci.
      `
    }
  ]
};

export const intellectualProperty = {
  title: "9. Propriété intellectuelle",
  sections: [
    {
      title: "9.1 Propriété",
      description: `
        Sauf disposition contraire expressément énoncée dans les présentes, les services, le site et l'ensemble de leurs contenus, fonctionnalités 
        et caractéristiques (notamment les informations, logiciels, textes, affichages, images, vidéos et sons, ainsi que leur conception, sélection 
        et agencement) sont la propriété de Dafira, de ses concédants ou d'autres fournisseurs de ces éléments et sont protégés par les lois sur 
        les droits d'auteur, les marques, les brevets, les secrets commerciaux et autres droits de propriété intellectuelle. L'accès ou l'utilisation 
        du site ou des services n'implique aucun transfert des droits de propriété intellectuelle au client ou à tout utilisateur.
      `
    },
    {
      title: "9.2 Restrictions d'utilisation",
      description: `
        Le client s'engage à ne pas reproduire, modifier, créer des œuvres dérivées, afficher, exécuter, publier, distribuer, diffuser, exploiter 
        commercialement, communiquer, faire circuler ou transférer de quelque manière que ce soit les applications sous-jacentes aux services, 
        les services ou toute partie du site à des tiers, sans le consentement écrit préalable de Dafira. Le client s'engage également à ne pas 
        désassembler, décompiler, faire de l'ingénierie inverse, créer des œuvres dérivées ou modifier les applications sous-jacentes aux services, 
        les services ou toute partie du site, sauf dans la mesure permise par la loi applicable et conformément au présent contrat.
      `
    },
    {
      title: "9.3 Déclarations et garanties du client",
      subsections: [
        {
          number: "9.3.1",
          description: `
            Le client possède ou contrôle tous les droits sur le contenu ajouté à une application utilisant les services et a le droit d'accorder 
            la licence ci-dessus à Dafira, ses affiliés et prestataires de services, ainsi qu'à leurs licenciés, successeurs et ayants droit respectifs.
          `
        },
        {
          number: "9.3.2",
          description: `
            L'ensemble du contenu du client est et restera conforme au présent contrat.
          `
        },
        {
          number: "9.3.3",
          description: `
            Le client comprend et reconnaît qu'il est responsable de tout contenu soumis ou contribué par lui ou ses utilisateurs, et que le client, 
            non Dafira, assume l'entière responsabilité de ce contenu, y compris sa légalité, sa fiabilité, son exactitude et son caractère approprié. 
            Dafira n'est pas responsable envers les tiers du contenu ou de l'exactitude d'un tel contenu.
          `
        }
      ]
    }
  ]
};

export const clientOwnership = {
  title: "10. Propriété du client",
  sections: [
    {
      title: "10.1 Propriété des données client",
      description: `
        Le client conserve la propriété de ses données personnelles et informations utilisateur (y compris les informations collectées via des cookies 
        ou autrement) fournies dans le cadre de l'utilisation des services ("données client").
      `
    },
    {
      title: "10.2 Données d'utilisation agrégées",
      description: `
        Nonobstant toute autre disposition du présent contrat, Dafira se réserve le droit de compiler et d'utiliser des données client d'utilisation 
        agrégées et des statistiques, et de divulguer ces statistiques agrégées, tant qu'elles ne décrivent ni n'identifient aucun utilisateur ou 
        client individuel.
      `
    },
    {
      title: "10.3 Licence de retour d'expérience",
      description: `
        Le client accorde à Dafira une licence mondiale, gratuite, sous-licenciable et perpétuelle pour utiliser ou incorporer dans le service toute 
        suggestion, demande d'amélioration, recommandation ou autre retour d'expérience fourni par le client et ses utilisateurs.
      `
    }
  ]
};

export const liabilities = {
  title: "11. Liabilities",
  sections: [
    {
      title: "11.1 Client Indemnification",
      description: `
        The Client agrees to defend, indemnify, and hold harmless Dafira, its affiliates, licensors, and service providers, and its and their respective 
        officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, 
        judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys’ fees) arising out of or relating to such Client’s or any of its Users’ 
        violation of these General Terms and Conditions or your use of the Services or the Site, including, but not limited to, content added by the Client or any of its 
        Users to any application underlying the Services, any use of the Site’s content, services, and products other than as expressly authorized in these General Terms 
        and Conditions, or the Client’s or any of its Users’ use of any information obtained from the Site.
      `
    },
    {
      title: "11.2 Force Majeure",
      description: `
        Dafira shall not have any liability or be considered to be in breach or default of its obligations under the Agreement, to the extent that performance 
        of such obligations is delayed or prevented, directly or indirectly, due to force majeure. In such event, it is understood that no refund will be owed 
        to the Client. Force majeure shall be taken to mean any circumstance beyond the Parties' control that entirely or partially prevents compliance with their 
        obligations in respect of the Client.
      `
    },
    {
      title: "11.3 Third-Party and Client Actions",
      description: `
        Dafira shall not be liable for damages caused by the Client or actions or omissions of third parties. The Client will hold harmless and indemnify Dafira 
        and its employees, managers, and directors from any claims and damages that may arise from actions or omissions of the Client.
      `
    },
    {
      title: "11.4 Limitation of Liability",
      description: `
        In any case, Dafira’s liability for damages arising under this Agreement, whether in contract, tort, or otherwise, will be limited to actual, proven, direct 
        damages and will not exceed the net amount paid to Dafira by the Client for the Services under this Agreement during the twelve (12) months immediately 
        preceding the cause of the action. In no event will Dafira be liable for indirect, incidental, consequential, punitive, or exemplary damages or financial 
        losses, including the loss of revenue, whether foreseeable or not.
      `
    },
    {
      title: "11.5 Exceptions to Liability Limitations",
      description: `
        The limits of liability in Article 11.4 apply to the extent permitted by applicable law. They do not apply in the case of fraud or willful misconduct by Dafira.
      `
    }
  ]
};

export const termsAndTermination = {
  title: "12. Durée et résiliation",
  sections: [
    {
      title: "12.1 Durée",
      subsections: [
        {
          number: "12.1.1",
          description: `
            Le contrat prend effet à la date de finalisation du processus d'inscription à un abonnement par le client, pour la période initiale choisie par 
            celui-ci. À la fin de la période initiale et de chaque renouvellement, sauf notification contraire de l'une des parties conformément aux articles 
            12.1.2 et 12.1.3 ci-dessous, le contrat sera automatiquement renouvelé pour une durée identique à la période initiale.
          `
        },
        {
          number: "12.1.2",
          description: `
            Soixante (60) jours avant la fin de chaque période, Dafira enverra une notification de renouvellement au client. Si le client ne souhaite pas 
            voir le contrat renouvelé pour une nouvelle période, il devra notifier à Dafira sa décision de ne pas renouveler au moins 30 jours avant la fin 
            de la période. En l'absence de notification du client avant l'expiration de la période, l'abonnement sera automatiquement renouvelé pour une 
            nouvelle période.
          `
        },
        {
          number: "12.1.3",
          description: `
            Si Dafira ne souhaite pas voir le contrat renouvelé pour une nouvelle période, soixante (60) jours avant la fin de la période, Dafira enverra 
            une notification de non-renouvellement au client. Le contrat prendra alors fin le dernier jour de la période.
          `
        }
      ]
    },
    {
      title: "12.2 Suspension et résiliation",
      subsections: [
        {
          number: "12.2.1",
          title: "Suspension",
          description: `
            Sans préjudice du droit de résiliation prévu à l'article 12.2.3, Dafira a le droit de suspendre l'accès du client au service en cas de violation 
            substantielle du présent contrat par le client. Dafira informera rapidement le client des motifs de la suspension. Le client disposera de trente 
            (30) jours pour remédier à la violation si un tel remède est possible. Les frais peuvent continuer à s'accumuler pendant une suspension, et Dafira 
            peut facturer au client des frais de réactivation suite à toute suspension des services. Ces frais de réactivation devront être payés avant que 
            les services puissent être rétablis.
          `
        },
        {
          number: "12.2.2",
          title: "Résiliation pour motif",
          description: `
            Dafira peut résilier le présent contrat par notification écrite avec effet immédiat, sans intervention judiciaire et sans engager sa responsabilité si :
            - Le client ne remédie pas à une violation substantielle du présent contrat dans les trente (30) jours suivant la réception d'une notification écrite 
              décrivant la nature de la violation et précisant l'intention de résilier le contrat si la violation n'est pas corrigée.
            - Le client commet une violation substantielle du présent contrat à laquelle il ne peut être remédié.
            - Le client commet des violations mineures répétées du présent contrat entraînant une perte irrémédiable de confiance de la part de Dafira.
            - Dafira a des soupçons raisonnables d'utilisation frauduleuse, non autorisée, inappropriée ou illégale des services par le client.
            - Un cas de force majeure se prolonge pendant plus de quatre-vingt-dix (90) jours.
            
            En cas de résiliation pour motif, le client n'aura droit à aucun remboursement, total ou partiel, des frais payés.
          `
        },
        {
          number: "12.2.3",
          description: `
            Chaque partie peut résilier le présent contrat avec effet immédiat, sans intervention judiciaire, si l'autre partie fait l'objet d'une procédure 
            de liquidation, d'insolvabilité ou de faillite, ou conclut un arrangement ou une composition avec ses créanciers, ou si ses actifs font l'objet 
            d'une saisie quelconque, ou si elle entre en liquidation, volontaire (sauf pour reconstruction ou fusion) ou forcée, ou si un administrateur 
            judiciaire est nommé pour ses actifs, dans la mesure où cette résiliation est autorisée par la loi applicable.
          `
        }
      ]
    },
    {
      title: "12.3 Conséquences de la résiliation",
      description: `
        Le compte du client sera désactivé lors de la résiliation ou de la suspension du présent contrat. La désactivation signifie que le service sera 
        indisponible en tout ou partie et que le client pourrait donc ne pas avoir accès au contenu qu'il a ajouté à une application utilisant les services. 
        La désactivation ne signifie pas que le compte et le contenu associé seront immédiatement et irrévocablement supprimés. Dafira garantit de conserver 
        ce contenu disponible pendant au moins soixante (60) jours calendaires suivant le jour de la désactivation.
      `
    }
  ]
};

export const privacy = {
  title: "13. Protection des données",
  sections: [
    {
      title: "13.1 Traitement des données personnelles",
      description: `
        Dafira (en tant que sous-traitant) traitera les données personnelles pour le compte du client (en sa qualité de responsable du traitement). 
        Le client est responsable de l'obtention d'une base juridique appropriée pour effectuer les activités de traitement concernant 
        ses employés, contractants, visiteurs et utilisateurs dans le cadre du présent contrat.
      `
    },
    {
      title: "13.2 Accord de traitement des données",
      description: `
        Le traitement des données personnelles par Dafira pour le compte du client est soumis à l'accord de traitement des données annexé 
        aux présentes conditions générales. Cette annexe fait partie intégrante du contrat. dafira.ai/fr/privacy
      `
    }
  ]
};

export const finalProvisions = {
  title: "14. Dispositions finales",
  sections: [
    {
      number: "14.1",
      description: "Le présent contrat est exclusivement régi par le droit belge."
    },
    {
      number: "14.2",
      description: `
        Sous réserve des règles du règlement Bruxelles I (qui prévoit des règles de compétence spéciales) et d'autres lois similaires 
        applicables dans toute la mesure du possible, les tribunaux francophones de Bruxelles (Belgique) seront exclusivement compétents.
      `
    },
    {
      number: "14.3",
      description: `
        Le présent contrat constitue l'intégralité de l'accord entre le client et Dafira concernant l'utilisation des services par le client, 
        et remplace tout accord oral ou écrit antérieur entre le client et Dafira concernant l'objet des présentes. Les parties excluent 
        expressément l'application de toutes conditions générales d'achat ou autres conditions du client, même si celles-ci ont été 
        communiquées à Dafira ultérieurement et que Dafira n'y aurait pas fait objection.
      `
    },
    {
      number: "14.4",
      description: `
        Si une disposition du présent contrat est jugée illégale, invalide ou autrement inapplicable pour quelque raison que ce soit, 
        elle sera réputée dissociée du contrat et n'affectera pas la validité, la légalité et l'applicabilité des autres dispositions 
        du présent contrat. Dans toute la mesure permise par la loi applicable, la disposition illégale, invalide ou inapplicable sera 
        modifiée pour se rapprocher le plus possible des intentions communes des parties telles qu'exprimées dans la disposition initiale.
      `
    },
    {
      number: "14.5",
      description: `
        Le client ne peut céder ni transférer de quelque autre manière que ce soit ses droits ou obligations au titre du présent contrat, 
        en tout ou en partie, à un tiers.
      `
    },
    {
      number: "14.6",
      description: `
        La renonciation à un droit en vertu du présent contrat n'est effective que si elle est faite par écrit et ne s'applique qu'à 
        la partie à laquelle la renonciation est adressée et aux circonstances pour lesquelles elle est donnée.
      `
    },
    {
      number: "14.7",
      description: `
        Le présent contrat ne crée aucune relation d'agence, de partenariat ou de coentreprise entre les parties.
      `
    },
    {
      number: "14.8",
      description: `
        Il n'y a pas de tiers bénéficiaires au présent contrat.
      `
    },
    {
      number: "14.9",
      description: `
        Toute notification à effectuer en vertu du présent contrat doit être remise ou envoyée par courrier recommandé ou par courriel :
        - Au client à l'adresse postale ou électronique fournie lors du processus de souscription.
        - À Dafira à l'adresse Rue de l'Hôpital 31, B‐1000 Bruxelles, Belgique ou à info@dafira.ai.
      `
    }
  ]
};

export const termsSections = [
  {
    key: "definitions",
    title: "1. Définitions",
    sections: definitions.sections
  },
  {
    key: "binding-agreement",
    title: "2. Accord contraignant", 
    sections: bindingAgreement.sections
  },
  {
    key: "provision-of-services",
    title: "3. Fourniture des services",
    sections: provisionOfServices.sections
  },
  {
    key: "quality-of-service",
    title: "4. Exigences de qualité de service",
    sections: qualityOfService.sections
  },
  {
    key: "acceptable-use",
    title: "5. Utilisation acceptable",
    sections: acceptableUse.sections
  },
  {
    key: "content-management",
    title: "6. Gestion du contenu",
    sections: contentManagement.sections
  },
  {
    key: "fee-and-payment",
    title: "7. Frais et paiement",
    sections: feeAndPayment.sections
  },
  {
    key: "confidential-information",
    title: "8. Informations confidentielles",
    sections: confidentialInformation.sections
  },
  {
    key: "intellectual-property",
    title: "9. Propriété intellectuelle",
    sections: intellectualProperty.sections
  },
  {
    key: "client-ownership",
    title: "10. Propriété du client",
    sections: clientOwnership.sections
  },
  {
    key: "liabilities",
    title: "11. Responsabilités",
    sections: liabilities.sections
  },
  {
    key: "terms-and-termination",
    title: "12. Durée et résiliation",
    sections: termsAndTermination.sections
  },
  {
    key: "privacy",
    title: "13. Confidentialité",
    sections: privacy.sections
  },
  {
    key: "final-provisions",
    title: "14. Dispositions finales",
    sections: finalProvisions.sections
  }
];
