export default function ItemPreview() {
  return (
    <div className="z-0">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className=" mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Dunder Mifflin is finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Thats what she said!<br></br>Boss like Michael, work like Dwight, prank like Jim, love like Pam, sass like Stanley.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}


              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection<br></br> (BTW, we dont sell paper here!)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
