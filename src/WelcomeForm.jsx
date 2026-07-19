import { useEffect, useRef } from 'react';

export function WelcomeForm({ user, setUser }) {

const isValid = !user.name?.trim() || !user.city?.trim();
  function handleUser(e) {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSaveUser() {
    localStorage.setItem('userVorodi', JSON.stringify(user));
    location.reload();
  }
  let refs=useRef()
  useEffect(() => {
    function EnterHandleClick(e) {
      if (e.code === 'Enter') {
        refs.current.click()
      }
    }
    document.addEventListener('keydown', EnterHandleClick);
    return () => document.removeEventListener('keydown', EnterHandleClick);
  }, []);
  return (
    <div className="WelcomeForm">
      <>
        <div>
          <label htmlFor="name">What's Your Name?</label>
          <input type="text" name="name" id="name" value={user.name} onChange={(e) => handleUser(e)} />
        </div>
        <div>
          <label htmlFor="city">Which country do you like??</label>
          <input type="text" name="city" id="city" value={user.city} onChange={(e) => handleUser(e)} />
        </div>
        <div>
          <button
            ref={refs}
            onClick={handleSaveUser}
            className={isValid ? 'disBtn' : 'truBtn'}
            disabled={isValid}
          >
            Login
          </button>
        </div>
      </>
    </div>
  );
}
