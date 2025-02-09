import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { DocsPage } from './pages/DocsPage';
import { TryAIPage } from './pages/TryAIPage';
import { DashboardPage } from './pages/DashboardPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { ApiKeysPage } from './pages/ApiKeysPage';
import { ContactPage } from './pages/ContactPage';
import { SettingsPage } from './pages/SettingsPage';
import { TeamsPage } from './pages/TeamsPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { CreateBotPage } from './pages/CreateBotPage';
import { BillingPage } from './pages/BillingPage';
import { Layout } from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="docs/*" element={<DocsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="integrations" element={<IntegrationsPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="dashboard/api-keys" element={<ApiKeysPage />} />
        <Route path="dashboard/settings" element={<SettingsPage />} />
        <Route path="dashboard/team" element={<TeamsPage />} />
        <Route path="dashboard/bots/create" element={<CreateBotPage />} />
        <Route path="dashboard/billing" element={<BillingPage />} />
        <Route path="try-ai" element={<TryAIPage />} />
      </Route>
    </Routes>
  );
}

export default App;