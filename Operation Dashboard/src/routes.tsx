import { createHashRouter } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import { KnowledgeBase } from './pages/KnowledgeBase';
import { DocumentPage } from './pages/DocumentPage';
import { SOPs } from './pages/SOPs';
import { Scenarios } from './pages/Scenarios';
import { Tools } from './pages/Tools';
import { ScoreCalculator } from './pages/ScoreCalculator';
import { Checklists } from './pages/Checklists';
import { Troubleshooter } from './pages/Troubleshooter';
import { Architecture } from './pages/Architecture';
import { QuickReference } from './pages/QuickReference';
import { Emergency } from './pages/Emergency';
import { Glossary } from './pages/Glossary';
import { Training } from './pages/Training';
import { AIReports } from './pages/AIReports';

// Using HashRouter for offline file:// compatibility
export const router = createHashRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/knowledge-base', element: <KnowledgeBase /> },
      { path: '/knowledge-base/:docId', element: <DocumentPage /> },
      { path: '/sops', element: <SOPs /> },
      { path: '/scenarios', element: <Scenarios /> },
      { path: '/tools', element: <Tools /> },
      { path: '/tools/score-calculator', element: <ScoreCalculator /> },
      { path: '/tools/checklists', element: <Checklists /> },
      { path: '/tools/troubleshooter', element: <Troubleshooter /> },
      { path: '/tools/architecture', element: <Architecture /> },
      { path: '/tools/quick-reference', element: <QuickReference /> },
      { path: '/tools/emergency', element: <Emergency /> },
      { path: '/tools/glossary', element: <Glossary /> },
      { path: '/training', element: <Training /> },
      { path: '/ai-reports', element: <AIReports /> },
    ],
  },
]);
