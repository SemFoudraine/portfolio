"use client"

import { AppSidebar } from "@/components/app-sidebar"
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
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import emailjs from "emailjs-com"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [alert, setAlert] = useState({ message: "", type: "", visible: false })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.send(
            'service_9bbyqs4',
            'template_1an5ym9',
            formData,
            'cJG3aX1--yCaPGqSA'
        )
            .then((result) => {
                console.log('E-mail verstuurd', result.text)
                setAlert({ message: "Bericht is succesvol verstuurd!", type: "success", visible: true })
            })
            .catch((error) => {
                console.log('Error:', error.text)
                setAlert({ message: "Failed to send message, please try again.", type: "error", visible: true })
            })
    }

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
                                        Contact
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-10">
                    {alert.visible && (
                        <Alert variant={alert.type === "success" ? "success" : "error"} className="mb-4">
                            <AlertTitle>{alert.type === "success" ? "Succes!" : "Fout!"}</AlertTitle>
                            <AlertDescription>{alert.message}</AlertDescription>
                        </Alert>
                    )}
                    <div className="max-w-xl mb-6 text-center">
                        <h2 className="text-2xl font-semibold text-primary">Neem contact op:</h2>
                        <p className="mb-2 text-lg text-muted-foreground">semfoudraine@gmail.com</p>
                        <p className="text-lg text-muted-foreground">
                            LinkedIn: <a href="https://www.linkedin.com/in/sem-foudraine-746a67252" className="text-accent hover:underline">www.linkedin.com/in/sem-foudraine-746a67252</a>
                        </p>
                        <p className="text-lg text-muted-foreground">
                            GitHub: <a href="https://github.com/SemFoudraine" className="text-accent hover:underline">https://github.com/SemFoudraine</a>
                        </p>
                    </div>
                    <form className="space-y-4 w-full max-w-xl p-6 bg-card rounded-lg border border-border" onSubmit={handleSubmit}>
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <Label htmlFor="name" className="text-muted-foreground">Naam</Label>
                                <Input id="name" value={formData.name} onChange={handleChange} placeholder="Jouw naam" className="h-12 text-lg border-border" />
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="email" className="text-muted-foreground">E-Mail</Label>
                                <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Jouw E-Mail" className="h-12 text-lg border-border" />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="message" className="text-muted-foreground">Bericht</Label>
                            <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Jouw bericht" className="h-24 text-lg border-border resize-none" />
                        </div>
                        <Button type="submit" className="h-12 text-lg bg-primary text-primary-foreground hover:bg-accent transition duration-200">Verstuur bericht</Button>
                    </form>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
