// // context/MondayContext.tsx
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import mondaySdk from 'monday-sdk-js';

// const MondayContext = createContext(null);

// export const MondayProvider = ({ children }: { children: React.ReactNode }) => {
//   const [monday, setMonday] = useState(() => mondaySdk());
//   const [context, setContext] = useState(null);

//   useEffect(() => {

//     monday.listen('context', (res: any) => {
//       setContext(res?.data);
//     });

//     monday.get('context').then((res: any) => {
//       setContext(res?.data);
//     });
//   }, [monday]);

//   return (
//     <MondayContext.Provider value={{ monday, context }}>
//       {children}
//     </MondayContext.Provider>
//   );
// };

// export const useMonday = () => {
//   const ctx = useContext(MondayContext);
//   if (!ctx) throw new Error('useMonday must be used within a MondayProvider');
//   return ctx;
// };
