import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
export default function Contact() {
    return (
        <div className="flex space-x-10 border justify-center pt-5 pb-5 pl-5">
            <div className="">
            <Card>
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Email: contact@UFGP.com</p>
              </CardContent>
              <CardContent>
                <p>Tel: 1234567890</p>
              </CardContent>
            </Card>
            </div>
        </div>
    )
  }
  