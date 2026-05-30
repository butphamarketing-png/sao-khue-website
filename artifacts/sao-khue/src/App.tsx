import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import CategoryPage from "@/pages/CategoryPage";
import PostPage from "@/pages/PostPage";
import Admin from "@/pages/Admin";
import { SiteHead } from "@/components/SiteHead";
import { SiteLoader } from "@/components/SiteLoader";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/lien-he" component={Contact} />
      <Route path="/bao-gia" component={Pricing} />
      <Route path="/admin" component={Admin} />
      <Route path="/bai-viet/thiet-ke-biet-thu-thu-duc">
        <Redirect to="/bai-viet/thiet-ke-nha-biet-thu-thu-duc" />
      </Route>
      <Route path="/bai-viet/:slug" component={PostPage} />

      <Route path="/gioi-thieu" component={() => <CategoryPage category="gioi-thieu" />} />
      <Route path="/gioi-thieu/:sub" component={(p) => <CategoryPage category="gioi-thieu" subSlug={p.params.sub} />} />

      <Route path="/dich-vu" component={() => <CategoryPage category="dich-vu" />} />
      <Route path="/dich-vu/:sub" component={(p) => <CategoryPage category="dich-vu" subSlug={p.params.sub} />} />

      <Route path="/cong-trinh" component={() => <CategoryPage category="cong-trinh" />} />
      <Route path="/cong-trinh/:sub" component={(p) => <CategoryPage category="cong-trinh" subSlug={p.params.sub} />} />

      <Route path="/kinh-nghiem" component={() => <CategoryPage category="kinh-nghiem" />} />
      <Route path="/kinh-nghiem/:sub" component={(p) => <CategoryPage category="kinh-nghiem" subSlug={p.params.sub} />} />

      {/* Legacy URLs (bookmarks, Google, old WordPress) */}
      <Route path="/kinh-nghiem-xay-dung">
        <Redirect to="/kinh-nghiem" />
      </Route>
      <Route path="/kinh-nghiem-xay-dung/:sub" component={(p) => <Redirect to={`/kinh-nghiem/${p.params.sub}`} />} />
      <Route path="/contact">
        <Redirect to="/lien-he" />
      </Route>
      <Route path="/about">
        <Redirect to="/gioi-thieu/ve-chung-toi" />
      </Route>
      <Route path="/services">
        <Redirect to="/dich-vu" />
      </Route>
      <Route path="/projects">
        <Redirect to="/cong-trinh" />
      </Route>
      <Route path="/pricing">
        <Redirect to="/bao-gia" />
      </Route>
      <Route path="/du-an">
        <Redirect to="/cong-trinh" />
      </Route>

      {/* Legacy alias routes still available */}
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
          <SiteHead />
          <SiteLoader />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
