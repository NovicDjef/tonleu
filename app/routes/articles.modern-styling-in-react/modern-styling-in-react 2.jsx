import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Fragment, useState } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './modern-styling-in-react.module.css';

const title = 'Bibliothèque de Langages Futuriste';
const description = 'Une collection interactive d\'algorithmes et de patterns optimisés en JavaScript/TypeScript, React, Node.js et plus. Explorez les implémentations avancées avec une interface futuriste.';

export const meta = () => {
  return baseMeta({
    title,
    description,
  });
};

const codeLibrary = [
  {
    id: 'binary-search',
    title: 'Binary Search Algorithm',
    language: 'TypeScript',
    category: 'Algorithms',
    complexity: 'O(log n)',
    description: 'Recherche binaire optimisée avec complexité O(log n). Divise récursivement l\'espace de recherche pour trouver un élément dans un tableau trié.',
    explanation: 'La recherche binaire est l\'un des algorithmes les plus fondamentaux. Elle compare l\'élément recherché avec l\'élément du milieu, puis élimine la moitié qui ne peut pas contenir l\'élément.',
    tags: ['Search', 'Divide & Conquer', 'Sorted Array'],
    code: `/**
 * Recherche binaire optimisée pour tableaux triés
 * @param arr - Tableau trié d'éléments comparables
 * @param target - Élément à rechercher
 * @returns Index de l'élément ou -1 si non trouvé
 */
function binarySearch<T>(arr: T[], target: T): number {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    
    if (arr[mid] === target) {
      return mid;
    }
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// Version récursive
function binarySearchRecursive<T>(
  arr: T[], 
  target: T, 
  left: number = 0, 
  right: number = arr.length - 1
): number {
  if (left > right) return -1;
  
  const mid = left + Math.floor((right - left) / 2);
  
  if (arr[mid] === target) return mid;
  
  return arr[mid] < target
    ? binarySearchRecursive(arr, target, mid + 1, right)
    : binarySearchRecursive(arr, target, left, mid - 1);
}

// Exemple d'utilisation
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(numbers, 7)); // Output: 3`
  },
  {
    id: 'quick-sort',
    title: 'Quick Sort Optimisé',
    language: 'JavaScript',
    category: 'Algorithms',
    complexity: 'O(n log n)',
    description: 'Tri rapide avec pivot médian-de-trois et optimisation pour petits tableaux. Combine efficacité et robustesse.',
    explanation: 'Quick Sort utilise divide-and-conquer avec partitioning. L\'optimisation médian-de-trois évite les performances dégradées sur tableaux déjà triés.',
    tags: ['Sorting', 'Divide & Conquer', 'In-place'],
    code: `/**
 * Quick Sort optimisé avec médian-de-trois
 * @param arr - Tableau à trier
 * @param left - Index de début
 * @param right - Index de fin
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;
  
  // Optimisation: insertion sort pour petits tableaux
  if (right - left < 10) {
    return insertionSortRange(arr, left, right);
  }
  
  const pivotIndex = medianOfThree(arr, left, right);
  const partitionIndex = partition(arr, left, right, pivotIndex);
  
  quickSort(arr, left, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, right);
  
  return arr;
}

function medianOfThree(arr, left, right) {
  const mid = Math.floor((left + right) / 2);
  
  if (arr[left] > arr[mid]) swap(arr, left, mid);
  if (arr[mid] > arr[right]) swap(arr, mid, right);
  if (arr[left] > arr[mid]) swap(arr, left, mid);
  
  return mid;
}

function partition(arr, left, right, pivotIndex) {
  const pivotValue = arr[pivotIndex];
  swap(arr, pivotIndex, right);
  
  let storeIndex = left;
  
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, storeIndex);
      storeIndex++;
    }
  }
  
  swap(arr, storeIndex, right);
  return storeIndex;
}

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

function insertionSortRange(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    const key = arr[i];
    let j = i - 1;
    
    while (j >= left && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`
  },
  {
    id: 'react-hooks',
    title: 'Custom React Hooks',
    language: 'React/TypeScript',
    category: 'Frontend',
    complexity: 'O(1)',
    description: 'Hooks React personnalisés pour la gestion d\'état avancée, effets optimisés et logique réutilisable.',
    explanation: 'Les hooks personnalisés encapsulent la logique d\'état et d\'effets, permettant une réutilisation élégante à travers les composants.',
    tags: ['React', 'State Management', 'Custom Hooks'],
    code: `/**
 * Hook pour gérer un état avec localStorage persistant
 */
function useLocalStorage<T>(
  key: string, 
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

/**
 * Hook pour debounce des valeurs
 */
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

/**
 * Hook pour API calls avec loading et error states
 */
function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}`
  },
  {
    id: 'nodejs-server',
    title: 'Node.js Server Optimisé',
    language: 'Node.js/TypeScript',
    category: 'Backend',
    complexity: 'O(1)',
    description: 'Serveur Express moderne avec middleware de sécurité, validation TypeScript et gestion d\'erreurs robuste.',
    explanation: 'Architecture serveur scalable avec patterns modernes: middleware chainable, validation de schémas et gestion centralisée des erreurs.',
    tags: ['Express', 'Middleware', 'API', 'Security'],
    code: `import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

interface ApiError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

/**
 * Configuration du serveur Express optimisé
 */
class Server {
  public app: express.Application;
  
  constructor() {
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
    this.setupErrorHandling();
  }

  private setupMiddleware(): void {
    // Sécurité
    this.app.use(helmet());
    
    // CORS configuré
    this.app.use(cors({
      origin: process.env.NODE_ENV === 'production' 
        ? ['https://tonleu.com'] 
        : ['http://localhost:3000'],
      credentials: true
    }));

    // Rate limiting
    this.app.use('/api/', rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limite chaque IP à 100 requêtes par windowMs
      message: 'Trop de requêtes, réessayez plus tard.'
    }));

    // Body parsing
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(express.urlencoded({ extended: true }));
  }

  private setupRoutes(): void {
    // Route de santé
    this.app.get('/health', (req: Request, res: Response) => {
      res.status(200).json({ 
        status: 'OK', 
        timestamp: new Date().toISOString() 
      });
    });

    // Routes API
    this.app.use('/api/users', this.createUserRoutes());
  }

  private createUserRoutes(): express.Router {
    const router = express.Router();

    router.get('/', async (req: Request, res: Response, next: NextFunction) => {
      try {
        // Logic ici
        res.json({ users: [] });
      } catch (error) {
        next(error);
      }
    });

    return router;
  }

  private setupErrorHandling(): void {
    // 404 handler
    this.app.use('*', (req: Request, res: Response) => {
      res.status(404).json({
        error: 'Route non trouvée',
        path: req.originalUrl
      });
    });

    // Global error handler
    this.app.use((
      error: ApiError, 
      req: Request, 
      res: Response, 
      next: NextFunction
    ) => {
      const statusCode = error.statusCode || 500;
      const message = error.message || 'Erreur serveur interne';

      console.error('Server Error:', error);

      res.status(statusCode).json({
        error: message,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
      });
    });
  }

  public start(port: number = 3000): void {
    this.app.listen(port, () => {
      console.log(\`🚀 Serveur démarré sur le port \${port}\`);
    });
  }
}

export default new Server();`
  }
];

function CodeCard({ item, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(item.code);
      // Could add toast notification here
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className={styles.codeCard} data-index={index}>
      {/* Header avec info du langage */}
      <div className={styles.cardHeader}>
        <div className={styles.languageInfo}>
          <div className={styles.titleRow}>
            <Heading level={4} as="h3" className={styles.cardTitle}>
              {item.title}
            </Heading>
            <div className={styles.badges}>
              <span className={styles.languageBadge} data-language={item.language.toLowerCase()}>
                {item.language}
              </span>
              <span className={styles.categoryBadge}>
                {item.category}
              </span>
              <span className={styles.complexityBadge}>
                {item.complexity}
              </span>
            </div>
          </div>
          <Text size="m" className={styles.cardDescription}>
            {item.description}
          </Text>
          <div className={styles.tags}>
            {item.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.cardActions}>
          <button
            className={styles.expandButton}
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Réduire' : 'Agrandir'}
          >
            {isExpanded ? '🗙' : '⛶'}
          </button>
          <button
            className={styles.collapseButton}
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? 'Déplier' : 'Replier'}
          >
            {isCollapsed ? '▶' : '▼'}
          </button>
        </div>
      </div>

      {/* Explication technique */}
      <div className={styles.explanation}>
        <Text size="l" as="p">
          {item.explanation}
        </Text>
      </div>

      {/* Container de code */}
      <div className={`${styles.codeContainer} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.codeHeader}>
          <div className={styles.codeTitle}>
            <span>💻 Code Source - {item.language}</span>
          </div>
          <div className={styles.codeControls}>
            <button className={styles.copyButton} onClick={handleCopy}>
              📋 Copier
            </button>
          </div>
        </div>
        
        <div className={`${styles.codeBlock} ${isCollapsed ? styles.collapsed : ''}`}>
          <pre className={styles.code}>
            <code>{item.code}</code>
          </pre>
          
          {isCollapsed && (
            <div className={styles.codeOverlay}>
              <button 
                className={styles.showMoreButton}
                onClick={() => setIsCollapsed(false)}
              >
                Voir tout le code →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ModernStylingInReact() {
  return (
    <Fragment>
      <Section className={styles.library}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <Heading level={1} as="h1" className={styles.title}>
              <DecoderText text={title} delay={300} />
            </Heading>
            <Text size="xl" as="p" className={styles.description}>
              {description}
            </Text>
            <Divider className={styles.divider} />
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.introduction}>
            <Text size="l" as="p">
              Explorez ma collection personnelle d'algorithmes optimisés, de patterns React avancés, 
              et d'architectures backend robustes. Chaque implémentation est documentée avec 
              complexité algorithmique et explications détaillées.
            </Text>
          </div>

          <div className={styles.libraryGrid}>
            {codeLibrary.map((item, index) => (
              <CodeCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{codeLibrary.length}</span>
              <span className={styles.statLabel}>Algorithmes</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>4</span>
              <span className={styles.statLabel}>Languages</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>∞</span>
              <span className={styles.statLabel}>Optimisations</span>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </Fragment>
  );
}