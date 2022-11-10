import React, { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from "../../context/AuthProvider";

const Blogs = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="py-12">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="mb-12 space-y-2 text-start w-3/5 m-auto">
            <h2 className="text-3xl font-bold text-gray-800  md:text-4xl dark:text-white">
              Blogs
            </h2>

            <div className="py-16">
              <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="grid gap-12 md:gap-6 md:grid-cols-1 lg:gap-12">
                  <div className="group space-y-6">
                    <PhotoProvider
                      speed={() => 1000}
                      easing={(type) =>
                        type === 2
                          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }
                      maskOpacity={0.8}
                    >
                      <PhotoView src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png">
                        <img
                          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png"
                          alt="art cover"
                          loading="lazy"
                          width="1000"
                          height="667"
                          className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                        />
                      </PhotoView>
                    </PhotoProvider>

                    <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                      Difference between SQL and NoSQL
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      SQL is ther programming language use to interface with
                      relational databases. <br />
                      The main differences between SQL and NoSQL: <br />
                      <h3>1. Type</h3>
                      <small>
                        SQL databases are primarily called as Relational
                        Databases (RDBMS); whereas NoSQL database are primarily
                        called as non-relational or distributed database.
                      </small>
                      <h3>2. Language</h3>
                      <small>
                        SQL databases defines and manipulates data based
                        structured query language (SQL). <br />A NoSQL database
                        has dynamic schema for unstructured data. Data is stored
                        in many ways which means it can be document-oriented,
                        column-oriented, graph-based or organized as a KeyValue
                        store.
                      </small>
                      <h3>3. Scalability</h3>
                      <small>
                        In almost all situations SQL databases are vertically
                        scalable. This means that you can increase the load on a
                        single server by increasing things like RAM, CPU or SSD.
                        <br />
                        Aut on the other hand NoSQL databases are horizontally
                        scalable. This means that you handle more traffic by
                        sharding, or adding more servers in your NoSQL database.
                      </small>
                      <h3>4. Structure </h3>
                      <small>
                        SQL databases are table-based on the other hand NoSQL
                        databases are either key-value pairs, document-based,
                        graph databases or wide-column stores.
                      </small>
                      <h3>5. Property followed</h3>
                      <small>
                        SQL databases follow ACID properties (Atomicity,
                        Consistency, Isolation and Durability) whereas the NoSQL
                        database follows the Brewers CAP theorem (Consistency,
                        Availability and Partition tolerance).
                      </small>
                    </p>
                    <div className="flex gap-6 items-center">
                      <a
                        href="#"
                        className="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <img
                          className="w-8 h-8 object-cover rounded-full"
                          src={ user?.photoURL }
                          alt=""
                        />
                        <span className="hidden sm:block font-semibold text-base text-gray-600 dark:text-gray-200">
                          {user?.displayName}
                        </span>
                      </a>
                      <span className="w-max block font-light text-gray-500 sm:mt-0">
                        Aug 27 2022
                      </span>
                      <div className="flex gap-2 items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-400 dark:text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>2 min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="group space-y-6">
                    <PhotoProvider
                      speed={() => 1000}
                      easing={(type) =>
                        type === 2
                          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }
                      maskOpacity={0.8}
                    >
                      <PhotoView src="https://blog.miniorange.com/wp-content/uploads/sites/19/2021/12/jwt-structure.webp">
                        <img
                          src="https://blog.miniorange.com/wp-content/uploads/sites/19/2021/12/jwt-structure.webp"
                          alt="art cover"
                          loading="lazy"
                          width="1000"
                          height="667"
                          className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                        />
                      </PhotoView>
                    </PhotoProvider>
                    <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                      What is JWT, and how does it work?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      JSON Web Token (JWT) is an open standard (RFC 7519) that
                      defines a compact and self-contained way for securely
                      transmitting information between parties as a JSON object.
                      This information can be verified and trusted because it is
                      digitally signed.
                    </p>
                    <div className="flex flex-wrap gap-6 items-center">
                      <a
                        href="#"
                        className="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <img
                          className="w-8 h-8 object-cover rounded-full"
                          src={ user?.photoURL }
                          alt=""
                        />
                        <span className="hidden sm:block font-semibold text-base text-gray-600 dark:text-gray-200">
                        {user?.displayName}
                        </span>
                      </a>
                      <span className="w-max block font-light text-gray-500 sm:mt-0">
                        Aug 27 2022
                      </span>
                      <div className="flex gap-2 items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-400 dark:text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>2 min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="group space-y-6">
                    <PhotoProvider
                      speed={() => 1000}
                      easing={(type) =>
                        type === 2
                          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }
                      maskOpacity={0.8}
                    >
                      <PhotoView src="https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2Fmedia%2Fimages%2F10f382b8-05e7-4c25-b530-1e512b56b85b.png&w=750&q=75">
                        <img
                          src="https://www.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2Fmedia%2Fimages%2F10f382b8-05e7-4c25-b530-1e512b56b85b.png&w=750&q=75"
                          alt="art cover"
                          loading="lazy"
                          width="1000"
                          height="667"
                          className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                        />
                      </PhotoView>
                    </PhotoProvider>
                    <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                      What is the difference between javascript and NodeJS?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      JavaScript is a client-side scripting language that is
                      lightweight, cross-platform, and interpreted. Both Java
                      and HTML include it. Node.js, on the other hand, Node.js
                      is a V8-based server-side programming language.
                      <br />
                      JavaScript is a simple programming language that can be
                      used with any browser that has the JavaScript Engine
                      installed. Node.js, on the other hand, Node js is an
                      interpreter or execution environment for the JavaScript
                      programming language.
                    </p>
                    <div className="flex flex-wrap gap-6 items-center">
                      <a
                        href="#"
                        className="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <img
                          className="w-8 h-8 object-cover rounded-full"
                          src={ user?.photoURL }
                          alt=""
                        />
                        <span className="hidden sm:block font-semibold text-base text-gray-600 dark:text-gray-200">
                        {user?.displayName}
                        </span>
                      </a>
                      <span className="w-max block font-light text-gray-500 sm:mt-0">
                        Aug 27 2022
                      </span>
                      <div className="flex gap-2 items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-400 dark:text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>2 min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="group space-y-6">
                    <PhotoProvider
                      speed={() => 1000}
                      easing={(type) =>
                        type === 2
                          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
                          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
                      }
                      maskOpacity={0.8}
                    >
                      <PhotoView src="https://forum.golibrary.co/wp-content/uploads/2020/04/nodejs.png">
                        <img
                          src="https://forum.golibrary.co/wp-content/uploads/2020/04/nodejs.png"
                          alt="art cover"
                          loading="lazy"
                          width="1000"
                          height="667"
                          className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                        />
                      </PhotoView>
                    </PhotoProvider>
                    <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                      How does NodeJS handle multiple requests at the same time?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We know NodeJS application is single-threaded.
                      <br />
                      NodeJS receives multiple client requests and places them
                      into EventQueue. NodeJS is built with the concept of
                      event-driven architecture. NodeJS has its own EventLoop
                      which is an infinite loop that receives requests and
                      processes them.
                      <br />
                      If NodeJS can process the request without I/O blocking
                      then the event loop would itself process the request and
                      sends the response back to the client by itself. But, it
                      is possible to process multiple requests parallelly using
                      the NodeJS cluster module or worker_threads module.
                    </p>
                    <div className="flex flex-wrap gap-6 items-center">
                      <a
                        href="#"
                        className="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800"
                      >
                        <img
                          className="w-8 h-8 object-cover rounded-full"
                          src={ user?.photoURL }
                          alt=""
                        />
                        <span className="hidden sm:block font-semibold text-base text-gray-600 dark:text-gray-200">
                        {user?.displayName}
                        </span>
                      </a>
                      <span className="w-max block font-light text-gray-500 sm:mt-0">
                        Aug 27 2022
                      </span>
                      <div className="flex gap-2 items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-400 dark:text-gray-600"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>2 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
