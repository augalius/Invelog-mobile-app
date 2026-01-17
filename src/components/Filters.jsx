function Filters({ filterDate, setFilterDate, filterAction, setFilterAction, filterType, setFilterType }) {
  return (
    <div className="flex flex-wrap justify-center gap-10 px-4 mt-4">
      <input
        type="date"
        value={filterDate}
        onChange={(event) => setFilterDate(event.target.value)}
        className="bg-[#d9d9d9] text-black rounded-full px-5 py-2 text-sm"
      />
      <select
        value={filterAction}
        onChange={(event) => setFilterAction(event.target.value)}
        className="bg-[#d9d9d9] text-black rounded-full px-5 py-2 text-sm">
        <option value="">Action</option>
        <option value="Buy">Buy</option>
        <option value="Sell">Sell</option>
      </select>
      <select
        value={filterType}
        onChange={(event) => setFilterType(event.target.value)}
        className="bg-[#d9d9d9] text-black rounded-full px-5 py-2 text-sm">
        <option value="">Type</option>
        <option value="Stocks">Stocks</option>
        <option value="Bonds">Bonds</option>
        <option value="ETFs">ETFs</option>
        <option value="Crypto">Crypto</option>
      </select>
    </div>
  );
}

export default Filters;
