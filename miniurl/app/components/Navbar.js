// app/components/Navbar.js
export default function Navbar() {
  return (
    <nav className="bg-blue-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side */}
        <h1 className="text-3xl font-bold text-white">MiniURL</h1>

        {/* Right side */}
        <div className="flex gap-6">
          <a href="#" className="text-white hover:text-gray-300 transition">Home</a>
          <a href="#" className="text-white hover:text-gray-300 transition">About</a>
          <a href="#" className="text-white hover:text-gray-300 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
