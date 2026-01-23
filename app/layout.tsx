import Header from "../components/Header/Header";
import "./globals.css";
import { LanguageProvider } from "../components/LanguageContext";
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body> {/* مساحة للـ Header الثابت */}
                <LanguageProvider>
                <Header />
               
                <main>
                    {children}  {/* هنا الـ children */}
                    </main>
                </LanguageProvider>
            </body>
           
        </html>
    );
}
