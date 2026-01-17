function JournalCard({ entry, onEdit, onDelete }) {
  const { date, action, type, ticker, price, quantity, notes } = entry;

  return (
    <div className="bg-[#D9D9D9] rounded-xl w-full max-w-md overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm text-gray-700">Date: {date}</p>
          <div className="flex space-x-2">
            <span className="bg-[#B0BEC5] text-black px-2 py-1 rounded-full text-xs">{type}</span>
            <span
              className={`px-2 py-1 rounded-full text-xs ${action === "Buy" ?
                 "bg-[#2ECC71] text-black" : "bg-[#F20530] text-black"}`}>
              {ticker}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-700">Price: ${price}</p>
        <p className="text-sm text-gray-700 mb-2">Quantity: {quantity}</p>
        <hr className="my-2" />
        <p className="text-sm text-gray-800 max-h-32 overflow-y-auto break-words whitespace-pre-line">{notes}</p>
      </div>
      <div className="flex w-full">
        <button
          onClick={onEdit}
          className="w-1/2 bg-blue-400 text-white py-2 text-sm hover:bg-blue-600 transition">
          Edit
        </button>
        <button
          onClick={onDelete}
          className="w-1/2 bg-red-400 text-white py-2 text-sm hover:bg-red-600 transition">
          Delete
        </button>
      </div>
    </div>
  );
}

export default JournalCard;