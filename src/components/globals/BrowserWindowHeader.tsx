export function BrowserWindowHeader() {
  return (
    <div className="bg-gray-100 h-5 rounded-t-lg flex items-center px-4">
      <div className="flex space-x-2">
        <div className="w-2 h-2 rounded-full bg-red-400"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
        <div className="w-2 h-2 rounded-full bg-green-400"></div>
      </div>
    </div>
  );
}
