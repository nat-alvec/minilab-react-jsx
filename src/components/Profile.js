import dogImg from "../assets/images/puppy.jpg";

function Profile() {
  return (
    <div>
      <img className="card-img-top" src={dogImg} alt="puppy dog" />
      <div className="card-body">
        <h5 className="card-title">Cute Puppy!</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default Profile;