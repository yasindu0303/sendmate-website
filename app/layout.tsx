export const metadata = {
  title: "SendMate Logistics",
  description: "Courier, Delivery & Logistics Services",
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
