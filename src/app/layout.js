import "./globals.css";

export const metadata = {
  title: "Scout",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" text-white bg-dark">
      {/* <div className="absolute inset-0  pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div> */}

        {children}
        
      </body>
    </html>
  );
}
