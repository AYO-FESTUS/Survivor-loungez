const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Survivor's Lounge</p>
          <p>
            <a
              href="/privacy-policy"
              className="text-blue-400 hover:underline"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
