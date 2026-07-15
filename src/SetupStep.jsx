export function SetupStep({ children }) {
  return (
    <div className="Setup">
      <div>
        <h1>Welcome! Let's get to know you</h1>
      </div>
      <div className="form">{children}</div>
    </div>
  );
}
