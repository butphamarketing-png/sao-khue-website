import { Switch, Route, Router as WouterRouter, Redirect, useParams } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import ThietKe from "@/pages/ThietKe";
import XayMoi from "@/pages/XayMoi";
import XayNha from "@/pages/XayNha";
import CaiTaoNha from "@/pages/CaiTaoNha";
import MauNhaHub from "@/pages/MauNhaHub";
import MauNhaList from "@/pages/MauNhaList";
import MauNhaDetail from "@/pages/MauNhaDetail";
import Contact from "@/pages/Contact";
import CategoryPage from "@/pages/CategoryPage";
import PostPage from "@/pages/PostPage";
import Admin from "@/pages/Admin";
import { SiteHead } from "@/components/SiteHead";
import { SiteLoader } from "@/components/SiteLoader";
import { SiteVisitTracker } from "@/components/SiteVisitTracker";
import { QuoteRequestProvider } from "@/lib/quote-request-context";
import { LegacySlugRedirect } from "@/components/LegacySlugRedirect";
import { BaiVietCanonicalRedirect } from "@/components/BaiVietCanonicalRedirect";

const queryClient = new QueryClient();

function KinhNghiemSubRedirect() {
  const { sub } = useParams<{ sub: string }>();
  return <Redirect to={sub ? `/tin-tuc/${sub}` : "/tin-tuc"} replace />;
}

function KinhNghiemXayDungSubRedirect() {
  const { sub } = useParams<{ sub: string }>();
  return <Redirect to={sub ? `/tin-tuc/${sub}` : "/tin-tuc"} replace />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/lien-he" component={Contact} />
      <Route path="/bao-gia" component={Pricing} />
      <Route path="/thiet-ke" component={ThietKe} />
      <Route path="/xay-moi" component={XayMoi} />
      <Route path="/xay-nha" component={XayNha} />
      <Route path="/cai-tao-nha" component={CaiTaoNha} />
      <Route path="/mau-nha/:category/:slug" component={MauNhaDetail} />
      <Route path="/mau-nha/:category" component={MauNhaList} />
      <Route path="/mau-nha" component={MauNhaHub} />
      <Route path="/admin" component={Admin} />
      <Route path="/adminbp">
        <Redirect to="/admin" />
      </Route>
      <Route path="/bai-viet/thiet-ke-biet-thu-thu-duc">
        <Redirect to="/cong-trinh/thiet-ke-nha-biet-thu-thu-duc" />
      </Route>
      <Route path="/bai-viet/:slug" component={BaiVietCanonicalRedirect} />

      <Route path="/dich-vu" component={() => <CategoryPage category="dich-vu" />} />
      <Route path="/dich-vu/:slug" component={PostPage} />

      <Route path="/cong-trinh" component={() => <CategoryPage category="cong-trinh" />} />
      <Route path="/cong-trinh/:slug" component={PostPage} />

      <Route path="/tin-tuc" component={() => <CategoryPage category="tin-tuc" />} />
      <Route path="/tin-tuc/:slug" component={PostPage} />

      <Route path="/gioi-thieu">
        <Redirect to="/bai-viet/ve-chung-toi" />
      </Route>
      <Route path="/gioi-thieu/:sub">
        <Redirect to="/bai-viet/ve-chung-toi" />
      </Route>

      {/* Legacy URLs (bookmarks, Google, old WordPress) */}
      <Route path="/kinh-nghiem">
        <Redirect to="/tin-tuc" />
      </Route>
      <Route path="/kinh-nghiem/:sub" component={KinhNghiemSubRedirect} />
      <Route path="/kinh-nghiem-xay-dung">
        <Redirect to="/tin-tuc" />
      </Route>
      <Route path="/kinh-nghiem-xay-dung/:sub" component={KinhNghiemXayDungSubRedirect} />
      <Route path="/contact">
        <Redirect to="/lien-he" />
      </Route>
      <Route path="/about">
        <Redirect to="/bai-viet/ve-chung-toi" />
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

      {/* Old WordPress post URLs at root, e.g. /sua-nha-tron-goi-tphcm from Google */}
      <Route path="/:slug" component={LegacySlugRedirect} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={(import.meta.env.BASE_URL ?? "/").replace(/\/$/, "")}>
          <QuoteRequestProvider>
            <SiteHead />
            <SiteVisitTracker />
            <SiteLoader />
            <Router />
          </QuoteRequestProvider>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
