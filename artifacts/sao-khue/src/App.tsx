import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import CategoryPage from "@/pages/CategoryPage";
import PostPage from "@/pages/PostPage";
import Admin from "@/pages/Admin";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/lien-he" component={Contact} />
      <Route path="/bao-gia" component={Pricing} />
      <Route path="/admin" component={Admin} />
      <Route path="/bai-viet/:slug" component={PostPage} />

      <Route path="/gioi-thieu" component={() => <CategoryPage category="gioi-thieu" />} />
      <Route path="/gioi-thieu/:sub" component={(p) => <CategoryPage category="gioi-thieu" subSlug={p.params.sub} />} />

      <Route path="/dich-vu" component={() => <CategoryPage category="dich-vu" />} />
      <Route path="/dich-vu/:sub" component={(p) => <CategoryPage category="dich-vu" subSlug={p.params.sub} />} />

      <Route path="/cong-trinh" component={() => <CategoryPage category="cong-trinh" />} />
      <Route path="/cong-trinh/:sub" component={(p) => <CategoryPage category="cong-trinh" subSlug={p.params.sub} />} />

      <Route path="/kinh-nghiem" component={() => <CategoryPage category="kinh-nghiem" />} />
      <Route path="/kinh-nghiem/:sub" component={(p) => <CategoryPage category="kinh-nghiem" subSlug={p.params.sub} />} />

      {/* Legacy alias routes still available */}
      <Route path="/du-an" component={Projects} />
      <Route path="/about-legacy" component={About} />
      <Route path="/services-legacy" component={Services} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
