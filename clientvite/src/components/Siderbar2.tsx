const SideBar2 = () => {
    return (
      <div>
        <div className="hero bg-black mt-32 ">
          <div className="hero-content flex-col lg:flex-row">
            
            <div className="w-2/4">
              <h1 className="text-4xl font-bold">Choose Your Background</h1>
              <p className="py-6">
              My website offers a versatile tool that allows you to easily change the background color of your images. With just a few clicks, you can transform the look and feel of your photos, making them more vibrant or aligning them with your brand's aesthetic. Whether you need a solid color background or a custom shade, our tool provides a seamless way to enhance your images.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
            <img
              src="https://imgv3.fotor.com/images/side/Fotor-online-background-color-changer.jpg"
              className="w-1/3 rounded-lg shadow-2xl "
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default SideBar2;
  