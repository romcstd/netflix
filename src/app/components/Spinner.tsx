export default function Spinner() {
  return (
    <>
      <div className="py-32 flex justify-center items-center h-full w-full">
        <span className="text-white mr-4">Loading</span> <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white" />
      </div>
    </>
  );
}