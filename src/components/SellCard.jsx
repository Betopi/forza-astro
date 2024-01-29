

export default function CarShopComponent(){
  return (
    <section className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16 mb-8 relative">
      <div className="bg-gray flex-100 items-center justify-center">
        <div className="flex items-stretch">
          <div
            className="bg-white p-8 w-64 shadow-lg rounded-lg overflow-hidden -mr-8 z-0"
            style={{
              boxShadow:
                "0 8px 12px rgba(0, 0, 0, 0.2), 0 12px 24px rgba(0, 0, 0, 0.2), 0 -4px 8px -2px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2 className="text-2xl font-semibold">Car shop</h2>
            <span className="text-gray-600 font-semibold">beto puto</span>
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-white-900 border rounded-full sm:w-auto hover:bg-black-300 bg-black"
              >
                Ordena ahora!
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
              </a>
            </div>
          </div>
          <div
            className="w-64 bg-cover bg-center shadow-lg rounded-lg my-5"
            style={{
              backgroundImage:
                "url(https://i.blogs.es/f46982/bocchi-the-rock/1366_2000.jpeg)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};


