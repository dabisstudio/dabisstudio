import { Switch, Route, Router as WouterRouter } from "wouter";
import LenisProvider from "@/components/LenisProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFound from "@/pages/not-found";

import HomePage from "@/app/page";
import CompanyPage from "@/app/company/page";
import ContactPage from "@/app/contact/page";
import DesignAgencyPage from "@/app/design-agency/page";
import DevelopmentAgencyPage from "@/app/development-agency/page";
import AiDevelopmentPage from "@/app/ai-development/page";
import EmotionAiPage from "@/app/emotion-ai/page";
import EmotionTrackingDemoPage from "@/app/emotion-tracking-demo/page";
import EnterpriseAiPage from "@/app/enterprise-ai/page";
import GtmStrategyPage from "@/app/gtm-strategy/page";
import HealthcareAppsPage from "@/app/healthcare-apps/page";
import IotDevelopmentPage from "@/app/iot-development/page";
import VoiceAgentDemoPage from "@/app/voice-agent-demo/page";
import VoiceAgentsPage from "@/app/voice-agents/page";
import WorkPage from "@/app/work/page";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/company" component={CompanyPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/design-agency" component={DesignAgencyPage} />
      <Route path="/development-agency" component={DevelopmentAgencyPage} />
      <Route path="/ai-development" component={AiDevelopmentPage} />
      <Route path="/emotion-ai" component={EmotionAiPage} />
      <Route path="/emotion-tracking-demo" component={EmotionTrackingDemoPage} />
      <Route path="/enterprise-ai" component={EnterpriseAiPage} />
      <Route path="/gtm-strategy" component={GtmStrategyPage} />
      <Route path="/healthcare-apps" component={HealthcareAppsPage} />
      <Route path="/iot-development" component={IotDevelopmentPage} />
      <Route path="/voice-agent-demo" component={VoiceAgentDemoPage} />
      <Route path="/voice-agents" component={VoiceAgentsPage} />
      <Route path="/work" component={WorkPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <LenisProvider>
        <Header />
        <main>
          <Router />
        </main>
        <Footer />
      </LenisProvider>
    </WouterRouter>
  );
}

export default App;
