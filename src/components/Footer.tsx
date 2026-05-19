"use client";
const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-surface border-t border-border-light pt-16 mt-16">
      
      <div className="container mx-auto px-6 max-w-7xl mb-12 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
        
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-gradient-to-br from-brand-primary to-brand-accent text-white w-8 h-8 flex items-center justify-center rounded-lg font-heading font-extrabold text-xl">
              Z
            </span>

            <span className="font-heading font-bold text-xl text-text-primary">
              KP<span className="text-brand-primary">Zone</span> Stays
            </span>
          </div>

          <p className="text-text-secondary text-sm leading-relaxed max-w-[300px]">
            Your trusted partner in finding the perfect
            student accommodation. Premium living
            experiences curated just for you.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-base font-semibold mb-5 text-text-primary">
            Company
          </h4>

          <ul className="flex flex-col gap-3 list-none">
            <li>
              <a
                href="#"
                className="text-text-secondary text-sm transition-colors duration-150 hover:text-brand-primary"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-text-secondary text-sm transition-colors duration-150 hover:text-brand-primary"
              >
                Careers
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-text-secondary text-sm transition-colors duration-150 hover:text-brand-primary"
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-text-secondary text-sm transition-colors duration-150 hover:text-brand-primary"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-base font-semibold mb-5 text-text-primary">
            Support
          </h4>

          <ul className="flex flex-col gap-3 list-none">
            <li>
              <a
                href="#"
                className="text-text-secondary text-sm transition-colors duration-150 hover:text-brand-primary"
              >
                Help Center
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-text-secondary text-sm transition-colors duration-150 hover:text-brand-primary"
              >
                Terms of Service
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-text-secondary text-sm transition-colors duration-150 hover:text-brand-primary"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-text-secondary text-sm transition-colors duration-150 hover:text-brand-primary"
              >
                Cancellation Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-base font-semibold mb-5 text-text-primary">
            Contact Us
          </h4>

          <ul className="flex flex-col gap-3 list-none">
            <li>
              <a
                href="tel:+911234567890"
                className="text-text-secondary text-sm transition-colors duration-150 hover:text-brand-primary"
              >
                +91 1234567890
              </a>
            </li>

            <li>
              <a
                href="mailto:name@gmail.com"
                className="text-text-secondary text-sm transition-colors duration-150 hover:text-brand-primary"
              >
                name@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center p-6 border-t border-border-light text-text-tertiary text-sm">
        <p>
          &copy; {new Date().getFullYear()} KP Zone
          Stays. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;