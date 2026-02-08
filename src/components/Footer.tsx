const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="w-full px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-4 text-center max-w-7xl mx-auto">
          <p className="text-sm text-muted-foreground">
           INDIA © 2025 Dhairya. All rights reserved.
          </p>
          {/* <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
