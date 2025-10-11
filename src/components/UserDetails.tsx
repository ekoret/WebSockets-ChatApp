import imgUrl from "./assets/neo-banana-cat.jpg";

function UserDetails() {
  return (
    <div className="bg-user-details-bg rounded py-2 px-4 flex gap-4">
      <div>
        <img className="rounded-full max-w-[50px]" src={imgUrl} />
      </div>
      <div>
        <small>Logged in as</small>
        <h3>ekoret</h3>
      </div>
    </div>
  );
}

export default UserDetails;
