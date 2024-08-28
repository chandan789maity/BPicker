const SideBar = () => {
  return (
    <div>
      <div className="hero bg-black mt-14 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://955932585-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2Fez3yEQeiBRAa7mq7f4wF%2Fuploads%2FV7R63N2OT8yAiBnMK1CD%2FAI%20Background%20Removal.jpg?alt=media&token=952196c2-e459-466b-97fd-6b0760528dc4"
            className="w-1/3 rounded-lg shadow-2xl "
          />
          <div className="w-2/4">
            <h1 className="text-4xl font-bold">Background Remover</h1>
            <p className="py-6">
            An advanced background remover powered by deep learning technology. This tool seamlessly isolates the subject from its background, providing crisp, clean images perfect for any application. Whether you're enhancing product photos or creating professional visuals, our AI-driven solution delivers fast and accurate results, making image editing effortless.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
