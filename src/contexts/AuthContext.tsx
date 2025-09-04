// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   address: string;
//   city: string;
//   zipCode: string;
//   role?: "admin" | "user";
// }

// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   login: (userData: User) => void;
//   logout: () => void;
//   updateProfile: (userData: Partial<User>) => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   const login = (userData: User) => {
//     setUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData)); 

//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   const updateProfile = (userData: Partial<User>) => {
//     if (user) {
//       // setUser({ ...user, ...userData });
//       const updatedUser = { ...user, ...userData };
//       setUser(updatedUser);
//       localStorage.setItem("user", JSON.stringify(updatedUser)); 

//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         login,
//         logout,
//         updateProfile,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  role?: "admin" | "user";
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // 👇 Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Invalid JSON in localStorage for 'user':", e);
      }
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const updateProfile = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
