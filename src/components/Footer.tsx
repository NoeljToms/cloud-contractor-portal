export const Footer = () => {
  return (
    <footer className="py-8 bg-sf-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} Acme Salesforce Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};