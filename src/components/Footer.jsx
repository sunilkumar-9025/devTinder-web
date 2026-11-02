const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-transparent text-base-content fixed bottom-0 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.3)]">
      <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
      </aside>
    </footer>
  );
};

export default Footer;
