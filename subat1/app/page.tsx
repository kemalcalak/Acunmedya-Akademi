"use client";

import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default function Home() {
  // Kullanıcı bilgisi için state
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getRandomUserId = () => Math.floor(Math.random() * 10) + 1;

  const fetchUser = async (userId: number = 1) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      if (!response.ok) {
        throw new Error("Kullanıcı bilgisi alınamadı");
      }

      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const getNewUser = () => {
    const randomId = getRandomUserId();
    fetchUser(randomId);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center max-w-lg w-full">
        <h1 className="text-2xl font-bold text-center">
          JSONPlaceholder API Kullanıcı Bilgileri
        </h1>

        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
          {loading ? (
            <div className="p-8 flex justify-center">
              <p className="text-gray-500">Yükleniyor...</p>
            </div>
          ) : error ? (
            <div className="p-8 flex justify-center">
              <p className="text-red-500">{error}</p>
            </div>
          ) : user ? (
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      @{user.username}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      E-posta
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {user.email}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Telefon
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {user.phone}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Web Sitesi
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {user.website}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Adres
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {user.address.street}, {user.address.suite},{" "}
                      {user.address.city}, {user.address.zipcode}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Şirket
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      {user.company.name}
                    </p>
                    <p className="text-xs italic text-gray-500 dark:text-gray-400">
                      "{user.company.catchPhrase}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 flex justify-center">
              <p className="text-gray-500">Kullanıcı bilgisi bulunamadı</p>
            </div>
          )}
        </div>

        <button
          onClick={getNewUser}
          disabled={loading}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed font-medium text-sm sm:text-base h-12 px-6 w-full max-w-xs"
        >
          {loading ? "Yükleniyor..." : "Yeni Kullanıcı Getir"}
        </button>
      </main>
    </div>
  );
}
