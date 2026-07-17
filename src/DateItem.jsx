export function DateItem() {
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth() + 1;

  const formattedDate = `${month}/${day}`;

  // console.log(formattedDate);

  return (
    <div className="countainerDate">
      <p>Date:{formattedDate}</p>
    </div>
  );
}
