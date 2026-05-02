import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import LenisProvider from "@/components/LenisProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
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

import ClinixAICaseStudy from "@/app/case-study/clinixAI";
import Synergies4CaseStudy from "@/app/case-study/synergies4";
import CurehireCaseStudy from "@/app/case-study/curehire";
import OwaspCaseStudy from "@/app/case-study/owasp";
import FeatureCaseStudy from "@/app/case-study/feature";

import VendorMatrixPage from "@/app/resources/vendor-matrix";
import SearchPage from "@/app/dabis/search";

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
      <Route path="/case-study/clinixAI" component={ClinixAICaseStudy} />
      <Route path="/case-study/synergies4" component={Synergies4CaseStudy} />
      <Route path="/case-study/curehire" component={CurehireCaseStudy} />
      <Route path="/case-study/owasp" component={OwaspCaseStudy} />
      <Route path="/case-study/feature" component={FeatureCaseStudy} />
      <Route path="/resources/vendor-matrix" component={VendorMatrixPage} />
      <Route path="/dabis/search" component={SearchPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AnimatedRoutes() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Router />
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <LenisProvider>
        <Cursor />
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
      </LenisProvider>
    </WouterRouter>
  );
}

export default App;
