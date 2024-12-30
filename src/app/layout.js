import './globals.css'; // Updated path if you moved `globals.css`

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio website!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-900 to-black text-white">
        {children}
      </body>
    </html>
  );
}
