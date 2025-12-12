// Mock question bank organized by industry/role
const questionBank = {
    "Software Development": [
        {
            question: "What is the primary purpose of version control systems like Git?",
            options: [
                "To compile code faster",
                "To track changes and collaborate on code",
                "To deploy applications to production",
                "To write automated tests"
            ],
            correctAnswer: "To track changes and collaborate on code",
            explanation: "Version control systems like Git help teams track changes, collaborate, and maintain code history."
        },
        {
            question: "Which data structure uses LIFO (Last In, First Out) principle?",
            options: ["Queue", "Stack", "Array", "Linked List"],
            correctAnswer: "Stack",
            explanation: "A stack follows LIFO - the last element added is the first one removed."
        },
        {
            question: "What is the time complexity of binary search?",
            options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            correctAnswer: "O(log n)",
            explanation: "Binary search has O(log n) complexity as it halves the search space each iteration."
        },
        {
            question: "What does SOLID principles stand for in OOP?",
            options: [
                "Simple, Open, Limited, Independent, Direct",
                "Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion",
                "Structured, Organized, Logical, Independent, Definite",
                "Standard, Optimal, Linear, Integrated, Distributed"
            ],
            correctAnswer: "Single responsibility, Open-closed, Liskov substitution, Interface segregation, Dependency inversion",
            explanation: "SOLID is a set of five design principles for writing maintainable object-oriented code."
        },
        {
            question: "What is a race condition in concurrent programming?",
            options: [
                "When two threads compete for CPU time",
                "When the outcome depends on the timing of uncontrollable events",
                "When a program runs too fast",
                "When multiple processes deadlock"
            ],
            correctAnswer: "When the outcome depends on the timing of uncontrollable events",
            explanation: "A race condition occurs when the program's behavior depends on the sequence or timing of threads/processes."
        }
    ],

    "Data Science": [
        {
            question: "What is the difference between supervised and unsupervised learning?",
            options: [
                "Supervised uses labeled data, unsupervised doesn't",
                "Supervised is faster than unsupervised",
                "Unsupervised requires more data",
                "They are the same thing"
            ],
            correctAnswer: "Supervised uses labeled data, unsupervised doesn't",
            explanation: "Supervised learning uses labeled training data, while unsupervised finds patterns in unlabeled data."
        },
        {
            question: "What does the p-value represent in statistical hypothesis testing?",
            options: [
                "The probability that the null hypothesis is true",
                "The probability of observing the data given that the null hypothesis is true",
                "The percentage of variance explained",
                "The correlation coefficient"
            ],
            correctAnswer: "The probability of observing the data given that the null hypothesis is true",
            explanation: "P-value measures the probability of obtaining results at least as extreme as observed, assuming the null hypothesis is true."
        },
        {
            question: "What is overfitting in machine learning?",
            options: [
                "When a model performs well on all data",
                "When a model is too simple",
                "When a model memorizes training data but fails on new data",
                "When training takes too long"
            ],
            correctAnswer: "When a model memorizes training data but fails on new data",
            explanation: "Overfitting occurs when a model learns the training data too well, including noise, and doesn't generalize."
        },
        {
            question: "Which algorithm is commonly used for dimensionality reduction?",
            options: ["Linear Regression", "PCA (Principal Component Analysis)", "K-means", "Decision Trees"],
            correctAnswer: "PCA (Principal Component Analysis)",
            explanation: "PCA reduces dimensionality by transforming data to a new coordinate system with fewer dimensions."
        },
        {
            question: "What is the purpose of cross-validation?",
            options: [
                "To speed up training",
                "To assess model performance and prevent overfitting",
                "To clean the data",
                "To visualize results"
            ],
            correctAnswer: "To assess model performance and prevent overfitting",
            explanation: "Cross-validation helps evaluate how well a model generalizes to unseen data."
        }
    ],

    "Frontend Development": [
        {
            question: "What does CSS stand for?",
            options: [
                "Computer Style Sheets",
                "Cascading Style Sheets",
                "Creative Style System",
                "Colorful Style Sheets"
            ],
            correctAnswer: "Cascading Style Sheets",
            explanation: "CSS stands for Cascading Style Sheets, used to style HTML elements."
        },
        {
            question: "What is the Virtual DOM in React?",
            options: [
                "A real DOM element",
                "A lightweight copy of the actual DOM",
                "A database for storing DOM elements",
                "A CSS framework"
            ],
            correctAnswer: "A lightweight copy of the actual DOM",
            explanation: "Virtual DOM is a programming concept where a virtual representation of UI is kept in memory."
        },
        {
            question: "What is the purpose of the 'useState' hook in React?",
            options: [
                "To fetch data from APIs",
                "To manage component state",
                "To style components",
                "To create routes"
            ],
            correctAnswer: "To manage component state",
            explanation: "useState is a React Hook that lets you add state to functional components."
        },
        {
            question: "What is responsive web design?",
            options: [
                "Websites that respond quickly",
                "Designing for different screen sizes and devices",
                "Interactive animations",
                "Backend optimization"
            ],
            correctAnswer: "Designing for different screen sizes and devices",
            explanation: "Responsive design ensures websites work well on various devices and screen sizes."
        },
        {
            question: "What is the purpose of Webpack?",
            options: [
                "To test JavaScript code",
                "To bundle and optimize assets",
                "To style web pages",
                "To manage databases"
            ],
            correctAnswer: "To bundle and optimize assets",
            explanation: "Webpack is a module bundler that packages JavaScript files and assets for deployment."
        }
    ],

    "Backend Development": [
        {
            question: "What is RESTful API?",
            options: [
                "A database management system",
                "An architectural style for designing networked applications",
                "A programming language",
                "A frontend framework"
            ],
            correctAnswer: "An architectural style for designing networked applications",
            explanation: "REST is an architectural style that uses HTTP requests to access and manipulate data."
        },
        {
            question: "What HTTP method is used to update existing data?",
            options: ["GET", "POST", "PUT", "DELETE"],
            correctAnswer: "PUT",
            explanation: "PUT is typically used to update existing resources in RESTful APIs."
        },
        {
            question: "What is middleware in Express.js?",
            options: [
                "A database connector",
                "Functions that execute during request-response cycle",
                "A frontend library",
                "A deployment tool"
            ],
            correctAnswer: "Functions that execute during request-response cycle",
            explanation: "Middleware functions have access to request and response objects and can modify them."
        },
        {
            question: "What is the purpose of JWT (JSON Web Tokens)?",
            options: [
                "To style web pages",
                "For secure authentication and information exchange",
                "To compress data",
                "To cache responses"
            ],
            correctAnswer: "For secure authentication and information exchange",
            explanation: "JWTs are used to securely transmit information between parties as a JSON object."
        },
        {
            question: "What is database indexing?",
            options: [
                "Backing up data",
                "A data structure to improve query performance",
                "Deleting old records",
                "Encrypting sensitive data"
            ],
            correctAnswer: "A data structure to improve query performance",
            explanation: "Indexes create data structures that improve the speed of data retrieval operations."
        }
    ],

    "DevOps": [
        {
            question: "What is CI/CD?",
            options: [
                "Cloud Infrastructure / Cloud Development",
                "Continuous Integration / Continuous Deployment",
                "Code Inspection / Code Debugging",
                "Container Integration / Container Distribution"
            ],
            correctAnswer: "Continuous Integration / Continuous Deployment",
            explanation: "CI/CD automates the process of integrating code changes and deploying to production."
        },
        {
            question: "What is Docker used for?",
            options: [
                "Database management",
                "Containerization of applications",
                "Code versioning",
                "Network monitoring"
            ],
            correctAnswer: "Containerization of applications",
            explanation: "Docker packages applications and dependencies into containers for consistent deployment."
        },
        {
            question: "What is Kubernetes?",
            options: [
                "A programming language",
                "A container orchestration platform",
                "A database system",
                "A testing framework"
            ],
            correctAnswer: "A container orchestration platform",
            explanation: "Kubernetes automates deployment, scaling, and management of containerized applications."
        },
        {
            question: "What is Infrastructure as Code (IaC)?",
            options: [
                "Writing code for infrastructure management",
                "Cloud storage solution",
                "A programming paradigm",
                "A security protocol"
            ],
            correctAnswer: "Writing code for infrastructure management",
            explanation: "IaC manages and provisions infrastructure through code instead of manual processes."
        },
        {
            question: "What is the purpose of load balancing?",
            options: [
                "To reduce server costs",
                "To distribute traffic across multiple servers",
                "To encrypt data",
                "To backup databases"
            ],
            correctAnswer: "To distribute traffic across multiple servers",
            explanation: "Load balancers distribute network traffic to ensure no single server bears too much load."
        }
    ],

    "General Technology": [
        {
            question: "What does API stand for?",
            options: [
                "Application Programming Interface",
                "Advanced Program Integration",
                "Automated Process Interface",
                "Application Process Integration"
            ],
            correctAnswer: "Application Programming Interface",
            explanation: "API allows different software applications to communicate with each other."
        },
        {
            question: "In database design, what is a primary key?",
            options: [
                "The first column in a table",
                "A unique identifier for each record",
                "The most important data field",
                "A foreign key reference"
            ],
            correctAnswer: "A unique identifier for each record",
            explanation: "A primary key uniquely identifies each record in a database table."
        },
        {
            question: "What is the purpose of a constructor in OOP?",
            options: [
                "To destroy objects",
                "To initialize object properties",
                "To define class methods",
                "To inherit from parent classes"
            ],
            correctAnswer: "To initialize object properties",
            explanation: "Constructors initialize object properties when creating new instances."
        },
        {
            question: "In Agile methodology, what is a sprint?",
            options: [
                "A bug in the code",
                "A time-boxed development cycle",
                "A type of testing",
                "A deployment strategy"
            ],
            correctAnswer: "A time-boxed development cycle",
            explanation: "A sprint is a fixed time period (usually 2-4 weeks) for completing work in Agile."
        },
        {
            question: "What is the purpose of unit testing?",
            options: [
                "To test the entire application",
                "To test individual components in isolation",
                "To test user interface",
                "To test deployment process"
            ],
            correctAnswer: "To test individual components in isolation",
            explanation: "Unit tests verify that individual components work correctly in isolation."
        },
        {
            question: "What is encryption?",
            options: [
                "Compressing data",
                "Converting data into coded format for security",
                "Backing up data",
                "Deleting sensitive information"
            ],
            correctAnswer: "Converting data into coded format for security",
            explanation: "Encryption protects data by converting it into a format that can only be read with the correct key."
        }
    ]
};

// Function to get random questions based on user profile
export function getQuizQuestions(industry, skills) {
    let availableQuestions = [];

    // Add questions from user's industry
    if (questionBank[industry]) {
        availableQuestions.push(...questionBank[industry]);
    }

    // Add related questions based on skills
    if (skills && skills.length > 0) {
        const skillsLower = skills.map(s => s.toLowerCase());

        if (skillsLower.some(s => s.includes('react') || s.includes('vue') || s.includes('angular') || s.includes('frontend'))) {
            availableQuestions.push(...questionBank["Frontend Development"]);
        }
        if (skillsLower.some(s => s.includes('node') || s.includes('python') || s.includes('backend') || s.includes('api'))) {
            availableQuestions.push(...questionBank["Backend Development"]);
        }
        if (skillsLower.some(s => s.includes('docker') || s.includes('kubernetes') || s.includes('devops') || s.includes('aws'))) {
            availableQuestions.push(...questionBank["DevOps"]);
        }
        if (skillsLower.some(s => s.includes('data') || s.includes('ml') || s.includes('ai') || s.includes('python'))) {
            availableQuestions.push(...questionBank["Data Science"]);
        }
    }

    // Always add general questions
    availableQuestions.push(...questionBank["General Technology"]);

    // Remove duplicates
    const uniqueQuestions = Array.from(new Set(availableQuestions.map(q => q.question)))
        .map(question => availableQuestions.find(q => q.question === question));

    // Shuffle and select 10 questions
    const shuffled = uniqueQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
}
