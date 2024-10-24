import { AppSidebar } from "@/components/app-sidebar"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-14 shrink-0 items-center gap-2">
                    <div className="flex flex-1 items-center gap-2 px-3">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="line-clamp-1">
                                        Werkplanner
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-col items-center py-10 px-4">
                    {/* Project informatie */}
                    <div className="max-w-3xl text-center">
                        <h1 className="text-3xl font-bold mb-4">Werkplanner Project</h1>
                        <p className="mb-4">
                            Dit project is een werkplanner applicatie die bedrijven helpt om
                            hun planning te beheren. Dit project heb ik gemaakt aangezien ze bij mijn oude werk de roosters nog op papier hadden 
                            en dit een stuk makkelijker is.
                            Bezoek het project via de onderstaande link en gebruik de
                            volgende inloggegevens:
                        </p>
                        <p className="mb-2">
                            <strong>Link:</strong>{" "}
                            <a
                                href="https://werkplanner.semfoudraine.com/"
                                target="_blank"
                                className="text-blue-600 hover:underline"
                            >
                                werkplanner.semfoudraine.com
                            </a>
                        </p>
                        <p className="mb-2">
                            <strong>E-Mail:</strong> admin@semfoudraine.com
                        </p>
                        <p className="mb-4">
                            <strong>Wachtwoord:</strong> wachtwoord
                        </p>
                    </div>

                    {/* Carousel met foto's van het project */}
                    <div className="w-full max-w-4xl mt-8">
                        <Carousel>
                            <CarouselContent>
                                <CarouselItem>
                                    <img
                                        src="/lib/foto1.png"
                                        alt="Project afbeelding 1"
                                        className="w-full h-auto rounded"
                                    />
                                </CarouselItem>
                                <CarouselItem>
                                    <img
                                        src="/lib/foto2.png"
                                        alt="Project afbeelding 2"
                                        className="w-full h-auto rounded"
                                    />
                                </CarouselItem>
                                <CarouselItem>
                                    <img
                                        src="/lib/foto3.png"
                                        alt="Project afbeelding 3"
                                        className="w-full h-auto rounded"
                                    />
                                </CarouselItem>
                                <CarouselItem>
                                    <img
                                        src="/lib/foto4.png"
                                        alt="Project afbeelding 4"
                                        className="w-full h-auto rounded"
                                    />
                                </CarouselItem>
                                <CarouselItem>
                                    <img
                                        src="/lib/foto5.png"
                                        alt="Project afbeelding 5"
                                        className="w-full h-auto rounded"
                                    />
                                </CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
