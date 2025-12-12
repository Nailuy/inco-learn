export interface Lesson {
  id: string;
  title: string;
  content: string;
}

export interface Module {
  id: string;
  title: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  lessons: Lesson[];
}

export const modules: Module[] = [
  // BEGINNER LEVEL - STAGES 1-5
  {
    id: 'beginner-stage-1',
    title: 'STAGE 1',
    level: 'beginner',
    description: 'Introduction to privacy concepts and why they matter in the digital age.',
    lessons: [
      {
        id: 'what-is-privacy',
        title: 'What is Privacy?',
        content: `
<h2>Understanding Privacy, Security, and Anonymity</h2>

<p>Many people confuse the concepts of <strong>privacy</strong>, <strong>security</strong>, and <strong>anonymity</strong>. While related, each serves a distinct purpose in protecting your digital life.</p>

<h3>Privacy</h3>
<p>Privacy is the assurance that your data is only seen by the parties you intend to view it. In the context of an instant messenger, for example, end-to-end encryption provides privacy by keeping your message visible only to yourself and the recipient.</p>

<h3>Security</h3>
<p>Security is the ability to trust the applications you use—that the parties involved are who they say they are—and keep those applications safe. In the context of browsing the web, security can be provided by HTTPS certificates that prove you are talking directly to the website you're visiting.</p>

<h3>Anonymity</h3>
<p>Anonymity is the ability to act without a persistent identifier. You might achieve this online with technologies like Tor, which allows you to browse the internet with a random IP address instead of your own.</p>

<h3>Pseudonymity</h3>
<p>Pseudonymity allows you to have a persistent identifier without it being tied to your real identity. If everybody knows you as @GamerGuy12 online, but nobody knows your real name, that is your pseudonym.</p>
        `
      },
      {
        id: 'privacy-vs-secrecy',
        title: 'Privacy vs Secrecy',
        content: `
<h2>Privacy is Not Secrecy</h2>

<p>A common counter-argument to pro-privacy movements is the notion that one doesn't need privacy if they have <strong>"nothing to hide."</strong> This is a dangerous misconception.</p>

<p>You shouldn't confuse privacy with secrecy. We know what happens in the bathroom, but you still close the door. That's because you want privacy, not secrecy.</p>

<p>There are always certain facts about us—say, personal health information, or financial behavior—that we wouldn't want the whole world to know, and that's okay. The need for privacy is legitimate, and that's what makes us human.</p>

<h3>Privacy is About Empowerment</h3>
<p><strong>Privacy is about empowering your rights over your own information, not about hiding secrets.</strong></p>
        `
      }
    ]
  },
  {
    id: 'beginner-stage-2',
    title: 'STAGE 2',
    level: 'beginner',
    description: 'Control and privacy in the digital world.',
    lessons: [
      {
        id: 'privacy-control',
        title: 'Is Privacy About Control?',
        content: `
<h2>The Illusion of Control</h2>

<p>A common definition of privacy is that it is the ability to <em>control</em> who has access to your data. This sounds nice, but in practice it just doesn't work.</p>

<p>Take cookie consent forms, for example. You may encounter these dozens of times per day on the various websites you visit. In the end, we just hit the "I Agree" button, because we just want to read the article or make a purchase.</p>

<p>Control over your privacy inside most apps is an illusion. It's a shiny dashboard with all sorts of choices you can make about your data, but rarely the choices you're looking for, like "only use my data to help me."</p>

<h3>Privacy by Design</h3>
<p><strong>Privacy is something we need to have baked into the software and services we use by default.</strong> You can't bend most apps into being private on your own—it needs to be built in from the start.</p>
        `
      },
      {
        id: 'digital-age-privacy',
        title: 'Privacy in the Digital Age',
        content: `
<h2>Privacy in the Modern Digital Age</h2>

<p>In the modern age of digital data exploitation, your privacy has never been more critical, and yet many believe it is already a lost cause. <strong>It is not.</strong></p>

<h3>Why Privacy Matters Now</h3>
<ul>
  <li><strong>Data Exploitation:</strong> Companies monetize your personal information without transparent consent</li>
  <li><strong>Surveillance:</strong> Both governments and corporations track digital behavior</li>
  <li><strong>Identity Theft:</strong> Exposed personal data enables fraud and impersonation</li>
  <li><strong>Manipulation:</strong> Personal data is used to influence decisions and behavior</li>
</ul>
        `
      }
    ]
  },
  {
    id: 'beginner-stage-3',
    title: 'STAGE 3',
    level: 'beginner',
    description: 'Web2 vs Web3 and the privacy revolution.',
    lessons: [
      {
        id: 'web2-vs-web3',
        title: 'Web2 vs Web3 Privacy',
        content: `
<h2>From Centralized to Decentralized Privacy</h2>

<h3>The Web2 Problem</h3>
<p>The main characteristic (and drawback) of Web2 frameworks is <strong>data centralization</strong>. Big companies like Facebook, Google and Apple collect users' data and store it in a central repository.</p>

<p>Users cannot monitor their data and have little say over its usage, ceding near total control to companies and governments to use the data as they will.</p>

<h3>The Web3 Promise</h3>
<p>Web3 is the decentralized version of the internet, promising secure data exchange since the notion of security and data privacy is hard-baked into its architecture.</p>

<p>Web3 uses blockchain technology and, with the help of AI and the Internet of Things (IoT), ensures a decentralized and private browsing experience.</p>
        `
      },
      {
        id: 'decentralized-identity',
        title: 'Decentralized Identity (DIDs)',
        content: `
<h2>Decentralized Identity in Web3</h2>

<p>Web3 enables <strong>Decentralized Identifiers (DIDs)</strong> to give users control over their identities. DIDs support identifying people for verification purposes without revealing their full identities.</p>

<h3>How DIDs Work</h3>
<p>Instead of relying on centralized identity providers (like logging in with Google or Facebook), DIDs allow you to prove who you are using cryptographic proofs.</p>

<ul>
  <li><strong>You control your identity:</strong> No company can delete or modify your identity</li>
  <li><strong>Selective disclosure:</strong> Share only what's necessary for each interaction</li>
  <li><strong>Portable:</strong> Your identity works across any platform that supports DIDs</li>
</ul>
        `
      }
    ]
  },
  {
    id: 'beginner-stage-4',
    title: 'STAGE 4',
    level: 'beginner',
    description: 'Web3 privacy technologies and innovations.',
    lessons: [
      {
        id: 'web3-privacy-tech',
        title: 'Web3 Privacy Technologies',
        content: `
<h2>Privacy Technologies in Web3</h2>

<p>The Web3 ecosystem leverages privacy-first technologies that enhance its safety. Here are the key innovations:</p>

<h3>Zero-Knowledge Proofs (ZKPs)</h3>
<p>ZKPs allow users to prove they know something is true without revealing any additional information. This is fundamental for privacy-preserving verification.</p>

<h3>Homomorphic Encryption</h3>
<p>Homomorphic encryption allows computation on encrypted data. The results of the computation on the encrypted data, when decrypted, will match the results of the computation on the unencrypted data.</p>

<p>This means data can be processed without ever being exposed!</p>
        `
      },
      {
        id: 'smpc-and-more',
        title: 'SMPC and Hash Functions',
        content: `
<h2>More Privacy Technologies</h2>

<h3>Secure Multiparty Computation (SMPC)</h3>
<p>SMPC enables multiple parties to jointly compute on their input data while maintaining each party's privacy. With SMPC, parties can analyze sensitive data in a distributed manner without revealing it during collaborative computations.</p>

<h3>Secure Hash Functions</h3>
<p>Secure hash functions generate a unique, fixed-size hash value representing input data. Any data change in a block alters its hash and alerts the rest of the network about this anomalous change.</p>

<h3>Mimblewimble</h3>
<p>Mimblewimble is a technology used for private transactions. It utilizes cryptographic commitments to make transactions verifiable without revealing the amounts transferred.</p>
        `
      }
    ]
  },
  {
    id: 'beginner-stage-5',
    title: 'STAGE 5',
    level: 'beginner',
    description: 'Summary and beginner quiz preparation.',
    lessons: [
      {
        id: 'beginner-summary',
        title: 'Beginner Level Summary',
        content: `
<h2>What You've Learned</h2>

<p>Congratulations on completing the Beginner level! Here's a summary of what you've learned:</p>

<h3>Key Concepts</h3>
<ul>
  <li><strong>Privacy vs Secrecy:</strong> Privacy is about control, not hiding wrongdoing</li>
  <li><strong>Privacy vs Security vs Anonymity:</strong> Three distinct but related concepts</li>
  <li><strong>Web2 vs Web3:</strong> Centralized data control vs decentralized ownership</li>
  <li><strong>DIDs:</strong> User-controlled identity without centralized providers</li>
  <li><strong>Privacy Technologies:</strong> ZKPs, Homomorphic Encryption, SMPC</li>
</ul>

<h3>Ready for the Quiz?</h3>
<p>Test your knowledge with the Beginner Quiz to solidify your understanding before moving to Intermediate level!</p>
        `
      }
    ]
  },

  // INTERMEDIATE LEVEL - BASED STAGES 1-5
  {
    id: 'intermediate-stage-1',
    title: 'BASED STAGE 1',
    level: 'intermediate',
    description: 'The four levels of blockchain privacy.',
    lessons: [
      {
        id: 'level-1-transparency',
        title: 'Level 1: Transparency',
        content: `
<h2>Transparency: Everyone Can See Everything</h2>

<p><strong>TL;DR:</strong> Everyone can see everything.</p>

<p><strong>Example use cases:</strong> Transactions, DeFi, governance, NFTs, as long as you don't mind everyone seeing what you're doing.</p>

<h3>How It Works</h3>
<p>Most blockchains are transparent by design. This is great for trust, with users able to verify that there has been no double spend and everything works correctly.</p>

<h3>The Transparency Problem</h3>
<p>If we switched every day-to-day payment to onchain today, it would be a social nightmare, with everyone able to see the financial lives of everyone else.</p>

<p>On a technical level, onchain transparency means that your wallet address, wallet balance, and all transactions are all visible to anyone on block explorers like Etherscan.</p>
        `
      },
      {
        id: 'level-2-anonymity',
        title: 'Level 2: Anonymity',
        content: `
<h2>Anonymity: Hidden Identity, Visible Amounts</h2>

<p><strong>TL;DR:</strong> Send and receive amounts are visible, but senders and recipients are hidden.</p>

<p><strong>Example use cases:</strong> Political donations, healthcare bills, or anything else you don't want anyone else to know about.</p>

<h3>How It Works</h3>
<p>This version of onchain privacy prioritizes keeping your identity hidden, while the actual metadata (amount and asset) you transact onchain are still viewable.</p>

<h3>Mixer Protocols</h3>
<p>One approach to achieving onchain anonymity is a Mixer protocol like Tornado Cash. Mixers work by pooling deposits and using cryptographic proofs to unlink withdrawals from deposits.</p>
        `
      }
    ]
  },
  {
    id: 'intermediate-stage-2',
    title: 'BASED STAGE 2',
    level: 'intermediate',
    description: 'Confidentiality and total privacy levels.',
    lessons: [
      {
        id: 'level-3-confidentiality',
        title: 'Level 3: Confidentiality',
        content: `
<h2>Confidentiality: Hidden Amounts, Visible Identity</h2>

<p><strong>TL;DR:</strong> Your wallet address is visible, but your transaction amounts and balance aren't.</p>

<p><strong>Example use cases:</strong> P2P payments, salary, payroll.</p>

<h3>How It Works</h3>
<p>Confidentiality refers to a different approach to private payments. Users can keep their balances and transaction amounts hidden, while their addresses and the fact they made a transfer is publicly recorded on the blockchain ledger.</p>

<h3>Perfect for Payroll</h3>
<p>This makes confidentiality perfect for use cases like payroll and supply chain payments, where you want to hide the amounts while the parties are typically known.</p>

<p><strong>Inco and Circle Research have developed a standard for confidential tokens that fits into this category.</strong></p>
        `
      },
      {
        id: 'level-4-total-privacy',
        title: 'Level 4: Total Privacy',
        content: `
<h2>Total Privacy: Everything Hidden</h2>

<p><strong>TL;DR:</strong> Both identity and transaction amounts are completely hidden.</p>

<h3>The Trade-offs</h3>
<p>Total privacy often comes with trade-offs:</p>
<ul>
  <li><strong>Compliance:</strong> Makes regulatory requirements difficult to meet</li>
  <li><strong>Composability:</strong> Harder to integrate with other DeFi protocols</li>
  <li><strong>Scalability:</strong> Privacy computations can be resource-intensive</li>
</ul>

<h3>The Right Level for You</h3>
<p>When it comes to onchain privacy, it's not one-size-fits-all. Different use cases benefit from different privacy levels.</p>
        `
      }
    ]
  },
  {
    id: 'intermediate-stage-3',
    title: 'BASED STAGE 3',
    level: 'intermediate',
    description: 'Introduction to Fully Homomorphic Encryption.',
    lessons: [
      {
        id: 'what-is-fhe',
        title: 'What is FHE?',
        content: `
<h2>Fully Homomorphic Encryption: The Holy Grail of Encryption</h2>

<p>FHE is a form of encryption that enables computations to be executed on encrypted data, producing an encrypted result. When this result is decrypted, it corresponds precisely to the outcome of operations as if they had been performed directly on the plaintext.</p>

<p><strong>Sounds like magic, right?</strong></p>

<h3>A Simple Example</h3>
<p>Imagine you have a JPEG image file of a yellow banana. Let's encrypt the file so no one can see it.</p>

<p>Now, with FHE, someone could run a function to change the color of the image. They never even knew it was a yellow banana in the first place, but they've computed upon the encrypted image to turn it green.</p>

<p>So we have a green banana, but no one knows it's a green banana apart from the person who originally encrypted the image.</p>
        `
      },
      {
        id: 'how-fhe-works',
        title: 'How FHE Works',
        content: `
<h2>The Technical Foundations of FHE</h2>

<h3>Core Principles</h3>
<ul>
  <li><strong>Public and Private Keys:</strong> FHE relies on asymmetric encryption. A public key encrypts the data, and a private key decrypts it.</li>
  <li><strong>Homomorphic Operations:</strong> Operations like addition and multiplication can be executed directly on ciphertexts.</li>
  <li><strong>Decryption:</strong> The output remains encrypted until it is decrypted by the party holding the private key.</li>
</ul>

<h3>Noise Management</h3>
<p>FHE is based on lattice-based LWE (Learning With Errors) setups. During computation, ciphertexts accumulate noise. Techniques like <strong>bootstrapping</strong> (introduced by Craig Gentry) control this noise.</p>
        `
      }
    ]
  },
  {
    id: 'intermediate-stage-4',
    title: 'BASED STAGE 4',
    level: 'intermediate',
    description: 'Comparing FHE and TEE encryption approaches.',
    lessons: [
      {
        id: 'fhe-vs-tees',
        title: 'FHE vs TEEs Comparison',
        content: `
<h2>Comparing Encryption Approaches</h2>

<h3>What Are TEEs?</h3>
<p>A TEE (Trusted Execution Environment) is a secure enclave within a processor that allows computations to be performed on sensitive data without exposing it to the rest of the system.</p>

<h3>Key Differences</h3>
<ul>
  <li><strong>Performance:</strong> TEEs are fast; FHE is currently slower</li>
  <li><strong>Hardware:</strong> TEEs require special hardware; FHE can run anywhere</li>
  <li><strong>Quantum Resistance:</strong> FHE is quantum-resistant; TEEs are not</li>
  <li><strong>Attack Surface:</strong> TEEs have side-channel risks; FHE has collusion risks</li>
</ul>

<h3>The Best of Both Worlds</h3>
<p>Inco combines both TEEs and FHE with Zero-Knowledge Proofs (ZKPs) and Multi-Party Computation (MPC) to enable confidential computation for any blockchain.</p>
        `
      },
      {
        id: 'fhe-use-cases',
        title: 'FHE Use Cases',
        content: `
<h2>Use Cases Unlocked by FHE</h2>

<h3>Healthcare</h3>
<p>Patient data could be securely shared and analyzed by multiple institutions without exposing sensitive medical records.</p>

<h3>Finance</h3>
<p>Private financial records could be processed on public servers without revealing amounts.</p>

<h3>AI and Machine Learning</h3>
<p>Train models on encrypted data from multiple sources without any party seeing the raw data.</p>

<h3>Supply Chains</h3>
<p>Companies could track shipments and verify product authenticity without revealing confidential business data to competitors.</p>
        `
      }
    ]
  },
  {
    id: 'intermediate-stage-5',
    title: 'BASED STAGE 5',
    level: 'intermediate',
    description: 'Summary and intermediate quiz preparation.',
    lessons: [
      {
        id: 'intermediate-summary',
        title: 'Intermediate Level Summary',
        content: `
<h2>What You've Learned</h2>

<p>Congratulations on completing the Intermediate level! Here's a summary:</p>

<h3>Key Concepts</h3>
<ul>
  <li><strong>Four Privacy Levels:</strong> Transparency, Anonymity, Confidentiality, Total Privacy</li>
  <li><strong>FHE:</strong> Computing on encrypted data without decryption</li>
  <li><strong>TEEs:</strong> Secure hardware enclaves for private computation</li>
  <li><strong>The trade-offs</strong> between different privacy approaches</li>
</ul>

<h3>Ready for the Quiz?</h3>
<p>Test your knowledge with the Intermediate Quiz before advancing to Advanced level!</p>
        `
      }
    ]
  },

  // ADVANCED LEVEL - CIRCLES STAGES 1-5
  {
    id: 'advanced-stage-1',
    title: 'CIRCLES STAGE 1',
    level: 'advanced',
    description: 'Introduction to Inco and confidential tokens.',
    lessons: [
      {
        id: 'what-is-inco',
        title: 'What is Inco?',
        content: `
<h2>The Confidentiality Layer of Web3</h2>

<p>Inco is the missing layer of the blockchain stack, empowering smart contracts with confidentiality to unlock use cases and enable widespread web3 adoption.</p>

<h3>The HTTPS Analogy</h3>
<p>Just like the Internet needed HTTPS to enable secure e-commerce and banking, blockchains need an encryption layer to enable confidential applications.</p>

<h3>What Inco Provides</h3>
<ul>
  <li><strong>TEEs</strong> (Trusted Execution Environments)</li>
  <li><strong>FHE</strong> (Fully Homomorphic Encryption)</li>
  <li><strong>ZKPs</strong> (Zero-Knowledge Proofs)</li>
  <li><strong>MPC</strong> (Multi-Party Computation)</li>
</ul>
        `
      },
      {
        id: 'what-are-cerc20s',
        title: 'What Are cERC20 Tokens?',
        content: `
<h2>Confidential ERC20 Tokens</h2>

<p>What if you could expand upon the original ERC20 standard by offering a means to achieve confidentiality of balances and transfer amounts onchain?</p>

<h3>The cERC20 Standard</h3>
<p>The cERC20 contract enables:</p>
<ul>
  <li><strong>Minting new tokens</strong> with encrypted balances</li>
  <li><strong>Transferring tokens</strong> between accounts while keeping amounts hidden</li>
  <li><strong>Managing allowances</strong> while keeping the amounts encrypted</li>
</ul>

<h3>Built on FHE</h3>
<p>cERC20s are built using Fully Homomorphic Encryption (FHE), which allows computations on encrypted data.</p>
        `
      }
    ]
  },
  {
    id: 'advanced-stage-2',
    title: 'CIRCLES STAGE 2',
    level: 'advanced',
    description: 'cERC20 advantages and payments use cases.',
    lessons: [
      {
        id: 'cerc20-advantages',
        title: 'cERC20 Advantages',
        content: `
<h2>Why Confidential Tokens Matter</h2>

<h3>Programmable Access Control</h3>
<p>cERC20s support programmable access control:</p>
<ul>
  <li><strong>Self-decryption:</strong> Users can always decrypt their own balances</li>
  <li><strong>Delegated access:</strong> Users can grant viewing permission to specific parties</li>
  <li><strong>Regulatory compliance:</strong> Built-in hooks for authorized oversight</li>
</ul>

<h3>Easy to Build With</h3>
<p>Developers familiar with ERC20s can easily transition to cERC20s. The core functionality remains the same—just with encrypted values under the hood.</p>

<h3>Composability</h3>
<p>Unlike some privacy solutions, cERC20s maintain composability with other DeFi protocols.</p>
        `
      },
      {
        id: 'payments-use-cases',
        title: 'Payments Use Cases',
        content: `
<h2>Payments-Related Use Cases</h2>

<h3>Onchain Salary and Compensation</h3>
<p>Companies can pay employees in stablecoins without revealing salaries to the public. The $99 billion payroll market could benefit from instant settlement and reduced fees.</p>

<h3>Confidential Retail Payments</h3>
<p>Consumers can use stablecoins for purchases without exposing their spending habits.</p>

<h3>Streaming Payments</h3>
<p>Pay for services by the second or minute without revealing payment details.</p>

<h3>Private Token Vesting</h3>
<p>Keep vesting schedules, cliff dates, and token allocations private while maintaining programmable automation.</p>
        `
      }
    ]
  },
  {
    id: 'advanced-stage-3',
    title: 'CIRCLES STAGE 3',
    level: 'advanced',
    description: 'Gaming and NFT confidentiality use cases.',
    lessons: [
      {
        id: 'gaming-use-cases',
        title: 'Gaming Use Cases',
        content: `
<h2>Gaming Confidentiality Use Cases</h2>

<h3>Poker and Games of Chance</h3>
<p>With Inco, values can be encrypted onchain while still being computed upon. Developers can build games with hands hidden from other players.</p>

<p>Inco can also generate <strong>hidden randomness</strong> that is trustless and provably secure—huge for proving games are fair.</p>

<h3>Fog of War Games</h3>
<p>Onchain strategy games can maintain true fog-of-war with:</p>
<ul>
  <li>Hidden move amounts</li>
  <li>Private unit positions</li>
  <li>Verifiable game logic</li>
  <li>Fair outcome resolution</li>
</ul>
        `
      },
      {
        id: 'nft-use-cases',
        title: 'NFT Use Cases',
        content: `
<h2>NFT Confidentiality Use Cases</h2>

<h3>Confidential NFT Ownership</h3>
<p>NFT platforms can offer confidential ownership records and private sale amounts while maintaining verifiable authenticity.</p>

<h3>Confidential NFT Metadata</h3>
<p>This opens entirely new design spaces:</p>
<ul>
  <li>NFTs with stats hidden until gameplay conditions are met</li>
  <li>Educational content encrypted until purchase</li>
  <li>Collectible packs where rarity is unknown until reveal</li>
  <li>True lootbox mechanics with genuine surprise</li>
</ul>
        `
      }
    ]
  },
  {
    id: 'advanced-stage-4',
    title: 'CIRCLES STAGE 4',
    level: 'advanced',
    description: 'DeFi and governance confidentiality use cases.',
    lessons: [
      {
        id: 'defi-use-cases',
        title: 'DeFi Use Cases',
        content: `
<h2>DeFi Confidentiality Use Cases</h2>

<h3>Private Trading</h3>
<p>Enable private trading on DEXs where traders can hide their positions, order sizes, and strategies. This mitigates front-running and other predatory tactics.</p>

<h3>Blind Auctions</h3>
<p>Auction protocols can maintain truly confidential bid amounts and hidden bidder participation while ensuring verifiable winner determination.</p>

<h3>Confidential AMMs</h3>
<p>AMM protocols can maintain confidential pool compositions and private liquidity amounts, protecting from MEV extraction and sandwich attacks.</p>

<h3>Private Lending</h3>
<p>Keep loan amounts and collateral balances hidden while maintaining automated liquidation mechanisms.</p>
        `
      },
      {
        id: 'governance-use-cases',
        title: 'Governance Use Cases',
        content: `
<h2>Governance Confidentiality Use Cases</h2>

<h3>Confidential DAO Governance</h3>
<p>Private voting that prevents:</p>
<ul>
  <li>Vote buying</li>
  <li>Social pressure</li>
  <li>Last-minute vote manipulation</li>
</ul>
<p>While still ensuring verifiable, tamper-proof results.</p>

<h3>Private Treasury Management</h3>
<p>DAOs can manage treasury allocations without exposing positions to adversaries or front-runners.</p>

<h3>Prediction Markets</h3>
<p>Create prediction markets where bets are hidden until resolution, preventing manipulation based on visible betting patterns.</p>
        `
      }
    ]
  },
  {
    id: 'advanced-stage-5',
    title: 'CIRCLES STAGE 5',
    level: 'advanced',
    description: 'Building with Inco and advanced summary.',
    lessons: [
      {
        id: 'building-with-inco',
        title: 'Building with Inco',
        content: `
<h2>Developer Experience with Inco</h2>

<p>Inco provides an encryption-enabled version of the Ethereum Virtual Machine. Developers can build confidential blockchain applications using familiar tools:</p>

<ul>
  <li><strong>Solidity</strong> - Same language you already know</li>
  <li><strong>MetaMask</strong> - Standard wallet integration</li>
  <li><strong>Remix</strong> - For quick prototyping</li>
  <li><strong>Hardhat</strong> - For professional development</li>
</ul>

<p>No need to learn new languages or frameworks!</p>

<h3>Example: Onchain Poker</h3>
<p>A developer looking to build an onchain poker game on Ethereum could store the core game logic on the Ethereum network and offload features that require confidentiality, such as each player's hand of cards, to the Inco network.</p>
        `
      },
      {
        id: 'advanced-summary',
        title: 'Advanced Level Summary',
        content: `
<h2>Congratulations!</h2>

<p>You've completed the Advanced level and now have a comprehensive understanding of blockchain confidentiality!</p>

<h3>What You've Learned</h3>
<ul>
  <li><strong>Inco's role</strong> as the confidentiality layer of Web3</li>
  <li><strong>cERC20 tokens</strong> and how they work</li>
  <li><strong>Real-world use cases</strong> across payments, gaming, NFTs, DeFi, and governance</li>
  <li><strong>How to build</strong> confidential applications with familiar tools</li>
</ul>

<h3>Ready for the Final Quiz?</h3>
<p>Complete the Advanced Quiz to test your knowledge and earn your completion badge!</p>
        `
      }
    ]
  }
];

export function getModuleById(id: string): Module | undefined {
  return modules.find(m => m.id === id);
}

export function getLessonById(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModuleById(moduleId);
  return module?.lessons.find(l => l.id === lessonId);
}

export function getModulesByLevel(level: 'beginner' | 'intermediate' | 'advanced' | 'all'): Module[] {
  if (level === 'all') return modules;
  return modules.filter(m => m.level === level);
}
