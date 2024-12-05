
import '../app/globals.css';
import SideNav from './components/SideNav/page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SideNav />
        {children}
      </body>
    </html>
  )
}