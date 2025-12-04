import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <Layout>
      <div className="container-custom py-32">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-8xl font-display font-bold text-primary mb-4">
            404
          </h1>
          <h2 className="text-2xl font-display font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. Perhaps you've
            mistyped the URL or the page has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-primary">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
