export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'fr',
    messages: {
      fr: {
        welcome: "Bienvenue",
        login: {
            "welcome": "Bienvenue sur notre plateforme",
            "subtitle": "Gérez vos projets, vos équipes et votre temps efficacement",
            "title": "Connexion",
            "access": "Accédez à votre espace de travail",
            "email": "Email",
            "emailPlaceholder": "nom{at}exemple.com",
            "password": "Mot de passe",
            "remember": "Se souvenir de moi",
            "forgot": "Mot de passe oublié ?",
            "submit": "Se connecter",
            "noAccount": "Pas encore de compte ?",
            "register": "S'inscrire"
        },
        features: {
            "teamManagement": "Gestion d'équipe simplifiée",
            "projectManagement": "Tous vos projets au même endroit",
            "analytics": "Analyses et rapports détaillés",
            quickSetup: {
                title: 'Configuration rapide',
                description: 'Soyez opérationnel en moins de 5 minutes'
            },
            security: {
                title: 'Sécurité maximale',
                description: 'Vos données sont cryptées et sécurisées'
            },
            collaboration: {
                title: 'Collaboration en temps réel',
                description: 'Travaillez efficacement en équipe'
            },
            users5: "5 utilisateurs",
            users20: "20 utilisateurs",
            usersUnlimited: "Utilisateurs illimités",
            storage10: "10 GB de stockage",
            storage50: "50 GB de stockage",
            storage500: "500 GB de stockage",
            support24: "Support 24/7",
            updates: "Mises à jour gratuites",
            api: "Accès API",
            custom: "Personnalisation",
            dedicated: "Manager dédié",
            training: "Formation incluse"
        },
        signup: {
            title: 'Créer un compte',
            subtitle: 'Commencez votre essai gratuit de 24h',
            firstName: 'Prénom',
            lastName: 'Nom',
            email: 'Email',
            password: 'Mot de passe',
            confirmPassword: 'Confirmer le mot de passe',
            minChars: 'Minimum 8 caractères',
            submit: 'Créer un compte',
            haveAccount: 'Déjà un compte ?',
            login: 'Connectez-vous'
        },
        leftSection: {
            title: 'Rejoignez notre communauté',
            subtitle: 'Plus de 20 000 équipes nous font déjà confiance.',
            quote: 'Un outil indispensable pour notre équipe',
            activeUsers: 'Plus de 100K utilisateurs actifs'
        },
        packages: {
            title: "Choisissez votre forfait",
            subtitle: "Des solutions adaptées à vos besoins",
            choosePlan: "Sélectionnez votre plan",
            planDescription: "Tous les plans incluent une période d'essai de 24 heures",
            perMonth: "/mois",
            selectPlan: "Sélectionner ce plan"
        },
        benefits: {
        security: {
            title: "Sécurité maximale",
            description: "Protection de vos données garantie"
        },
        scalability: {
            title: "Évolutivité",
            description: "Adaptez vos ressources selon vos besoins"
        },
        support: {
            title: "Support premium",
            description: "Une équipe dédiée à votre service"
        }
        },
        plans: {
        starter: {
            name: "Débutant",
            description: "Parfait pour commencer"
        },
        professional: {
            name: "Professionnel",
            description: "Pour les équipes en croissance"
        },
        enterprise: {
            name: "Entreprise",
            description: "Solutions personnalisées"
        }
        },
        common: {
            "back": "Retour",
            "next": "Suivant"
        }
          
      },
      en: {
        welcome: "Welcome",
        login: {
            "welcome": "Welcome to our platform",
            "subtitle": "Manage your projects, teams and time efficiently",
            "title": "Login",
            "access": "Access your workspace",
            "email": "Email",
            "emailPlaceholder": "name{at}example.com",
            "password": "Password",
            "remember": "Remember me",
            "forgot": "Forgot password?",
            "submit": "Sign in",
            "noAccount": "Don't have an account?",
            "register": "Sign up"
        },
        features: {
            "teamManagement": "Simplified team management",
            "projectManagement": "All your projects in one place",
            "analytics": "Detailed analytics and reports",
            quickSetup: {
                title: 'Quick setup',
                description: 'Be up and running in less than 5 minutes'
            },
            security: {
                title: 'Maximum security',
                description: 'Your data is encrypted and secured'
            },
            collaboration: {
                title: 'Real-time collaboration',
                description: 'Work efficiently as a team'
            },
            users5: "5 users",
            users20: "20 users",
            usersUnlimited: "Unlimited users",
            storage10: "10 GB storage",
            storage50: "50 GB storage",
            storage500: "500 GB storage",
            support24: "24/7 Support",
            updates: "Free updates",
            api: "API Access",
            custom: "Customization",
            dedicated: "Dedicated manager",
            training: "Training included"
        },
        signup: {
            title: 'Create account',
            subtitle: 'Start your 24h free trial',
            firstName: 'First name',
            lastName: 'Last name',
            email: 'Email',
            password: 'Password',
            confirmPassword: 'Confirm password', 
            minChars: 'Minimum 8 characters',
            submit: 'Create account',
            haveAccount: 'Already have an account?',
            login: 'Sign in'
        },
        leftSection: {
            title: 'Join our community',
            subtitle: 'Over 20,000 teams already trust us.',
            quote: 'An essential tool for our team',
            activeUsers: 'Over 100K active users'
        },
        packages: {
            title: "Choose your package",
            subtitle: "Solutions tailored to your needs",
            choosePlan: "Select your plan",
            planDescription: "All plans include a 24-houres trial period",
            perMonth: "/month",
            selectPlan: "Select this plan"  
        },
        benefits: {
            security: {
                title: "Maximum security",
                description: "Guaranteed data protection"
            },
            scalability: {
                title: "Scalability",
                description: "Adapt resources to your needs"
            },
            support: {
                title: "Premium support",
                description: "Dedicated team at your service"
            }
        },
        plans: {
            starter: {
                name: "Starter",
                description: "Perfect to get started"
            },
            professional: {
                name: "Professional",
                description: "For growing teams"
            },
            enterprise: {
                name: "Enterprise",
                description: "Custom solutions"
            }
        },
        common: {
            "back": "Back",
            "next": "Next"
        }
      }
    }
}))