import React, { useState } from "react";
import { ColorResult } from "react-color";

import FilenameInput from "../../components/FilenameInput";
import SizeInput from "../../components/SizeInput";
import TypeInput from "../../components/TypeInput";
import FormatSelect from "../../components/FormatSelect";
import CropCheckbox from "../../components/CropCheckbox";
import BgImgUrlInput from "../../components/BgImgUrlInput";
import BgImgFileInput from "../../components/BgImgFileInput";
import FileInput from "../../components/FileInput";
import ColorPicker from "../../components/ColorPicker";
import ImageResult from "../../components/ImageResult";
import Background from "../../components/Background";
import Navbar from "../../components/Navbar";

const RemoveImage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [filename, setFilename] = useState("bg_removed.png");
  const [size, setSize] = useState("auto");
  const [type, setType] = useState("auto");
  const [format, setFormat] = useState("png");
  const [crop, setCrop] = useState(false);
  const [bgcolor, setBgcolor] = useState("#ffffff"); // Default to white
  const [bgimgurl, setBgimgurl] = useState("");
  const [bgimgfile, setBgimgfile] = useState("");
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select an image file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("filename", filename);
    formData.append("size", size);
    formData.append("type", type);
    formData.append("format", format);
    formData.append("crop", String(crop)); // Convert boolean to string
    formData.append("bgcolor", bgcolor);
    formData.append("bgimgurl", bgimgurl);
    formData.append("bgimgfile", bgimgfile);

    try {
      const response = await fetch("http://localhost:5000/remove-bg", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error removing background: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setResultImage(url);
      setError(null);
    } catch (err) {
      console.error(err);
      setError((err as Error).message);
      setResultImage(null);
    }
  };

  const handleColorChange = (color: ColorResult) => {
    setBgcolor(color.hex);
  };

  const toggleColorPicker = () => {
    setShowColorPicker(!showColorPicker);
  };

  return (
    <div className=" bg-black w-full">
      <section id="file">
        <h1 className="text-3xl font-bold mb-8 mt-20 bg-gradient-to-r from-gemini-start to-gemini-end bg-clip-text text-transparent bg-[length:200%_200%] animate-text-gradient">
          Upload your File here
        </h1>
        <FileInput onChange={handleFileChange} />
        <div className="flex justify-center mt-5 ">
          <FilenameInput
            filename={filename}
            onChange={(e) => setFilename(e.target.value)}
          />
          <SizeInput size={size} onChange={(e) => setSize(e.target.value)} />
          <TypeInput type={type} onChange={(e) => setType(e.target.value)} />
        </div>
        <div className=" flex my-5 justify-center">
          <ColorPicker
            color={bgcolor}
            onChange={handleColorChange}
            onToggle={toggleColorPicker}
            showPicker={showColorPicker}
          />
          <CropCheckbox
            crop={crop}
            onChange={(e) => setCrop(e.target.checked)}
          />
        </div>

        <div className="flex justify-center mb-5">
          <BgImgUrlInput
            bgimgurl={bgimgurl}
            onChange={(e) => setBgimgurl(e.target.value)}
          />
          <BgImgFileInput
            bgimgfile={bgimgfile}
            onChange={(e) => setBgimgfile(e.target.value)}
          />
        </div>

        <FormatSelect
          format={format}
          onChange={(e) => setFormat(e.target.value)}
        />
        {error && <div>Error: {error}</div>}
        <ImageResult resultImage={resultImage} filename={filename} />
        <button
          onClick={handleSubmit}
          className=" mt-5 mb-11 relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
            Remove Background
          </span>
        </button>

        
      </section>
    </div>
  );
};

export default RemoveImage;
