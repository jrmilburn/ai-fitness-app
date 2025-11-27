import TopBar from "@/components/navbar/top-bar";

export default async function ClientLayout({ children } : { children : React.ReactNode}) {

    return (
        <div className="w-full h-screen overflow-y-auto">
            <TopBar />
            {children}
        </div>
    )

}