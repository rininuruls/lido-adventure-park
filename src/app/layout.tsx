import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";

import "./globals.css";

export const metadata = {
  title: "Lido Adventure Park",
  description: "Adventure Nature Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}