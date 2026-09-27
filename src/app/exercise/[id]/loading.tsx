const Loading = () => {
  return (
    <main className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">

        <div className="w-full">
          <div className="skeleton h-[400px] w-full rounded-2xl sm:h-[500px] lg:h-[600px]" />
        </div>

        <div className="w-full">

          <div className="skeleton h-10 w-3/4 rounded-lg sm:h-12" />

          <div className="mt-5 space-y-3">
            <div className="skeleton h-4 w-full" />
            <div className="skeleton h-4 w-11/12" />
            <div className="skeleton h-4 w-4/5" />
          </div>

          <div className="mt-6 flex gap-2">
            <div className="skeleton h-7 w-20 rounded-full" />
            <div className="skeleton h-7 w-24 rounded-full" />
            <div className="skeleton h-7 w-20 rounded-full" />
          </div>

          <div className="mt-7 overflow-hidden rounded-2xl bg-[#15171D]">
            <div className="grid grid-cols-2">

              <div className="border-b border-r border-gray-700 p-4">
                <div className="skeleton h-3 w-20" />
                <div className="skeleton mt-3 h-5 w-28" />
              </div>

              <div className="border-b border-gray-700 p-4">
                <div className="skeleton h-3 w-20" />
                <div className="skeleton mt-3 h-5 w-24" />
              </div>

              <div className="border-b border-r border-gray-700 p-4">
                <div className="skeleton h-3 w-12" />
                <div className="skeleton mt-3 h-5 w-10" />
              </div>

              <div className="border-b border-gray-700 p-4">
                <div className="skeleton h-3 w-12" />
                <div className="skeleton mt-3 h-5 w-16" />
              </div>

              <div className="border-b border-r border-gray-700 p-4">
                <div className="skeleton h-3 w-20" />
                <div className="skeleton mt-3 h-5 w-20" />
              </div>

              <div className="border-b border-gray-700 p-4">
                <div className="skeleton h-3 w-20" />
                <div className="skeleton mt-3 h-5 w-24" />
              </div>

              <div className="col-span-2 p-4">
                <div className="skeleton h-3 w-16" />
                <div className="skeleton mt-3 h-5 w-12" />
              </div>

            </div>
          </div>

          <div className="mt-8">
            <div className="skeleton h-8 w-48 rounded-lg" />

            <div className="mt-5 space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="skeleton h-6 w-6 shrink-0 rounded-full" />
                  <div className="skeleton h-5 w-full" />
                </div>
              ))}
            </div>
          </div>

       
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <div className="skeleton h-12 w-full rounded-lg sm:w-52" />
            <div className="skeleton h-12 w-full rounded-lg sm:w-40" />
          </div>

        </div>
      </div>
    </main>
  );
};

export default Loading;