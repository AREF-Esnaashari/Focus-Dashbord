import { useEffect } from 'react';

export function ErrorFetch({ errFetching }) {
  useEffect(() => {
    setTimeout(() => {
      localStorage.clear();
      location.reload();
    }, 1000);
  }, []);
  return (
    <div className="ErrorFeatch">
      <h2>🔴</h2>
      <h1>{errFetching}</h1>
      <span>please try Again</span>
    </div>
  );
}
