export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
}

export interface Quiz {
    moduleId: string;
    title: string;
    questions: QuizQuestion[];
}

export const quizzes: Quiz[] = [
    // BEGINNER QUIZ - After Stage 5
    {
        moduleId: 'beginner-stage-5',
        title: 'Beginner Level Quiz',
        questions: [
            {
                id: 'b-1',
                question: 'What is the key difference between privacy and secrecy?',
                options: [
                    'There is no difference',
                    'Privacy is about control over your information, secrecy is about hiding wrongdoing',
                    'Secrecy is legal, privacy is not',
                    'Privacy only applies to digital data'
                ],
                correctIndex: 1
            },
            {
                id: 'b-2',
                question: 'What does anonymity mean in the digital context?',
                options: [
                    'Hiding your financial transactions',
                    'Using encryption for all data',
                    'Acting without a persistent identifier',
                    'Using a VPN'
                ],
                correctIndex: 2
            },
            {
                id: 'b-3',
                question: 'What is the main problem with Web2?',
                options: [
                    'Data is too encrypted',
                    'Users have too much control',
                    'Data centralization by big companies',
                    'Internet is too slow'
                ],
                correctIndex: 2
            },
            {
                id: 'b-4',
                question: 'What are Decentralized Identifiers (DIDs)?',
                options: [
                    'Government-issued digital IDs',
                    'User-controlled identifiers for verification without revealing full identity',
                    'Social media usernames',
                    'Wallet addresses only'
                ],
                correctIndex: 1
            },
            {
                id: 'b-5',
                question: 'What technology allows proving something is true without revealing additional information?',
                options: [
                    'Regular encryption',
                    'Blockchain',
                    'Zero-Knowledge Proofs (ZKPs)',
                    'Hash functions'
                ],
                correctIndex: 2
            }
        ]
    },

    // INTERMEDIATE QUIZ - After Based Stage 5
    {
        moduleId: 'intermediate-stage-5',
        title: 'Intermediate Level Quiz',
        questions: [
            {
                id: 'i-1',
                question: 'In transparent blockchains, what is visible to everyone?',
                options: [
                    'Only wallet addresses',
                    'Only transaction amounts',
                    'Wallet addresses, balances, and all transactions',
                    'Nothing is visible'
                ],
                correctIndex: 2
            },
            {
                id: 'i-2',
                question: 'What does the Confidentiality level hide vs reveal?',
                options: [
                    'Hides identity, reveals amounts',
                    'Hides amounts and balances, reveals wallet addresses',
                    'Hides everything',
                    'Reveals everything'
                ],
                correctIndex: 1
            },
            {
                id: 'i-3',
                question: 'What makes FHE special compared to regular encryption?',
                options: [
                    'It is faster',
                    'It allows computations on encrypted data',
                    'It uses smaller keys',
                    'It only works for text'
                ],
                correctIndex: 1
            },
            {
                id: 'i-4',
                question: 'Who introduced the concept of "bootstrapping" for FHE?',
                options: [
                    'Satoshi Nakamoto',
                    'Vitalik Buterin',
                    'Craig Gentry',
                    'Tim Berners-Lee'
                ],
                correctIndex: 2
            },
            {
                id: 'i-5',
                question: 'What is a key advantage of FHE over TEEs?',
                options: [
                    'FHE is faster',
                    'FHE is quantum-resistant due to lattice-based cryptography',
                    'FHE requires special hardware',
                    'FHE is cheaper'
                ],
                correctIndex: 1
            }
        ]
    },

    // ADVANCED QUIZ - After Circles Stage 5
    {
        moduleId: 'advanced-stage-5',
        title: 'Advanced Level Quiz',
        questions: [
            {
                id: 'a-1',
                question: 'What analogy describes what Inco does for blockchains?',
                options: [
                    'USB for hardware',
                    'HTTPS for the internet',
                    'TCP/IP for networks',
                    'SQL for databases'
                ],
                correctIndex: 1
            },
            {
                id: 'a-2',
                question: 'Which technologies does Inco combine for confidential computation?',
                options: [
                    'Only FHE',
                    'Only TEEs',
                    'TEEs, FHE, ZKPs, and MPC',
                    'Only blockchain'
                ],
                correctIndex: 2
            },
            {
                id: 'a-3',
                question: 'What do cERC20 tokens keep hidden?',
                options: [
                    'Token names',
                    'Balances and transfer amounts',
                    'Wallet addresses',
                    'Smart contract code'
                ],
                correctIndex: 1
            },
            {
                id: 'a-4',
                question: 'What problem do confidential AMMs solve?',
                options: [
                    'Slow transactions',
                    'MEV extraction and sandwich attacks from exposed pool data',
                    'High gas fees',
                    'User interface issues'
                ],
                correctIndex: 1
            },
            {
                id: 'a-5',
                question: 'What developer tools can be used to build with Inco?',
                options: [
                    'Only proprietary Inco tools',
                    'Solidity, MetaMask, Remix, Hardhat - familiar Ethereum tools',
                    'Only Python',
                    'Only command line'
                ],
                correctIndex: 1
            }
        ]
    }
];

export function getQuizByModuleId(moduleId: string): Quiz | undefined {
    return quizzes.find(q => q.moduleId === moduleId);
}
