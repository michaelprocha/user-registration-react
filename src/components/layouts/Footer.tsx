function Footer() {
  return (
    <footer className="flex justify-between p-6 font-grotesk bg-black text-white border-t-4 border-white">
      <p className="text-base">
        © 2024 BAUHAUS SYSTEMS. FORM FOLLOWS FUNCTION.
      </p>
      <nav className="flex gap-4 items-center">
        <p className="text-gray-300 text-sm cursor-pointer">PRIVACY</p>
        <p className="text-gray-300 text-sm cursor-pointer">TERMS</p>
        <p className="text-gray-300 text-sm cursor-pointer">SUPPORT</p>
      </nav>
    </footer>
  );
}

export default Footer;
