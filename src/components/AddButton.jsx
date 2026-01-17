function AddButton({ onClick }) {
  return (
    <div className="fixed bottom-24 right-6 z-50">
        <button
          className="bg-[#d9d9d9] text-8xl text-[#2c2d3c] w-20 h-20 rounded-full flex justify-center
           items-center shadow-lg hover:bg-blue-300 transition leading-none relative overflow-hidden"
          onClick={onClick}>
          <span className="-mt-5">+</span>
        </button>
    </div>
  );
}

export default AddButton;