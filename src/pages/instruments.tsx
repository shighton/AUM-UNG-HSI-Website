import React from "react";

export default function Instruments() {
  const Specifications = {
    "Spectral Range(nm)": "400 - 1000",
    "Spectral Channels": "447",
    "Spectral Bandwidth(nm)": "1.3",
    "Spectral Resolution - FWHM (nm)": 1.9,
    "Spatial Pixels": 1600,
    "Max Frame Rate (fps)": "165",
    "f/#": "2.4",
    Interface: "USB 3.0",
    "Dimensions (mm)": "265 x 106 x 75",
    "Weight, w/o lens (kg)": 2.51,
  };

  const IncludedInBox = {
    "Rational Scanning System": 1,
    Tripod: 1,
    "Software License": "Lifetime",
    "Data Acquisition Software": "Lifetime",
    "Radiometric Calibration": 1,
    "Calibration Target": 1,
    "Pawer Supply": 1,
    "Protect Travel Case": 1,
  };

  return (
    <div className="px-8 mb-16">
      <h1 className="font-bold text-xl">Instruments</h1>
      <h1 className="font-semibold mt-5">Pika XC2</h1>
      <img
        src="https://resonon.com/content/products/ic_1627935728_1280x_false.png"
        alt="camera image"
        className="w-full object-contain h-40 lg:h-52 mt-4"
      />
      <p className="text-gray-600 mt-5">
        The Pika XC2 is a high-resolution hyperspectral camera that covers the
        Visible + Near-Infrared (VNIR) spectral range. The Pika XC2 has high
        spatial resolution, best in-class spectral resolution, and excellent
        imaging quality. Popular in VNIR laboratory applications. It Pika XC2
        can be used in laboratory, and outdoor, and airborne hyperspectral
        systems, as well as standalone or integrated into any system with the
        software development kit.
      </p>
      <table className="w-full table-auto mt-5 text-left">
        <caption>Specifications</caption>
        <tbody>
          {Object.entries(Specifications).map(([key, value]) => (
            <tr key={key}>
              <td className="text-gray-600">{key}</td>
              <td className="text-gray-600">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="w-full table-auto mt-5 text-left">
        <caption>What's included in the box</caption>
        <tbody>
          {Object.entries(IncludedInBox).map(([key, value]) => (
            <tr key={key}>
              <td className="text-gray-600">{key}</td>
              <td className="text-gray-600">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
