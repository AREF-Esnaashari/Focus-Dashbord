import { useState } from 'react';

export function WelcomeForm() {
  const [user, setUser] = useState(() => {
    let storage = JSON.parse(localStorage.getItem('userVorodi'));
    return storage || {};
  });

  function handleUser(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSaveUser() {
    localStorage.setItem('userVorodi', JSON.stringify(user));
    location.reload();
  }

  function handleLogOut() {
    localStorage.clear();
    location.reload();
  }
  let isValid = !user.name || !user.city || user.name.trim() === '';

  let validUser = localStorage.getItem('userVorodi');

  return (
    <div className="WelcomeForm">
      {validUser ? (
        <>
          <div className="formLogout">
            <h1>Name: {user.name}</h1>
            <h1>City: {user.city}</h1>
            <button onClick={handleLogOut} className="LogoutBtn">
              LogOut
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="name">What's Your Name?</label>
            <input type="text" name="name" id="name" onChange={(e) => handleUser(e)} />
          </div>
          <div>
            <label htmlFor="city">Which country do you like??</label>
            <select id="city" name="city" value={user.city || ''} onChange={(e) => handleUser(e)}>
              <option value="" className="op" disabled>
                Select your city
              </option>
              <option value="karaj" className="op">
                karaj
              </option>
              <option value="tehran" className="op">
                Tehran
              </option>
              <option value="kerman" className="op">
                Kerman
              </option>
            </select>
          </div>
          <div>
            <button
              onClick={handleSaveUser}
              className={isValid ? 'disBtn' : 'truBtn'}
              disabled={isValid}
            >
              Login
            </button>
          </div>
        </>
      )}
    </div>
  );
}
