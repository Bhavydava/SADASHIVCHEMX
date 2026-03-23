import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import handleScrollTop from "../allconst/ScrollTop";

const NotFoundPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#060918",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // Changed to flex-start to respect top padding
        fontFamily: "'Poppins', sans-serif",
        padding: "160px 20px 40px 20px", // High top padding for Navbar
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow blobs */}
      <div style={{
        position: "absolute",
        width: "500px",
        height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(179,173,121,0.08) 0%, transparent 70%)",
        top: "-100px",
        left: "-100px",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(179,173,121,0.06) 0%, transparent 70%)",
        bottom: "-80px",
        right: "-80px",
        pointerEvents: "none",
      }} />

      {/* 404 Big Text */}
      <h1
        style={{
          fontSize: "clamp(100px, 20vw, 180px)",
          fontWeight: "900",
          margin: 0,
          lineHeight: 1,
          background: "linear-gradient(135deg, #b3ad79, rgba(179,173,121,0.3))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-5px",
          animation: "fadeSlideUp 0.8s ease-out forwards",
          opacity: 0,
        }}
      >
        404
      </h1>

      {/* Divider Line */}
      <div
        style={{
          width: "80px",
          height: "3px",
          backgroundColor: "#b3ad79",
          borderRadius: "3px",
          margin: "20px auto",
          boxShadow: "0 0 12px rgba(179,173,121,0.5)",
          animation: "fadeSlideUp 0.8s 0.2s ease-out forwards",
          opacity: 0,
        }}
      />

      {/* Message */}
      <h2
        style={{
          color: "#ffffff",
          fontSize: "clamp(18px, 3vw, 26px)",
          fontWeight: "600",
          margin: "0 0 10px 0",
          letterSpacing: "2px",
          textTransform: "uppercase",
          animation: "fadeSlideUp 0.8s 0.35s ease-out forwards",
          opacity: 0,
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: "clamp(13px, 1.5vw, 16px)",
          textAlign: "center",
          maxWidth: "420px",
          lineHeight: "1.8",
          marginBottom: "40px",
          animation: "fadeSlideUp 0.8s 0.5s ease-out forwards",
          opacity: 0,
        }}
      >
        The page you are looking for doesn't exist or has been moved. Let's get you back on track.
      </p>

      {/* Go Home Button */}
      <Link
        to="/"
        onClick={handleScrollTop}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "14px 36px",
          backgroundColor: "#b3ad79",
          color: "#060918",
          fontWeight: "700",
          fontSize: "15px",
          borderRadius: "50px",
          textDecoration: "none",
          letterSpacing: "1px",
          textTransform: "uppercase",
          boxShadow: "0 0 25px rgba(179,173,121,0.35)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
          animation: "fadeSlideUp 0.8s 0.65s ease-out forwards",
          opacity: 0,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "scale(1.06)";
          e.currentTarget.style.boxShadow = "0 0 40px rgba(179,173,121,0.55)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 0 25px rgba(179,173,121,0.35)";
        }}
      >
        ← Back to Home
      </Link>

      {/* Keyframe styles */}
      <style>{`
        @keyframes fadeSlideUp {
          0%   { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
