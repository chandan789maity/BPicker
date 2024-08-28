const SideBar3 = () => {
    return (
      <div>
        <div className="hero bg-black mt-28 ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709851392/catalog/1383136721824206848/vaq9cxodaoohfxzkzecd.webp"
              className="w-1/3 rounded-lg shadow-2xl "
            />
            <div className="w-2/4">
              <h1 className="text-4xl font-bold">Insert your own Image </h1>
              <p className="py-6">
              My website provides a feature that lets you insert your own background image into your photos. Simply upload the desired background, and seamlessly blend it with your original image. This tool allows for creative customization, enabling you to tailor your images to any theme or setting effortlessly.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SideBar3;
  